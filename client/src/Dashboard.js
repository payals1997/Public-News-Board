import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import BlogTableData from './components/NewsBlogs/BlogsData';


const Dashboard = ()=>{
    const [catAndCity, setCatAndCity] = useState({
        category: "all",
        city: "all",
      });
    
    return(
        <div className="App">
            <div>
            <div className='sidebar'>
            {/* <HambergerApp catAndCity={catAndCity} setCatAndCity={setCatAndCity}></HambergerApp> */}
            <Navbar catAndCity={catAndCity} setCatAndCity={setCatAndCity}/>
            </div>
            </div>

            
            <div className="blogDisplayPar">
            <div className='blogDisplay'>
            <BlogTableData catAndCity={catAndCity} />
            </div>
            </div>
            
        </div>
    )
}
export default Dashboard ;