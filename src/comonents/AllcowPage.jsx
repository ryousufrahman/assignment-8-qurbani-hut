

const AllcowPage = async () => {
    const res = await fetch('https://assignment-8-qurbani-hut.vercel.app/data.json')
    const allcow = await res.json()
    return (
        <div>
            <h2 className="text-3xl font-bold text-green-500">All animals </h2>
            <div></div>
        </div>
    );
};

export default AllcowPage;