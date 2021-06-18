import "./style.css";
import { useHistory } from "react-router";
const NewsBlogs = ({data})=>
{
    let history = useHistory()
    const blogData = data;
    return(
        <>
        
        <div>
           
            {
                blogData.map((blog)=>{
                    let id= blog.id;
                    return(
                    <div className="newsCard">
                        <img className='newsImage' src={blog.image} className='newsImage' alt="newsimg" />                
                        <div className='newsText'>
                            <div >
                                <span className='title'>{blog.title}</span>
                                </div>
                                <div className='newsContent'>
                                    {/* <NewsText text={blog.content}/> */}
                                    <p>{blog.content.slice(0, 258)}</p>
                                    <span className='author'>
                                        <b>Reported by {blog.Reporter_name}</b></span>            
                                </div>
                                    <spam className='readMore' onClick={()=>{history.push('/readmore/'+blog.id)}}>read more</spam>
                            </div>
                        </div>
                    )
                    })
            }
        </div>
        </>
        )
}

export default NewsBlogs;