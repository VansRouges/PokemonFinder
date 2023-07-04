/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "raw.githubusercontent.com"
            }
        ]
    }
}

module.exports = nextConfig
