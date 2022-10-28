import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import {ThemeProvider} from "next-themes";
import Head from "next/head";
import Transition from "../components/Transition";
import SmoothScroll from "../components/SmoothScroll/SmoothScroll";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
      <>
          <Head>
              <title>Piotr Szczypka - Creative Dev</title>
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                          <link rel="manifest" href="/site.webmanifest"/>
                              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                                  <meta name="msapplication-TileColor" content="#da532c"/>
                                      <meta name="theme-color" content="#ffffff"/>
          </Head>
          <ThemeProvider attribute="class" enableSystem={true}>
            <SmoothScroll>
                <Transition>
                    <Component {...pageProps}/>
                </Transition>

            </SmoothScroll>

          </ThemeProvider>

      </>
  )
};

export default trpc.withTRPC(MyApp);
