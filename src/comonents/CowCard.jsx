import Image from "next/image";

const CowCard = ({cow}) => {
  return (
    <div className="">
      <div className=" rounded-2xl overflow-hidden shadow  hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
        {/* Animal Image */}
        <div className="flex  justify-center items-center bg-gray-100  p-4">
          <Image
            src={cow.image}
            alt={cow.name}
            width={300}
            height={100}
            
            className=" object-contain  h-50 w-80 rounded" ></Image>
          
        </div>

        {/* Animal Details */}
        <div className="p-5 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {cow.name}
          </h2>

          <p className="text-gray-500 text-sm mb-2">
            Breed: <span className="font-medium">{cow.breed}</span>
          </p>

          <p className="text-3xl font-extrabold text-green-600 mb-4">
            ৳{cow.price.toLocaleString()}
          </p>

          <button className=" btn rounded w-full bg-green-600 hover:bg-green-700 text-white font-semibold   transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CowCard;
