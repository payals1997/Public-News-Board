import './App.css';
import { useState } from 'react';
import HambergerApp from './components/SideBar/HambergerApp';
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
            <HambergerApp catAndCity={catAndCity} setCatAndCity={setCatAndCity}></HambergerApp>
            </div>
            </div>

            

            <div className='blogDisplay'>
            <BlogTableData catAndCity={catAndCity} />
            </div>
        </div>
    )
}
export default Dashboard ;