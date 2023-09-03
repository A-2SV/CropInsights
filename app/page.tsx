import Feature from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/cta";
import Image from "next/image";

export default function Home() {
  // ChatComponent ? Why make a new component?
  // ChatComponent -> client, text inputs -> onChange -> we need to make a client side component
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <NavBar />
        <Hero />
        <CTA />
        <Feature />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
