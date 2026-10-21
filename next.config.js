const fs = require("fs")
const path = require("path")

const pages = fs
  .readdirSync(path.resolve(__dirname, "pages"), { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)

// Slack only renders a GIF large when the shared URL is the image itself.
function gifRedirectsForSlack() {
  return pages.flatMap((page) => {
    const indexPath = path.resolve(__dirname, "pages", page, "index.js")
    if (!fs.existsSync(indexPath)) return []

    const content = fs.readFileSync(indexPath, "utf8").replace(/^\s*\/\/.*$/gm, "")
    const match = content.match(/\/assets\/[^"'`\s]+\.gif/)
    if (!match) return []

    return [
      {
        source: `/${page.replace(/[+*?()[\]{}:]/g, "\\$&")}`,
        has: [{ type: "header", key: "user-agent", value: ".*Slackbot.*" }],
        destination: match[0],
        permanent: false,
      },
    ]
  })
}

module.exports = {
  env: { pages },
  async redirects() {
    return gifRedirectsForSlack()
  },
  webpack: (config, options) => {
    config.resolve.alias["react-native"] = "react-native-web"
    return config
  },
  images: {
    domains: ["terminalgifapi.com"],
  },
}
