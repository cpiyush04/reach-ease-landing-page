'use server'
import { headers } from 'next/headers'

const recentSubmissions = new Map<string, number>();

export async function submitToWaitlist(data: {
  email: string;
  name?: string;
  position?: string;
}) {
  const ip = (await headers()).get('x-forwarded-for') ?? 'unknown';
  if (Date.now() - (recentSubmissions.get(ip) ?? 0) < 10_000) {
    return { error: 'Too many requests. Please wait a moment.' };
  }
  recentSubmissions.set(ip, Date.now());

  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
  if (!GOOGLE_SCRIPT_URL) throw new Error('Missing GOOGLE_SCRIPT_URL env var');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        ...data,
        secret: process.env.WAITLIST_SECRET,
      }),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    const result = await response.json();
    return result.status === 'success'
      ? { success: true }
      : { error: 'Failed to join waitlist' };

  } catch (error) {
    clearTimeout(timeout);
    console.error('Waitlist error:', error);
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}