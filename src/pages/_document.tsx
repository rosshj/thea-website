import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Font loading will be handled by the @font-face declarations in globals.css */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 