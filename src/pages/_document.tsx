import { Html, Head, Main, NextScript } from 'next/document'

const CustomDocument = () => {
  const url = 'https://bitbearclub.art'
  const title = 'BitBearClub'
  // prettier-ignore
  const description = 'A collector\'s NFT item project of bears using pixel art.'

  return (
    <Html lang="ja-JP">
      <Head>
        {/* Change the contents of `<Head>` as needed. */}
        <meta name="theme-color" content="#EBE9DA" />
        <meta name="description" content={description} />
        {/* OGP */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${url}/assets/images/ogp.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default CustomDocument
