
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog);
    const {Title, CoverPicture, ReadingTimes, AuthorImage, Author, PostedDate, Hashtags} = blog;
 
    return (
        <div>
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
                </div>
            </div>
             <h2>Blog title:{Title}</h2>
             <p>
                {
                    Hashtags.map((hash, idx) => <span key={idx}> <a href="http://">{hash}</a></span>)
                }
             </p>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;






