'use server'

export async function submitToWaitlist(data: { email: string; name?: string; position?: string }) {
  // ⚠️ REPLACE THIS URL WITH THE ONE YOU COPIED FROM GOOGLE APPS SCRIPT
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyax1snhyTS9u_UiDzpi167cJEe3sRGy6AdHCmSSgSPLOHv8MbuoFSfnwaCOCrZjZ1n/exec'

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      // Using text/plain prevents CORS preflight errors with Google Scripts
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (result.status === 'success') {
      return { success: true }
    } else {
      return { error: result.message || 'Failed to join waitlist' }
    }
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return { error: 'An unexpected error occurred. Please try again.' }
  }
}