// import App from 'next/app'
import "../assets/styles/App.css"
import "../assets/styles/index.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.0.1/dist/sketchy/bootstrap.min.css" rel="stylesheet"
                    crossorigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
                    integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />

            </Head>
            <Component {...pageProps} />
        </>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return {...appProps}
// }

export default MyApp