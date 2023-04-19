import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta content="Where Imagination meets Reality" name="Wanderverse" />
          <meta
            content="Wanderverse - NFT Marketplace for Artists"
            property="og:title"
          />
          <meta
            content="Epic NFT Marketplace for artists"
            property="og:description"
          />
          <meta content="%PUBLIC_URL%/fb-og-image.png" property="og:image" />
          <meta
            property="og:site_name"
            content="Wanderverse - Where Imagination Meets Reality"
          />
          <meta
            content="Wanderverse - Where Imagination Meets Reality"
            property="twitter:title"
          />
          <meta
            content="Wanderverse - Where Imagination Meets Reality"
            property="twitter:description"
          />
          <meta
            content="%PUBLIC_URL%/twitter-card.png"
            property="twitter:image"
          />
          <meta property="og:type" content="Article" />
          <meta content="summary" name="twitter:card" />
          <meta name="twitter:site" content="@ui8" />
          <meta name="twitter:creator" content="@ui8" />
          <meta property="fb:admins" content="132951670226590" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="app">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
