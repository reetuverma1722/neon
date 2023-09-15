import React from 'react'
import "../assets/scss/_event.scss"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import img11 from "../assets/img/Image120.jpg"
import img12 from "../assets/img/Image122.jpg"
import img13 from "../assets/img/Image121.jpg"
import img14 from "../assets/img/Image119.jpg"
const Events_details = () => {
  return (
    

   <>
<Header/>
<main className="content event">

<div className="eventDetails">
    <div className="container">
        <h2 className="eventDetails__title">Surfing at leasure</h2>
        <div className="eventDetails__review">
            <div className="rating"></div>
            <div className="review">5.0  <span>23 reviews</span></div>
            <div className="location">Sindalah City, Dubai</div>
        </div>

        <div className="eventDetails__grid">
            <div className="eventDetails__grid--col grid__box">
                <div className="grid__box--sm">
                    <img src={img11} alt="" className="grid__image border__rounded--topLeft"/>
                </div>
                <div className="grid__box--sm">
                    <img src={img11} alt="" className="grid__image"/>
                </div>
                <div className="grid__box--sm">
                    <img src={img12} alt="" className="grid__image border__rounded--bottomLeft"/>
                </div>
                <div className="grid__box--sm">
                    <img src={img13} alt="" className="grid__image"/>
                </div>
            </div>
            <div className="eventDetails__grid--col">
                <img src={img14} alt="" className="grid__image border__rounded--topRight border__rounded--bottomRight"/>
            </div>

            <div className="status scheduled">Scheduled</div>
            <button className="btn__white">Show all</button>
        </div>
    </div>
</div>

<div className="eventReserve">
    <div className="container">
        <div className="eventReserve__grid">
            <div className="eventReserve__grid--col">
                <div className="event__meter">
                    <h4 className="event__reserve--title">Vibe-o-meter of the event</h4>
                    <ul className="emotions__list">
                        <li className="emotions__list--item active">
                            <div className="emotion overwhelmed"></div>
                            <img src="./assets/img/overwhelmed.svg" alt="" width="52" height="52px"/>
                        </li>
                        <li className="emotions__list--item">
                            <div className="emotion joy"></div>
                            <img src="./assets/img/joy.svg" alt="" width="52" height="52px"/>
                        </li>
                        <li className="emotions__list--item">
                            <div className="emotion appreciation"></div>
                            <img src="./assets/img/appreciation.svg" alt="" width="52" height="52px"/>
                        </li>
                        <li className="emotions__list--item">
                            <div className="emotion boredom"></div>
                            <img src="./assets/img/boredom.svg" alt="" width="52" height="52px"/>
                        </li>
                        <li className="emotions__list--item">
                            <div className="emotion disappointed"></div>
                            <img src="./assets/img/disappointed.svg" alt="" width="52" height="52px"/>
                        </li>
                        <li className="emotions__list--item">
                            <div className="emotion anger"></div>
                            <img src="./assets/img/anger.svg" alt="" width="52" height="52px"/>
                        </li>
                    </ul>
                </div>
                <div className="event__description">
                    <h4 className="event__reserve--title">About the event</h4>
                    <ul className="event__description--list">
                        <li className="event__description--list-item">
                            <div className="icon icon-category"></div>
                            <div className="description-details">
                                <h5>Golf</h5>
                                <p>This is one of the many events comes under the Golf category.</p>
                            </div>
                        </li>
                        <li className="event__description--list-item">
                            <div className="icon icon-location"></div>
                            <div className="description-details">
                                <h5>Great location</h5>
                                <p>This is one of the many events comes under the Golf category.</p>
                            </div>
                        </li>
                        <li className="event__description--list-item">
                            <div className="icon"><img src="./assets/img/overwhelmed.svg" alt=""/></div>
                            <div className="description-details">
                                <h5>Overwhelmed experience</h5>
                                <p>This event has a rating of 5.0 that make this event overwhelmed.</p>
                            </div>
                        </li>
                    </ul>
                    <div className="event__description--content">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
                    </div>
                </div>
                <div className="event__review">
                    <h4 className="event__reserve--title">Operated by River Stone</h4>
                    <div className="event__review--row">
                        <div className="rating"></div>
                        <div className="review">4.9</div>
                    </div>
                    <div className="event__description--content">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
                    </div>
                </div>
            </div>
            <div className="eventReserve__grid--col">
                <div className="eventReserve__form">
                    <form action="">
                        <div className="eventReserve__form--title">AED 1800 <span>per person</span></div>
                        <div className="eventReserve__form--date"></div>
                        <div className="form__flex--row">
                            <div className="s-form-floating">
                                <input type="text" value="Nov 10, 2022" readonly className="s-form-control" id="floatingFromInput"/>
                                <label for="floatingFromInput">From</label>
                            </div>
                            <div className="s-form-floating">
                                <input type="text" value="Nov 29, 2022" readonly className="s-form-control" id="floatingToInput"/>
                                <label for="floatingToInput">To</label>
                            </div>
                        </div>
                        <div className="s-form-floating" >
                            <select className="s-form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                <option value="0">1 adult</option>
                                <option value="1">2 adult</option>
                                <option value="2">3 adult</option>
                                <option value="3">4 adult</option>
                            </select>
                            <label for="floatingSelectGrid">Guests</label>
                        </div>
                        <div className="eventReserve__form--seats">172 Seats still available</div>
                        <button className="btn btn__black">Reserve my seats</button>
                        <ul className="guests__list">
                            <li className="guests__list--item">
                                <div className="guests">1800 x 1 adult</div>
                                <div className="price">1800</div>
                            </li>
                            <li className="guests__list--item">
                                <div className="guests">600 x 0 children</div>
                                <div className="price">0</div>
                            </li>
                        </ul>
                        <div className="total">
                            <div className="total__title">Total</div>
                            <div className="total__price">AED 1800</div>
                        </div>
                    </form>

                    <a href="#" className="eventReserve__form--help">Need help?</a>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="recSlider recSlider--ratingCards">
  <div className="swiper tailored">
    <div className="swiper-wrapper">

      <div className="swiper-slide">
        <a href="#" className="recSlider__link">
          <div className="recSlider__profile">
            <img src="./assets/img/user1.png" alt="event title" className="recSlider__profile--image"/>
            <div className="recSlider__profile--info">
                <h4>Anastasia</h4>
                <span>Nov 2022</span>
            </div>
          </div>
          <div className="recSlider__info">
            <div className="recSlider__info__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo...</div>
            <div className="recSlider__info__row">
              <div className="recSlider__info__rating"><div className="rating"></div><div className="review">5.0</div></div>
            </div>
          </div>
          <button className="recSlider__button">Read more</button>
        </a>
      </div>

      <div className="swiper-slide">
        <a href="#" className="recSlider__link">
          <div className="recSlider__profile">
            <img src="./assets/img/user1.png" alt="event title" className="recSlider__profile--image"/>
            <div className="recSlider__profile--info">
                <h4>Anastasia</h4>
                <span>Nov 2022</span>
            </div>
          </div>
          <div className="recSlider__info">
            <div className="recSlider__info__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo...</div>
            <div className="recSlider__info__row">
              <div className="recSlider__info__rating"><div className="rating"></div><div className="review">5.0</div></div>
            </div>
          </div>
          <button className="recSlider__button">Read more</button>
        </a>
      </div>

      <div className="swiper-slide">
        <a href="#" className="recSlider__link">
          <div className="recSlider__profile">
            <img src="./assets/img/user2.png" alt="event title" className="recSlider__profile--image"/>
            <div className="recSlider__profile--info">
                <h4>Warren</h4>
                <span>Oct 2022</span>
            </div>
          </div>
          <div className="recSlider__info">
            <div className="recSlider__info__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo...</div>
            <div className="recSlider__info__row">
              <div className="recSlider__info__rating"><div className="rating"></div><div className="review">5.0</div></div>
            </div>
          </div>
          <button className="recSlider__button">Read more</button>
        </a>
      </div>

      <div className="swiper-slide">
        <a href="#" className="recSlider__link">
          <div className="recSlider__profile">
            <img src="./assets/img/user3.png" alt="event title" className="recSlider__profile--image"/>
            <div className="recSlider__profile--info">
                <h4>Martin</h4>
                <span>Oct 2022</span>
            </div>
          </div>
          <div className="recSlider__info">
            <div className="recSlider__info__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo...</div>
            <div className="recSlider__info__row">
              <div className="recSlider__info__rating"><div className="rating"></div><div className="review">5.0</div></div>
            </div>
          </div>
          <button className="recSlider__button">Read more</button>
        </a>
      </div>

      <div className="swiper-slide">
        <a href="#" className="recSlider__link">
          <div className="recSlider__profile">
            <img src="./assets/img/user4.png" alt="event title" className="recSlider__profile--image"/>
            <div className="recSlider__profile--info">
                <h4>Michelle</h4>
                <span>Sep 2022</span>
            </div>
          </div>
          <div className="recSlider__info">
            <div className="recSlider__info__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo...</div>
            <div className="recSlider__info__row">
              <div className="recSlider__info__rating"><div className="rating"></div><div className="review">5.0</div></div>
            </div>
          </div>
          <button className="recSlider__button">Read more</button>
        </a>
      </div>

      <div className="swiper-slide">
        <a href="#" className="recSlider__link">
          <div className="recSlider__profile">
            <img src="./assets/img/user5.png" alt="event title" className="recSlider__profile--image"/>
            <div className="recSlider__profile--info">
                <h4>Pamela</h4>
                <span>Aug 2022</span>
            </div>
          </div>
          <div className="recSlider__info">
            <div className="recSlider__info__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo...</div>
            <div className="recSlider__info__row">
              <div className="recSlider__info__rating"><div className="rating"></div><div className="review">5.0</div></div>
            </div>
          </div>
          <button className="recSlider__button">Read more</button>
        </a>
      </div>
    </div>

    <div className="swiper-buttons">
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  </div>
</div>


<div className="recommendations event--recommendations">
  <div className="container">
    <h2 className="recommendations__title">Some more recommendations for you, Charlie!</h2>
    <div className="card__grid">
      <div className="card__item">
        <a href="#" className="card__link">
          <div className="card__thumb">
            <button className="card__fav"><span className="icon-heart"></span></button>
            <img src="./assets/img/trending1.jpg" alt="event name" className="card__img" />
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
            <img src="./assets/img/recommend2.jpg" alt="event name" className="card__img" />
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
            <img src="./assets/img/trending2.jpg" alt="event name" className="card__img" />
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
            <img src="./assets/img/trending1.jpg" alt="event name" className="card__img" />
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
            <img src="./assets/img/recommend2.jpg" alt="event name" className="card__img" />
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
            <img src="./assets/img/trending1.jpg" alt="event name" className="card__img" />
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
            <img src="./assets/img/recommend2.jpg" alt="event name" className="card__img" />
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
            <img src="./assets/img/trending2.jpg" alt="event name" className="card__img" />
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
            <img src="./assets/img/trending1.jpg" alt="event name" className="card__img" />
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
            <img src="./assets/img/recommend2.jpg" alt="event name" className="card__img" />
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
    </>
  )
}

export default Events_details