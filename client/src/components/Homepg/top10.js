import axios from "axios";
import { useEffect, useState } from "react";
import "../NewsBlogs/style.css";
import "./Top10-style.css";

const Top10newsBlogs = ({className}) => {
    const [NewsData, setNewsData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/newsBlogs/top10").then((response) => {
            setNewsData(response.data);
        })

    }, []);
    return (
        <div>
        <h2 className="title">Top 10 Bulletins</h2>
        <div className={className}>
            {
                NewsData.map((blog, key) => {

                    return (
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

                                <span className='readMore' > {blog.views} views</span>
                            </div>
                        </div>
                    )
                })
            }
    
        </div>
            </div>
    )
}

export default Top10newsBlogs;