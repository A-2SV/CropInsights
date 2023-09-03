import Feature from "@/components/Features";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
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
        {/* <WeatherSection /> */}
        {/* <SoilSection /> */}
        {/* <PestSection /> */}
        {/* <DiseaseSection /> */}
      </div>
    </main>
  );
}
