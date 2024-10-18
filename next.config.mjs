/** @type {import('next').NextConfig} */
import { fileURLToPath } from "node:url"

import { createJiti } from "jiti"
const jiti = createJiti(fileURLToPath(import.meta.url))
await jiti.import("./src/env")

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
}

export default nextConfig
