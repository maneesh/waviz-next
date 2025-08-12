import Banner from "@/component/home/Banner";
import Navbar from "@/component/home/Navbar";
import Hero from "@/component/home/Hero";
import Footer from "@/component/home/Footer"
import Title from "@/component/home/Title";
import Main from "@/component/home/Main";
import About from "@/component/home/About";

export default function Home() {
  return (
    <div >

      <Navbar />
      <Banner />
      <Hero />
      <Title />
      <About />
      <Main />
      <Footer />

    </div>
  );
}
