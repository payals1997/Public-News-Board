import React from 'react'
import {FacebookShareButton,WhatsappShareButton,FacebookIcon,WhatsappIcon,TwitterShareButton,TwitterIcon} from 'react-share'

export default function Whatsapp({id}) {
     var blogId={id}
      var url=`http://localhost:3000/${blogId}`
    return (
        <div>
           <WhatsappShareButton url = {url}>
               <WhatsappIcon logoFillColor = "white" round={true} size="40px"></WhatsappIcon>
               </WhatsappShareButton>
               
               <FacebookShareButton url = {url} >
               <FacebookIcon logoFillColor = "white" round={true} size="40px"></FacebookIcon>
               </FacebookShareButton> 

               <TwitterShareButton url = {url}>
               <TwitterIcon logoFillColor = "white" round={true} size="40px"></TwitterIcon>
               </TwitterShareButton>
        </div>
    )
}
 