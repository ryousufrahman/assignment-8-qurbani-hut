import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-green-50 via-white to-green-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-full text-sm mb-4">
              Trusted Qurbani Animal Marketplace
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Find Your Perfect{" "}
              <span className="text-green-600">Qurbani Animal</span> Easily
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Browse premium cows, goats, and other healthy Qurbani animals from
              trusted farms across Bangladesh. Safe, reliable, and hassle-free
              buying experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded btn shadow-md transition duration-300">
                Browse Animals
              </button>

              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold  btn px-8 py-4 rounded transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-40"></div>

            {/* <Image
              src=""
              alt="Qurbani Cow"
              className="relative z-10 w-full m object-contain drop-shadow-2xl"
            > </Image> */}
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-green-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-300 rounded-full opacity-20"></div>
      </section>
    </div>
  );
};

export default Banner;
