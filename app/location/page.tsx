import Image from "next/image";
import WeatherLocationComponent from "@/components/LocationComponent";

export default function Home() {
  // ChatComponent ? Why make a new component?
  // ChatComponent -> client, text inputs -> onChange -> we need to make a client side component

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Include the WeatherComponent here */}
      <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white mt-8">
        <WeatherLocationComponent />
      </div>
    </main>
  );
}
