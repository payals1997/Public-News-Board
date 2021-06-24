import Top10newsBlogs from "./top10";
import { useHistory } from "react-router";
import Navbar from "../Navbar/Navbar";
const Home = ()=>{
    let history = useHistory()
    return(
        <>
        <div>
            <Navbar />
            <div>
            <Top10newsBlogs className= {"Top10News"} />
            </div>
            <div>
            <span className="Loadmore" onClick={() => { history.push('/signin') }}>Load More</span>
            </div>
        </div>
        </>
    )
}
export default Home;