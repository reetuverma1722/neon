import React from 'react'
import "../assets/scss/_modal.scss"
const Add_review = () => {
  return (
    <>

        <div>
        <div id="modal" className="modal">
           
           <div className="modal-content">
             <div className="modal-header">
               <span className="close">
                  <img src="./assets/img/close.svg" alt="Close"/> 
                <svg
                   version="1.1"
                   id="Layer_1"
                 
                   
                   x="0px"
                   y="0px"
                   width="122.881px"
                   height="122.88px"
                   viewBox="0 0 122.881 122.88"
                   
                   
                 >
                   <g>
                     <path
                       d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z"
                     />
                   </g>
                 </svg>
               </span>
               <h2>Add a review</h2>
             </div>
             <div className="modal-body">
               <p>
                 Hi Charlie, If you're here on this page, we bet you enjoy
                 this event fully. Would you mind to share your valuable
                 feedback review with us?
               </p>
                 <div className="modal-image">
                     <img src="./assets/img/vibe-o-meter.svg" alt=""/>
                 </div> 
               <div className="card">
                 <div className="card__info">
                   <div className="card__info--image">
                     <img src="./assets/img/trending1.jpg" alt="" />
                   </div>
                   <div className="card__info--details">
                     <h4>Surfing at leasure</h4>
                     <p>Nov 10-29</p>
                   </div>
                 </div>
                 <div className="card__review">
                   <div className="rating"></div>
                   <div className="review"><span>5.0</span>(23 reviews)</div>
                 </div>
               </div>
               <div className="ratings__row">
                 <div className="ratings__row--item">
                   <div className="ratings--title">Quality of Event</div>
                   <div className="rating"></div> 
                   <div className="star--rating">
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                   </div>
                 </div>
                 <div className="ratings__row--item">
                   <div className="ratings--title">Services at Event</div>
                    <div className="rating"></div> 
                   <div className="star--rating">
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                   </div>
                 </div>
               </div>
               <div className="ratings__row">
                 <div className="ratings__row--item">
                   <div className="ratings--title">Facilities of Event</div>
                   <div className="rating"></div> 
                   <div className="star--rating">
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                   </div>
                 </div>
                 <div className="ratings__row--item">
                   <div className="ratings--title">Operator of Event</div>
                    <div className="rating"></div> 
                   <div className="star--rating">
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                   </div>
                 </div>
               </div>
               <div className="ratings__row">
                 <div className="ratings__row--item">
                   <div className="ratings--title">Staff Politeness</div>
                    <div className="rating"></div> 
                   <div className="star--rating">
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                     <img src="./assets/img/star-regular.svg" alt="Star" width="25px"/>
                   </div>
                 </div>
               </div>
             </div>
             <div className="modal-footer">
               <div className="form__group">
                 <textarea
                   name=""
                   id=""
                   rows="5"
                   placeholder="Share your feedback and suggestions about this event..."
                 ></textarea>
               </div>
               <button className="btn btn__black" id="submitBtn">Submit</button>
             </div>
           </div>
         </div>
        </div>
    </>
  )
}

export default Add_review;