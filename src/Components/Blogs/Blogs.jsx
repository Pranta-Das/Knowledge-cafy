import  { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';
const Blogs = ({handleBookmarks, handleMarkasRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
            

            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleMarkasRead={handleMarkasRead} handleBookmarks={handleBookmarks} ></Blog> )
                }
            </div>
        </div>
    );
};


Blogs.propTypes ={
    handleBookmarks: PropTypes.func,
    handleMarkasRead: PropTypes.func
}
export default Blogs;