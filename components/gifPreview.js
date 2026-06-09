/**
 * Converts a GIF URL to a static JPEG via the wsrv.nl image proxy.
 * WhatsApp's link-preview crawler does not support GIF format — only JPG, PNG, or WebP.
 * wsrv.nl fetches the GIF, extracts frame 0, and returns it as a JPEG.
 */
export function gifToJpg(gifUrl) {
  const urlWithoutScheme = gifUrl.replace(/^https?:\/\//, "")
  return `https://wsrv.nl/?url=${urlWithoutScheme}&output=jpg&page=0`
}
