import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="max-w-6xl px-5 max-auto mt-32 text-center ml-12">
        <h2 className="text-4xl font-bold text-center">
          What's Different about Us?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center space-y-6 rounded-lg bg-gray-800 md:w-1/3">
            <Image
              src="/one.jpeg"
              alt="Gabriel Dee"
              width={64}
              height={64}
              className="w-16 -mt-10 rounded-full"
            />
            <h5 className="text-lg font-bold">Gabriel Dee</h5>
            <p className="text-sm text-darkGrayishBlue mx-5 py-8">
              Crop Insights has increased my production rate and crop yield to
              an estimate of 10% since i first used it it is very nice.
            </p>
          </div>

          <div className="hidden flex-col items-center space-y-6 rounded-lg bg-gray-800 md:flex md:w-1/3">
            <Image
              src="/two.jpeg"
              alt="Johnson Jr."
              width={64}
              height={64}
              className="w-16 -mt-10 rounded-full"
            />
            <h5 className="text-lg font-bold">Johnson Jr.</h5>
            <p className="text-sm text-darkGrayishBlue mx-5 py-8">
              Before Crop Insigts AI I was struggling with Ease of obtaining
              Insights on weather in relation to agriculture for my specific
              location but for now everything is good
            </p>
          </div>

          <div className="hidden flex-col items-center space-y-6 rounded-lg bg-gray-800 md:flex md:w-1/3">
            <Image
              src="/three.jpeg"
              alt="Gwakisa Deke"
              width={64}
              height={64}
              className="w-16 -mt-10 rounded-full"
            />
            <h5 className="text-lg font-bold">Gwakisa Deke</h5>
            <p className="text-sm text-darkGrayishBlue mx-5 py-8">
              Crop Insights has increased my production rate and crop yield to
              an estimate of 10% since i first used it it is very nice.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-16">
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

export default Testimonials;
