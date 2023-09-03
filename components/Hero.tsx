import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* text pane - left-side */}
        <div className="flex flex-col mb-32 ml-12 space-y-6 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Welcome to Crop Insights AI
          </h1>
          <p className="max-w-md text-center md:text-left text-darkGrayishBlue">
            Your Source for Optimized Crop Yields. Get Tailored Insights for
            Your Crops to enhance your agricultural practices, boost your
            harvests, and achieve your agricultural goals.
          </p>
          <div className="flex justify-start">
            <Link
              href="/Register"
              className="hidden md:block py-2 px-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* image - right-side */}
        <div className="md:w-1/2">
          <div className="flex justify-center">
            <Image
              src="/agritech.jpeg"
              alt="right side"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
