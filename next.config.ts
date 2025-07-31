import type { NextConfig } from "next";

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  scope: "/",
  start_url: "/",
});

const nextConfig: NextConfig = {
  // TurboPack 설정
  images: {
    domains: ["openweathermap.com"],
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  // webpack 설정
  webpack: (config, { isServer, dev }) => {
    if (dev) {
      // 개발 환경에서만 HMR 비활성화
      config.watchOptions = {
        ignored: /node_modules/,
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    // @ts-expect-error 타입 에러 무시
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              typescript: true,
              ext: "tsx",
            },
          },
        ],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default withPWA(nextConfig);
