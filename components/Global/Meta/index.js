{/*  */ }

import Head from "next/head";

const Meta = ({ title, description, image }) => {
  
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,700;1,700&family=Prata&family=Lora:wght@700&display=swap" rel="stylesheet" />
      <title>YITAS</title>
    </Head>
  )
}

export default Meta
