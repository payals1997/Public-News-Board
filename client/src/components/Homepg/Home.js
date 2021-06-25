import Top10newsBlogs from "./top10";
import { useHistory } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./Top10-style.css";

const Home = () => {
    let history = useHistory()
    return (
        <>
            <div>
                <Navbar />
                </div>
                <div className="blogs">
                    <Top10newsBlogs className={"Top10News"} />
                </div>
            
            
            <span className="Loadmore" onClick={() => { history.push('/signin') }}>Load More</span>
            
        </>
    )
}
export default Home;