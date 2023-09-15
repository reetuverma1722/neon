import React from 'react'
import "../assets/scss/_feedback.scss"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
const Feedback = () => {
  return (
    <>
        <div>
        <Header/>
        <main className="content feedback">
    
    <div className="feedback__banner">
        <div className="container--fluid">
            <div className="container">
                <div className="row">
                    <div className="col_sm_12 col_md_12 col_lg_6">
                        <div className="feedback__banner--info">
                            <div className="feedback__banner--icon">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"/>
                            </div>
                            <h2 className="feedback__banner--title">Overwhelmed experience</h2>
                            <h3 className="feedback__banner--subtitle">Your Vibe-O-Meter reading exits us too</h3>
                            <div className="feedback__banner--description">We are happy too because we successfully keep you happy during this visit to Sindalah City.</div>
                        </div>
                    </div>
                    <div className="col_sm_12 col_md_12 col_lg_6">
                        <div className="feedback__banner--graphic">
                            <img src="./assets/img/vibe-o-meter.svg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="backdrop--filter"></div>
    </div>
    
    <div className="feedback__cards">
        <div className="container">
            <h2 className="feedback__title">Hi Charlie,<br/>here are the glimpse of your feedback shared with us.</h2>
            <ul className="feedback__list">
                <li className="feedback__list--item">
                    <div className="feedback__list--image">
                        <div className="card--image">
                            <img src="./assets/img/Event-Banner.png" alt=""/>
                        </div>
                        <div className="card--text">
                            <h4>Surfing at leasure</h4>
                            <p>Nov 10-29, 2022</p>
                            <div className="card--review">
                                <a href="#">123 reviews</a>
                                <div className="icon"><span className="icon-star"></span>5.0</div>
                            </div>
                        </div>
                    </div>
                    <div className="feedback__list--content">
                        <div className="card--date">Nov 17, 2022</div>
                        <h3 className="card--title">Great experience!</h3>
                        <div className="card--description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.</div>
                        <ul className="emotion__list">
                            <li className="emotion__list--item active">
                                <img src="./assets/img/overwhelmed.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/joy.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/appreciation.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/boredom.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/disappointed.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/anger.svg" alt=""/>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="feedback__list--item">
                    <div className="feedback__list--image">
                        <div className="card--image">
                            <img src="./assets/img/spa_0.png" alt=""/>
                        </div>
                        <div className="card--text">
                            <h4>Swimming game for below 18 year kids</h4>
                            <p>Nov 10-29, 2022</p>
                            <div className="card--review">
                                <a href="">123 reviews</a>
                                <div className="icon"><span className="icon-star"></span>5.0</div>
                            </div>
                        </div>
                    </div>
                    <div className="feedback__list--content">
                        <div className="card--date">Nov 12, 2022</div>
                        <h3 className="card--subtitle">Hey Charlie, you haven't added you feedback yet. Please share your experience with us to serve you better next time.</h3>
                        <button className="btn btn__black">Add a review</button>
                    </div>
                </li>
                <li className="feedback__list--item">
                    <div className="feedback__list--image">
                        <div className="card--image">
                            <img src="./assets/img/holiday_0.png" alt=""/>
                        </div>
                        <div className="card--text">
                            <h4>Live comedy Performance in front of live audience</h4>
                            <p>Nov 10-29, 2022</p>
                            <div className="card--review">
                                <a href="#">123 reviews</a>
                                <div className="icon"><span className="icon-star"></span>5.0</div>
                            </div>
                        </div>
                    </div>
                    <div className="feedback__list--content">
                        <div className="card--date">Nov 17, 2022</div>
                        <h3 className="card--title">Thank you Unified Guests for this great experience!</h3>
                        <div className="card--description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.</div>
                        <ul className="emotion__list">
                            <li className="emotion__list--item active">
                                <img src="./assets/img/overwhelmed.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/joy.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/appreciation.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/boredom.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/disappointed.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/anger.svg" alt=""/>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="feedback__list--item">
                    <div className="feedback__list--image">
                        <div className="card--image">
                            <img src="./assets/img/cusine_0.png" alt=""/>
                        </div>
                        <div className="card--text">
                            <h4>Surfing at leasure</h4>
                            <p>Nov 10-29, 2022</p>
                            <div className="card--review">
                                <a href="#">123 reviews</a>
                                <div className="icon"><span className="icon-star"></span>5.0</div>
                            </div>
                        </div>
                    </div>
                    <div className="feedback__list--content">
                        <div className="card--date">Nov 11, 2022</div>
                        <h3 className="card--title">Love all the activities!</h3>
                        <div className="card--description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.</div>
                        <ul className="emotion__list">
                            <li className="emotion__list--item active">
                                <img src="./assets/img/overwhelmed.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/joy.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/appreciation.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/boredom.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/disappointed.svg" alt=""/>
                            </li>
                            <li className="emotion__list--item">
                                <img src="./assets/img/anger.svg" alt=""/>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>

    </div>
    

    


    </main>
         
<Footer/>
        </div>
    </>
  )
}

export default Feedback