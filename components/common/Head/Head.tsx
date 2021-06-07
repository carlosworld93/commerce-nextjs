import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'
import head from 'next/head'

const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />

        <link
          rel="shortcut icon"
          href="images/apple-touch-icon.png"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        {/* <link rel="stylesheet" href="/css/bootstrap.min.css" /> */}

        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <link rel="stylesheet" href="/css/custom.css" />

        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        />
      </NextHead>
    </>
  )
}

export default Head
