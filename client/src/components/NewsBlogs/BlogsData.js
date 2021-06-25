import axios from "axios";
import {useEffect, useState} from "react";
import NewsBlogs from './NewsBlogs';
import { getFilter } from "./Filterfunc";
import { useHistory } from "react-router";

const BlogTableData = ({catAndCity})=>{
  let history = useHistory();
   const [BlogData, setBlogData] = useState([]); 
  
  useEffect(()=>{
    axios.get("http://localhost:3001/newsBlogs",{
      
        headers:{
          token:localStorage.getItem("token")
        }
      }
    ).then((response)=>{
      if (response.data.error) {
        alert(response.data.error)
        history.push("/");
    } else {
       setBlogData(response.data);
    }  
    })
    
  }, [])

let filterData = getFilter(BlogData,catAndCity)


  return(
    <div >
      
      <NewsBlogs data={filterData}/>
    </div>
  )
}

export default BlogTableData;
