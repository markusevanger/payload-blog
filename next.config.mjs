import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: [
      'feed.payload.markusevanger.no',
      'localhost'
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
