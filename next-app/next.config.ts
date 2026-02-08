import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // ← игнорировать ошибки ESLint при сборке
    },
};

export default nextConfig;
