import Image from "next/image";
import ChatComponent from "@/components/chatcomponent";
import WeatherComponent from "@/components/WeatherComponent";
import PestComponent from "@/components/PestComponent";
// import PestComponent from "@/components/PestComponent";

export default function Home() {
  // ChatComponent ? Why make a new component?
  // ChatComponent -> client, text inputs -> onChange -> we need to make a client side component

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white">
        <h2 className="text-2xl">Crop Insights AI Chat</h2>
        <ChatComponent />
      </div>

      {/* Include the WeatherComponent here */}
      <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white mt-8">
        <WeatherComponent />
      </div>

      <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white mt-8">
        <PestComponent />
      </div> 
    </main>
  );
}
