/** @type {import('next').NextConfig} */
const nextConfig = {
    turbopack: {
        rules: {},
        resolveAlias: {
            '@': './src',
        },
        resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

export default nextConfig
