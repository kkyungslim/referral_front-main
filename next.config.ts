import type { NextConfig } from 'next';
import _ENV_SERVER from './_ENV/ENV_SERVER.js';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['thetherbase.s3.ap-northeast-2.amazonaws.com' , 'lim-tetherbase.s3.ap-northeast-2.amazonaws.com'], // 허용할 도메인 추가
  },
};

export default nextConfig;

///////////////////////////////////////////////////////////////////
// 추후 수정해야할 일이 있으면 수정

const SERVER_URL = getServerUrl();

const _nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*/',
        destination: SERVER_URL,
      },
    ];
  },
};

function getServerUrl() {
  if (!_ENV_SERVER.SERVER_URL || !_ENV_SERVER.API_PREFIX) {
    throw new Error('.env에 SERVER_URL과 API_PREFIX를 추가해주세요.');
  }
  const SERVER_URL = _ENV_SERVER.SERVER_URL + _ENV_SERVER.API_PREFIX + '/api/';

  return SERVER_URL;
}
