import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Sections";
import ToggleTheme from "../components/ToggleTheme";


const Home: NextPage = () => (
    <>
      <Head>
        <title>Piotr Szczypka - Creative Dev</title>
        <meta name="description" content="Folio - Piotr Szczypka. Creative React Front end Developer based in Poland. Hire Developer" />

      </Head>

      <main>
          <Hero/>
          <div id={'about'}>
              siema<br/>
              siema<br/>
              siema<br/>
              siema<br/>
              siema<br/>
              siema<br/>
              siema<br/>
              siema<br/>
              siema<br/>
              siema<br/>
              siema<br/>
              siema<br/>
              siema<br/>
          </div>
          <div className={'text-center'}>
             <ToggleTheme/>
          </div>

      </main>
    </>
  );


export default Home;
