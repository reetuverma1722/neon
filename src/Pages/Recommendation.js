import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Recommendation = () => {
  return (
    <>
<div>
<Header/>
<main className="content home recommendation--page">

<div className="recommendations">
    <div className="container">
        <h2 className="recommendations__title">Hey Charlie,</h2>
        <div className="recommendations__subtitle">
            <h3>Due to some bad weather your "Golf Tournament" event has been cancelled.</h3>
            <h3> We have a similar event for you, starting just in an hour and 5 minutes drive away.</h3>
        </div>
    </div>
</div>


<div className="banner">
    <div className="container">
        <div className=" mainbanner">
            
            <div className="swiper-wrapper">
             
                <div className="swiper-slide">
                    <img src="./assets/img/banner.jpg" alt="event title" />
                    <div className="banner__info">
                        <h2 className="banner__info__title">Medusa's <br/>New Year Musical Concert</h2>
                        <div className="banner__info__location">Jumeirah Palm Beach, Dubai</div>
                        <div className="banner__info__date">Jan 01, 2023 at 00:00</div>
                        <div className="banner__info__countdown">
                            <div className="counter" data-date="2023-1-1 00:00:00"></div>
                        </div>
                        <div className="banner__info__link"><a href="#">Yes, I am in</a></div>
                    </div>
                </div>
            </div>

           
            <div className="swiper-buttons">
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    </div>
</div>


<div className="recommendations">
    <div className="container">
        <h2 className="recommendations__title">Some similar recommendation for you, Charlie.</h2>

        <div className="schedule">
            <div className="time">
                <ul className="time__list">
                    <li className="time__list--item">10 mins walking</li>
                    <li className="time__list--item active">20 mins walking</li>
                    <li className="time__list--item">30 mins walking</li>
                </ul>

                <ul className="time__list">
                    <li className="time__list--item">10 mins drive</li>
                    <li className="time__list--item active">20 mins drive</li>
                    <li className="time__list--item">30 mins drive</li>
                </ul>

                <ul className="time__list">
                    <li className="time__list--item border-rounded">No limits</li>
                </ul>
            </div>
        </div>

        <div className="card__grid">
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/holiday_0.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">AED 1800 per person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/Event-Banner.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">AED 1800 per person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/spa_0.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">AED 1800 per person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/holiday_0.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div>
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">AED 1800 per person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/Event-Banner.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">AED 1800 per person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/holiday_0.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">AED 1800 per person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/Event-Banner.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">AED 1800 per person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/spa_0.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">AED 1800 per person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/holiday_0.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">AED 1800 per person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/Event-Banner.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">AED 1800 per person</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

</main>
<Footer/>
</div>


    </>
  )
}

export default Recommendation