import Image from "next/image";
import ChatComponent from "@/components/ChatComponent";
import WeatherComponent from "@/components/WeatherComponent";
import PestComponent from "@/components/PestComponent";
import DiseaseComponent from "@/components/DiseaseComponent";

export default function Home() {
  // ChatComponent ? Why make a new component?
  // ChatComponent -> client, text inputs -> onChange -> we need to make a client side component

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">  
      {/* Include the DiseaseComponent here */}
      <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white mt-8">
        <h2 className="text-2xl">Pest Outbreak Insights</h2>
        <PestComponent />
      </div>
    </main>
  );
}
