
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Headers from './Components/Header/Headers'

function App() {
 
  const [bookMarks, setBookmarks]= useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookmarks = (blog) =>{
    const newBookmarks = [...bookMarks, blog];
    setBookmarks(newBookmarks);
    console.log(blog);
  }

  const handleMarkasRead = time =>{
   setReadingTime(readingTime + time);
  }

  return (
    <>
      <Headers></Headers>
      
      <div className='md:flex'>
      <Blogs handleBookmarks={handleBookmarks} handleMarkasRead={
        handleMarkasRead
      }></Blogs>
      <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
