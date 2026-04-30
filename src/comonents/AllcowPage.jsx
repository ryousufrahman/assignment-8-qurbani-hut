

const AllcowPage = async () => {
    const res = await fetch('https://assignment-8-qurbani-hut.vercel.app/data.json')
    const allcow = await res.json()
    return (
        <div>
            <h2>{allcow.length}</h2>
        </div>
    );
};

export default AllcowPage;