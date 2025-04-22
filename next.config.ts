/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import type { NextConfig } from "next";
import "./src/env.js";

/** @type {import("next").NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  rewrites: async () => {
    return [
      // App shell (since we use React Router)
      {
        source: "/:path*",
        destination: "/static-app-shell",
        missing: [
          {
            type: "header",
            key: "x-trpc-batch",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
