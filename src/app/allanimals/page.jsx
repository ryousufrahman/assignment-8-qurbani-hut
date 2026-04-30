

const AllAnimalPage = async () => {
    const res = await fetch('/public/CowData.json')
    const AllCow = await res.json()
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">All Animal</h2>
            <div>
                sort
            </div>
            <div>
                 <h2>{AllCow.length}</h2>
            </div>
        </div>
    );
};

export default AllAnimalPage;