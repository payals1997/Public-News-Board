import "./style.css";
import { useHistory } from "react-router";
import SocialMedia from "../SocialMedia/SocialMedia";

const NewsBlogs = ({ data }) => {
  let history = useHistory();
  const blogData = data;
  return (
    <div className="main" title="main">
      <div className="show">
        {blogData.map((blog) => {
          return (
            <div className="newsCard" title="newsCard">
              <img
                className="newsImage"
                src={blog.image}
                className="newsImage"
                alt="newsimg"
              />
              <div className="newsText">
                <div>
                  <span className="title">{blog.title}</span>
                </div>
                <div className="newsContent">
                  <p>{blog.content.slice(0, 508)}</p>
                  <span className="author">
                    <b>Reported by {blog.Reporter_name}</b>
                  </span>
                </div>
                <spam
                  className="readMore"
                  onClick={() => {
                    history.push("/readmore/" + blog.id);
                  }}
                >
                  read more
                </spam>
                <div className="options">
                  <span className="readMore"> {blog.views} views</span>
                  <SocialMedia />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsBlogs;
