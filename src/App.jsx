
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Headers from './Components/Header/Headers'

function App() {
 

  return (
    <>
      <Headers></Headers>
      
      <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
     
    </>
  )
}

export default App
