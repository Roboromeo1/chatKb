import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="https://cdn.jsdelivr.net/npm/disable-inspect@1.0.1/dist/main.js"></script>
      <script>disableInspect();</script>
    </Html>
  )
}
