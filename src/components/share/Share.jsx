import React from "react";
import './share.css'
import {BsImages,BsTagsFill,BsFillGeoAltFill,BsFillEmojiLaughingFill} from "react-icons/bs";


export default function Share() {



    return (
        <div className='shareContainer'>
            <div className= "shareContainerWrapper">

                <div className='shareTop'>
                        <img className='shareTopImg' src='/assets/person/1.jpeg'/>
                        <input className='shareTopInput'  placeholder="What's in your mind Safak?" />
                </div>

                <hr className='shareHr'  />


                <div className="shareBottom">
                     <div className="shareOptions">
                         <div className="shareOptionItem">
                              <BsImages color='tomato' className='shareOptionIcon' />
                              <span className='shareOptionText'>Photo or Video</span>
                         </div>

                         <div className="shareOptionItem">
                             <BsTagsFill color='blue' className='shareOptionIcon' />
                             <span className='shareOptionText'>Tag</span>
                         </div>
                         <div className="shareOptionItem">
                             <BsFillGeoAltFill color='green' className='shareOptionIcon' />
                             <span className='shareOptionText'>Location</span>
                         </div>
                         <div className="shareOptionItem">
                             <BsFillEmojiLaughingFill color='goldenrod' className='shareOptionIcon' />
                             <span className='shareOptionText'>Feelings</span>
                         </div>
                     </div>
                    <button className='shareButton'>Share</button>
                </div>





            </div>
        </div>

    )


}