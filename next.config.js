/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: '*.4sqi.net',
            pathname: '/**'
        }, {
            protocol: 'https',
            hostname: '*.dummyimage.com',
            pathname: '/**'
        },{
            protocol: 'https',
            hostname: '*.unsplash.com',
            pathname: '/**'
        }]


    }
}

module.exports = nextConfig
