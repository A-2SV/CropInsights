const Feature = () => {
  return (
    <section id="features">
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* left */}
        <div className="flex flex-col space-y-12 ml-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's Provided by Us?
          </h2>
          <p className="max-w-sm text-center md:text-left">
            CropInsights AI provides middle scale to Large scale farmers
            assisatnce and guidance for Optimized Crop Yields. Farmers get
            Tailored Insights for their day to day activities in order to
            enhance your agricultural practices, boost your harvests, and
            achieve your agricultural goals.
          </p>
        </div>
        {/* right */}
        <div className="flex flex-col space-y-8 mr-12 md:w-1/2">
          {/* item 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-500">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Provide Financial Advice
                </h3>
              </div>
            </div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Provide Financial Advice
            </h3>
            <p className="text-darkGrayishBlue">
              Tencoba provides members with all the basic financing tools that
              are tailor-made to meet the goals of the group in terms of
              finances. Tencoba provides members with all the basic financing
              tools that are tailor-made to meet the goals of the group in terms
              of finances.
            </p>
          </div>
          {/* item 2 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-500">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Provide Financial Advice
                </h3>
              </div>
            </div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Provide Financial Advice
            </h3>
            <p className="text-darkGrayishBlue">
              Tencoba provides members with all the basic financing tools that
              are tailor-made to meet the goals of the group in terms of
              finances. Tencoba provides members with all the basic financing
              tools that are tailor-made to meet the goals of the group in terms
              of finances.
            </p>
          </div>
          {/* item 3 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-blue-500">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Provide Financial Advice
                </h3>
              </div>
            </div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Provide Financial Advice
            </h3>
            <p className="text-darkGrayishBlue">
              Tencoba provides members with all the basic financing tools that
              are tailor-made to meet the goals of the group in terms of
              finances. Tencoba provides members with all the basic financing
              tools that are tailor-made to meet the goals of the group in terms
              of finances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
