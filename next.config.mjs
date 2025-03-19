import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: [
      'payload.feed.markusevanger.no',
      'localhost'
    ],
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
