import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../assets/img/holiday_0.png"
import image2 from "../assets/img/cusine_0.png"
import image3 from "../assets/img/rolce.png"
import image4 from "../assets/img/exploring.png"
const Container = () => {
  return (
    <>
<main className="content favorites">

<div className="recommendations">
    <div className="container">
        <h2 className="recSlider__title">Good morning Charlie!</h2>
        <div className="recSlider__subtitle">You have short listed 8 events to join later.</div>
        <div className="card__grid">
            <div className="card__item">
                <Link to="/events_details" className="card__link">
                    <div className="card__thumb">
                    <Link to="/favourites/events_details">
                        <button className="card__remove">Remove</button></Link>
                        <img src={image1} alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="vibes">
                                <img src={image2} alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </Link>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">

                    <Link to="/favourites/events_details">
                        <button className="card__remove">Remove</button></Link>
                        <img src={image3} alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">

                    <Link to="/favourites/events_details">
                        <button className="card__remove">Remove</button></Link>
                        <img src={image1} alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                    <Link to="/favourites/events_details">
                        <button className="card__remove">Remove</button></Link>
                        <img src={image2} alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                    <Link to="/favourites/events_details">
                        <button className="card__remove">Remove</button></Link>
                        <img src={image3} alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                    <Link to="/favourites/events_details">
                        <button className="card__remove">Remove</button></Link>
                        <img src={image2} alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                    <Link to="/favourites/events_details">
                        <button className="card__remove">Remove</button></Link>
                        <img src={image1} alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                    <Link to="/favourites/events_details">
                        <button className="card__remove">Remove</button></Link>
                        <img src={image2} alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                    <Link to="/favourites/events_details">
                        <button className="card__remove">Remove</button></Link>
                        <img src={image3} alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                    <Link to="/favourites/events_details">
                        <button className="card__remove">Remove</button></Link>
                        <img src={image1} alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed" className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>


<div className="recSlider">
    <h2 className="trending__title">Charlie, we have find some recommendation for you</h2>
    <div className="swiper tailored">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <a href="#" className="recSlider__link">
                    <img src={image1} alt="event title" />
                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Explore the deep sea</h3>
                        <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                            <div className="recSlider__info__rating">
                                 <div className="rating"></div>
                                <div className="review">5.0 (123 reviews)</div> 
                                <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                    className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="#" className="recSlider__link">
                    <img src={image1} alt="event title" />
                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Swimming game for below 18 year kids</h3>
                        <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                            <div className="recSlider__info__rating">
                                 <div className="rating"></div>
                                <div className="review">5.0 (123 reviews)</div>
                                <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                    className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="#" className="recSlider__link">
                    <img src={image2} alt="event title" />
                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Explore the deep sea</h3>
                        <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                            <div className="recSlider__info__rating">
                                 <div className="rating"></div>
                                <div className="review">5.0 (123 reviews)</div> 
                                <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                    className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="#" className="recSlider__link">
                    <img src={image3} alt="event title" />
                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Swimming game for below 18 year kids</h3>
                        <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                            <div className="recSlider__info__rating">
                                 <div className="rating"></div>
                                <div className="review">5.0 (123 reviews)</div> 
                                <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                    className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="swiper-buttons">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    </div>
</div>



<div className="trending mb-8">
    <div className="container">
        <h2 className="trending__title">Top 5 activities on this island today</h2>
        <div className="card__grid">
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src={image1} alt="event name" className="card__img" />
                        <span className="card__count"><img src="./assets/img/one.svg" alt="Top ranking 1"/></span>
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                    className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src={image2} alt="event name" className="card__img" />
                        <span className="card__count"><img src="./assets/img/two.svg" alt="Top ranking 1"/></span>
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                    className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src={image3} alt="event name" className="card__img" />
                        <span className="card__count"><img src="./assets/img/three.svg" alt="Top ranking 1"/></span>
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                    className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src={image3} alt="event name" className="card__img" />
                        <span className="card__count"><img src="./assets/img/four.svg" alt="Top ranking 1"/></span>
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                             <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                    className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="event-details.html" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src={image1} alt="event name" className="card__img" />
                        <span className="card__count"><img src="./assets/img/five.svg" alt="Top ranking 1"/></span>
                    </div>
                    <div className="card__info">
                        <div className="card__row">
                            <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div> 
                            <div className="vibes">
                                <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                    className="vibes__icon" />
                                <span className="vibes__text">Overwhelmed</span>
                            </div>
                            <div className="card__date">Nov 10-29</div>
                        </div>
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">1800 AED/person</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

</main>

    </>)
}

export default Container