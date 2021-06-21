import { useParams, useHistory } from "react-router";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
const ReadMore = ()=>{
    const history = useHistory();
    const [ReadmoreData, setReadmoreData] =  useState({});
    let { id } = useParams();
    console.log(id);
    useEffect(()=>{
        axios.get(`http://localhost:3001/newsBlogs/byId/${id}`).then((response)=>{
           setReadmoreData(response.data);  
        })
    },[])
    return(
        <div className="readMorePar">
        <div className="newsCard">
        <img className='readmoreImage' src={ReadmoreData.image} className='newsImage' alt="readmoreimg" />                
        <div className='newsText'>
            <div >
                <span className='title'>{ReadmoreData.title}</span>
                </div>
                <div className='newsContent'>
                    <p>{ReadmoreData.content}</p>
                    <span className='author'>
                        <b>Reported by {ReadmoreData.Reporter_name}</b></span>            
                </div>
                    <spam className='readMore' onClick={()=>{history.push('/')}}>read less</spam>
            </div>
        </div>
        </div>
    );
}
export default ReadMore;