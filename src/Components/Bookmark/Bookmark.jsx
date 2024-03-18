

const Bookmark = ({blog}) => {
    const {Title}=blog;
    return (
        <div >
           
            <div className=' bg-slate-200 text-4xl border-r-2 p-3 m-3 border-2 border-solid border-indigo-600'>
                <h1>{Title}</h1>
            </div>
        </div>
    );
};

export default Bookmark;