import * as React from "react"
import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    const name = process.env.serviceName
    const nameplain = process.env.serviceNamePlain
    const domain = process.env.serviceDomain
    const description = process.env.serviceDescription
    const icon = process.env.serviceIcon
    return (
      <Html>
        <Head>
        <link rel="alternate" hrefLang="en" href={"https://" + domain + "/"}/>
        <link rel="alternate" hrefLang="ja" href={"https://" + domain + "/ja/"}/>
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="format-detection" content="telephone=no"/>
        <link rel="icon" href={icon} />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
