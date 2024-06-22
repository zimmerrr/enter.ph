addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL('https://enter-ph.pages.dev/') // Replace with your dev URL
  return Response.redirect(url, 301) // Use 301 for permanent redirect
}
