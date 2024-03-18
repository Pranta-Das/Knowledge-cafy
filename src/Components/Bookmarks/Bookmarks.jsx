
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookMarks, readingTime}) => {
    
    return (
        <div className='md:w-1/3'>
            <div>
                <h1 className='text-5xl'>Reading Time: {readingTime}</h1>
            </div>
           <h1>Bookmark Blog</h1>
            <div>
                {
                    bookMarks.map(blog => <Bookmark blog={blog} key={blog.id}></Bookmark>)
                }
            </div>
            
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;