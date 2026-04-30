import AllcowPage from "@/comonents/AllcowPage";
import CowCard from "@/comonents/CowCard";


const AllAnimalPage = async () => {
    const res = await fetch('https://assignment-8-qurbani-hut.vercel.app/data.json')
    const allcow = await res.json()
    return (
        <div className="max-w-[1240px] mx-auto ">
           
            {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
               {
                allcow.map(cow=> <CowCard key={cow.id} cow={cow}></CowCard>)
               }

            </div> */}
            <AllcowPage></AllcowPage>
        </div>
    );
    
    
};

export default AllAnimalPage;