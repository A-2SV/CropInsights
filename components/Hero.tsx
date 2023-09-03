// components/HeroSection.tsx

function HeroSection() {
    return (
        <section className="bg-cover bg-center bg-fixed bg-no-repeat h-screen text-white" style={{ backgroundImage: 'url(")' }}>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-4xl font-bold mb-4">Welcome to Crop Insights AI</h1>
                <p className="text-lg mb-6">Your Source for Optimized Crop Yields</p>
                <p className="text-lg mb-12">Get Tailored Insights for Your Crops</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">Get Started</button>
            </div>
        </section>
    );
}

export default HeroSection;
