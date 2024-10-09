/** @type {import('next').NextConfig} */

export async function redirects() {
  return [
    // Basic redirect
    {
      source: '/',
      destination: '/zh',
      permanent: true,
    },
  ]
}