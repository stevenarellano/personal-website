/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable Turbopack for development and build
    turbopack: {
        // Turbopack configuration
        rules: {
            // Add any custom webpack loaders if needed
        },
        resolveAlias: {
            // Path aliases (matching your tsconfig.json)
            '@': './src',
        },
        resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    // Output configuration
    output: 'export',
    distDir: 'build',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },

    // Disable server-side features for static export
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
}

export default nextConfig
