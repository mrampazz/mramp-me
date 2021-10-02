import Head from 'next/head'

export default function CustomHead() {
  return (
    <Head>
      <title>mramp</title>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      ></link>
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      ></link>
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      ></link>
      <link rel='manifest' href='/site.webmanifest'></link>
      <link rel='preconnect' href='https://fonts.googleapis.com'></link>
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin
      ></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        rel='preload'
        as='style'
      ></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        rel='stylesheet'
      ></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
        rel='stylesheet'
      ></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins&display=swap'
        rel='preload'
        as='style'
      ></link>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
    </Head>
  )
}
