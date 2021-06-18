import axios from "axios";
import {useEffect, useState} from "react";
import NewsBlogs from './NewsBlogs';
import { getFilter } from "./Filterfunc";

const BlogTableData = ({catAndCity})=>{
  
   const [BlogData, setBlogData] = useState([]); 
  
  useEffect(()=>{
    axios.get("http://localhost:3001/newsBlogs").then((response)=>{
       setBlogData(response.data);  
    })
    
  }, [])

let filterData = getFilter(BlogData,catAndCity)
console.log(filterData);


  return(
    <div>
      
      <NewsBlogs data={filterData}/>
    </div>
  )
}

export default BlogTableData;