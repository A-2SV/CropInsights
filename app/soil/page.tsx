// page.tsx
import Image from 'next/image'
import SoilComponent from '@/components/SoilComponent'; // Import the SoilComponent

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* Include the SoilComponent here */}
            <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white mt-8">
                <SoilComponent />
            </div>
        </main>
    );
}
