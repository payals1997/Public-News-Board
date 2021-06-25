import Top10newsBlogs from "./top10";
import { useHistory } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./Top10-style.css";
import Footer from "../Footer/Footer";

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
            <br></br>
            <div className="loadMorediv">
            <span className="Loadmore" onClick={() => { history.push('/signin') }}>Load More</span>
            </div>
            <br></br>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default Home;