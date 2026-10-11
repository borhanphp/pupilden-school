import Header from "@/components/header";
import Hero from "@/components/hero";
import Vision from "@/components/vision";
import About from "@/components/about";
import Ecosystem from "@/components/ecosystem";
import Impact from "@/components/impact";
import Leadership from "@/components/leadership";
import DigitalClasses from "@/components/digital-classes";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Vision />
        <About />
        <Ecosystem />
        <Impact />
        {/* <Leadership /> */}
        <DigitalClasses />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
