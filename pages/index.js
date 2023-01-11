import Head from "next/head";
import Header from "../components/Global/Header/Header";
import Features from "../components/Home/Features/Features";
import Hero from "../components/Home/Hero/Hero";
import Footer from "../components/Global/Footer/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>FiMeds</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
