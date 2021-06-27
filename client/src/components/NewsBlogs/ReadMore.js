import { useParams, useHistory } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import Footer from "../Footer/Footer";

const ReadMore = () => {
    const history = useHistory();
    const [ReadmoreData, setReadmoreData] = useState({});
    let { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/newsBlogs/byId/${id}`).then((response) => {
            setReadmoreData(response.data);
        });

        axios.post(`http://localhost:3001/newsBlogs/byId/${id}`).then((response) => {
            setReadmoreData(response.data);
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className="readmore-container">
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
                        <spam className='readMore' onClick={() => { history.push('/dashboard') }}>read less</spam>
                        <div className="options">
                            <span className='readMore' > {ReadmoreData.views} views</span>
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
export default ReadMore;