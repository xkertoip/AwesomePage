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
          <div className={'text-center'}>
              <h4 className={'text-4xl '}>siema tu nowy ja </h4>
             <ToggleTheme/>

          </div>

      </main>
    </>
  );


export default Home;
