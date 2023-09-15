import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
// import "../assets/scss/index.scss"
const Index1 = () => {
  return (
   <>

    <div>
        <Header/>



        <main className="content home">
    
    <div className="banner">
        <div className="container">
          <div className="swiper mainbanner">
          
            <div className="swiper-wrapper">
            
              <div className="swiper-slide">
                <img src="./assets/img/banner.jpg" alt="event title" />
                <div className="banner__info">
                  <div className="banner__info__title">Medusa's <br/>New Year Musical Concert</div>
                  <div className="banner__info__location">Jumeirah Palm Beach, Dubai</div>
                  <div className="banner__info__date">Jan 01, 2023 at 00:00</div>
                  <div className="banner__info__countdown">
                    <div className="counter" data-date="2023-1-1 00:00:00"></div>
                  </div>
                  <div className="banner__info__link"><a href="#">Yes, I am in</a></div>
                </div>
              </div>

              <div className="swiper-slide">
                <img src="./assets/img/banner.jpg" alt="event title" />
                <div className="banner__info">
                  <div className="banner__info__title">Medusa's <br/>New Year Musical Concert</div>
                  <div className="banner__info__location">Jumeirah Palm Beach, Dubai</div>
                  <div className="banner__info__date">Jan 01, 2023 at 00:00</div>
                  <div className="banner__info__countdown">
                    <div className="counter" data-date="2022-12-1 00:00:00"></div>
                  </div>
                  <div className="banner__info__link"><a href="#">Yes, I am in</a></div>
                </div>
              </div>

              <div className="swiper-slide">
                <img src="./assets/img/banner.jpg" alt="event title" />
                <div className="banner__info">
                  <div className="banner__info__title">Medusa's <br/>New Year Musical Concert</div>
                  <div className="banner__info__location">Jumeirah Palm Beach, Dubai</div>
                  <div className="banner__info__date">Jan 01, 2023 at 00:00</div>
                  <div className="banner__info__countdown">
                    <div className="counter" data-date="2023-1-2 00:00:00"></div>
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

   
    <div className="recSlider">
      <div className="recSlider__title">Good morning Shane!</div>
      <div className="recSlider__subtitle">We have tailored a collection of some exiting activities for you today.</div>
      <div className="swiper tailored">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <a href="#" className="recSlider__link">
              <img src="./assets/img/trending1.jpg" alt="event title" />
              <div className="recSlider__info">
                <div className="recSlider__info__title">Explore the deep sea</div>
                <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                <div className="recSlider__info__row">
                  <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                  <div className="recSlider__info__rating"><div className="rating"></div><div className="review">5.0  (123 reviews)</div></div>
                </div>
              </div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="recSlider__link">
              <img src="./assets/img/recommend2.jpg" alt="event title" />
              <div className="recSlider__info">
                <div className="recSlider__info__title">Swimming game for below 18 year kids</div>
                <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                <div className="recSlider__info__row">
                  <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                  <div className="recSlider__info__rating">
                    <div className="rating"></div><div className="review">5.0 (123 reviews)</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="recSlider__link">
              <img src="./assets/img/recommend1.jpg" alt="event title" />
              <div className="recSlider__info">
                <div className="recSlider__info__title">Explore the deep sea</div>
                <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                <div className="recSlider__info__row">
                  <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                  <div className="recSlider__info__rating">
                    <div className="rating"></div>
                    <div className="review">5.0 (123 reviews)</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="#" className="recSlider__link">
              <img src="./assets/img/recommend2.jpg" alt="event title" />
              <div className="recSlider__info">
                <div className="recSlider__info__title">Swimming game for below 18 year kids</div>
                <div className="recSlider__info__date">From Nov 10 to 29, 2022</div>
                <div className="recSlider__info__row">
                  <div className="recSlider__info__price">AED 1800 <span>per person</span></div>
                  <div className="recSlider__info__rating">
                    <div className="rating"></div>
                    <div className="review">5.0 (123 reviews)</div>
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


    <div className="trending">
      <div className="container">
        <div className="trending__title">Top 5 activities on this island today</div>
        <div className="card__grid">
          <div className="card__item">
            <a href="#" className="card__link">
              <div className="card__thumb">
                <button className="card__fav"><span className="icon-heart"></span></button>
                <img src="./assets/img/trending1.jpg" alt="event name" className="card__img" />
                <span className="card__count"><img src="./assets/img/one.svg" alt="Top ranking 1"/></span>
              </div>
              <div className="card__info">
                <div className="card__row">
                  <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div>
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Men's Golf League</div>
                <div className="card__price">AED 1800 per person</div>
              </div>
            </a>
          </div>
          <div className="card__item">
            <a href="#" className="card__link">
              <div className="card__thumb">
                <button className="card__fav"><span className="icon-heart"></span></button>
                <img src="./assets/img/recommend2.jpg" alt="event name" className="card__img" />
                <span className="card__count"><img src="./assets/img/two.svg" alt="Top ranking 1"/></span>
              </div>
              <div className="card__info">
                <div className="card__row">
                  <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div>
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Swimming game for below 18 year kids</div>
                <div className="card__price">AED 1800 per person</div>
              </div>
            </a>
          </div>
          <div className="card__item">
            <a href="#" className="card__link">
              <div className="card__thumb">
                <button className="card__fav"><span className="icon-heart"></span></button>
                <img src="./assets/img/trending2.jpg" alt="event name" className="card__img" />
                <span className="card__count"><img src="./assets/img/three.svg" alt="Top ranking 1"/></span>
              </div>
              <div className="card__info">
                <div className="card__row">
                  <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div>
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Men's Golf League</div>
                <div className="card__price">AED 1800 per person</div>
              </div>
            </a>
          </div>
          <div className="card__item">
            <a href="#" className="card__link">
              <div className="card__thumb">
                <button className="card__fav"><span className="icon-heart"></span></button>
                <img src="./assets/img/trending1.jpg" alt="event name" className="card__img" />
                <span className="card__count"><img src="./assets/img/four.svg" alt="Top ranking 1"/></span>
              </div>
              <div className="card__info">
                <div className="card__row">
                  <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div>
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Men's Golf League</div>
                <div className="card__price">AED 1800 per person</div>
              </div>
            </a>
          </div>
          <div className="card__item">
            <a href="#" className="card__link">
              <div className="card__thumb">
                <button className="card__fav"><span className="icon-heart"></span></button>
                <img src="./assets/img/recommend2.jpg" alt="event name" className="card__img" />
                <span className="card__count"><img src="./assets/img/five.svg" alt="Top ranking 1"/></span>
              </div>
              <div className="card__info">
                <div className="card__row">
                  <div className="card__rating"><span className="icon-star"></span> 4.9 (123 reviews)</div>
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Swimming game for below 18 year kids</div>
                <div className="card__price">AED 1800 per person</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

 
    <div className="recommendations">
      <div className="container">
        <div className="recommendations__title">Some more recommendations for you, Shane!</div>
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
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Men's Golf League</div>
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
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Swimming game for below 18 year kids</div>
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
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Men's Golf League</div>
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
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Men's Golf League</div>
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
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Swimming game for below 18 year kids</div>
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
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Men's Golf League</div>
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
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Swimming game for below 18 year kids</div>
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
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Men's Golf League</div>
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
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Men's Golf League</div>
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
                  <div className="card__date">Nov 10-29</div>
                </div>
                <div className="card__title">Swimming game for below 18 year kids</div>
                <div className="card__price">AED 1800 per person</div>
              </div>
            </a>
          </div>
        </div>
        <div className="recommendations__more">
          <button className="btn btn__black">Load more</button>
        </div>
      </div>
    </div>

    
    <div className="onmap">
      <div className="container">
        <div className="onmap__title">Find events on map</div>
        <div className="onmap__map">
          <img src="./assets/img/map.jpg" alt=""/>
        </div>
      </div>
    </div>

    
    <div className="about">
      <div className="container">
        <div className="about__title">About Unified Guests</div>
        <div className="about__txt">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>


  </main>
  <Footer/>
    </div>
   </>
  )
}

export default Index1