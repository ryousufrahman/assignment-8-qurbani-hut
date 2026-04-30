import AllcowPage from "@/comonents/AllcowPage";
import CowCard from "@/comonents/CowCard";


const AllAnimalPage = async () => {
    const res = await fetch('https://assignment-8-qurbani-hut.vercel.app/data.json')
    const allcow = await res.json()
    return (
        <div className="max-w-[1240px] mx-auto ">
            <h2 className="text-3xl font-bold text-green-500">All animals </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
               {
                allcow.map(cow=> <CowCard key={cow.id} cow={cow}></CowCard>)
               }

            </div>
        </div>
    );
    
    
};

export default AllAnimalPage;