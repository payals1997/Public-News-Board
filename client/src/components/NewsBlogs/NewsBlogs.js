import BlogsData from './BlogsData';
import Blog from './Blog';
const NewsBlogs = ()=>
{
    return(
        <div>
            {
                BlogsData.map((blog)=>(
                
                    <Blog key={blog.id} blogContent={blog}></Blog>
                ))
            }
        </div>
        )
}

export default NewsBlogs;