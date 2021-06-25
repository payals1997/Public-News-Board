import React from 'react'
import {FacebookShareButton,WhatsappShareButton,FacebookIcon,WhatsappIcon,TwitterShareButton,TwitterIcon} from 'react-share'

 function SocialMedia({id}) {
     var blogId={id}
      var url=`http://localhost:3000/${blogId}`
    return (
        <div>
           <WhatsappShareButton url = {url}>
               <WhatsappIcon logoFillColor = "white" round={true} size="30px"></WhatsappIcon>
               </WhatsappShareButton>
               
               <FacebookShareButton url = {url} >
               <FacebookIcon logoFillColor = "white" round={true} size="30px"></FacebookIcon>
               </FacebookShareButton> 

               <TwitterShareButton url = {url}>
               <TwitterIcon logoFillColor = "white" round={true} size="30px"></TwitterIcon>
               </TwitterShareButton>
        </div>
    )
}

export default SocialMedia;