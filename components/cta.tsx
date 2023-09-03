import Link from "next/link";
const CTA = () => {
  return (
    <section id="cta" className="bg-gray-800">
      <div className="container flex flex-col items-center justify-between px-12 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
        Get Tailored Insights for Your Crops.
        </h2>
        <div>
          <Link
            href="/Register"
            className="hidden md:block py-2 px-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;