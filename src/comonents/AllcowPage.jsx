import CowCard from "./CowCard";

const AllcowPage = async () => {
  const res = await fetch(
    "https://assignment-8-qurbani-hut.vercel.app/data.json",
  );
  const allcow = await res.json();
  return (
    <div className="max-w-[1240px] mx-auto">
      <h2 className="text-3xl px-4 font-bold text-green-500 my-8">
        All animals{" "}
      </h2>
      <div className="sort flex justify-center my-5 ">
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by price
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Lowest to Highest</a>
            </li>
            <li>
              <a>Highest to Lowest</a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="grid px-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {allcow.map((cow) => (
          <CowCard key={cow.id} cow={cow}></CowCard>
        ))}
      </div>
    </div>
  );
};

export default AllcowPage;
