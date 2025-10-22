/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_ACTIONS === 'true';
const repo = 'L7insIT'; // <-- your exact repo name

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // If you're NOT using a custom domain and will view at
  // https://<user>.github.io/<repo>/, keep basePath/assetPrefix on:
  ...(isPages ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {})
};
module.exports = nextConfig;
