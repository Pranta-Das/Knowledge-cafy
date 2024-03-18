import {  FaBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';
const Blog = ({ blog, handleBookmarks , handleMarkasRead}) => {
    // console.log(blog);
    const {Title, CoverPicture, ReadingTimes, AuthorImage, Author, PostedDate, Hashtags} = blog;
 
    return (
        <div className="mb-20 space-y-4">
            <img src={CoverPicture} alt={`Cover picture of the title ${Title}`}></img>

            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={AuthorImage} alt=""  />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{Author}</h3>
                        <p>{PostedDate}</p>
                    </div>
                </div>
                <div>
                    <span>{ReadingTimes} min red</span>
                    <span className="pl-2"><button onClick={()=>handleBookmarks(blog)}><FaBookmark></FaBookmark></button></span>
                </div>
            </div>
             <h2>Blog title:{Title}</h2>
             <p>
                {
                    Hashtags.map((hash, idx) => <span key={idx}> <a href="http://">{hash}</a></span>)
                }
             </p>
             <div>
                <button className="text-purple-500 font-bold underline" onClick={()=>handleMarkasRead(ReadingTimes)} type="button">Mark as Read</button>
             </div>
            </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;






