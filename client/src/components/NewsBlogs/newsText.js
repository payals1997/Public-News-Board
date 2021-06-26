// import { useState } from "react";
// import "./style.css";
//  const NewsText = ({text})=>{
//     const [showMore, setShowMore] = useState(false);

//    if(text.length >=258 && showMore)
//    { 
//     return(
//         <>
//                       <p className='news'>{text}</p>
            
//                       <button
//                         onClick={() => setShowMore(false)}>
//                         show Less
//                       </button>
//                     </>
//     )}
//     else if(text.length >=258 && !showMore)
//     {
//         return(
//             <>
//                       <p>{text.slice(0, 258)}</p>
            
//                       <button
//                         onClick={() => setShowMore(true)}>
//                         show more
//                       </button>
//                     </>
//         )
//     }
//     else
//     {
//         return(
//             <p>{text}</p>
//         )
//     }
// }
// export default NewsText;