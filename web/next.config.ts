import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    /* config options here */
    output: 'standalone',

    webpack: (config) => {
        console.log(config.resolve.alias);
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve('./src'),
            '@/locales': path.resolve('./src/locales'),
            '@/utils': path.resolve('./src/utils'),
            '@/store': path.resolve('./src/store'),
            '@/data': path.resolve('./src/data'),
        };
        return config;
    },
};

export default nextConfig;
