import React from 'react'
import "../assets/scss/_dashboard.scss"
import img1 from "../assets/img/spa_0.png"
import img2 from "../assets/img/Event-Banner.png"
const Main = () => {
  return (
    <>
<div>


<main className="content">

<div className="recSlider recSlider--cardView">
    <h2 className="recSlider__title">Good morning Charlie!</h2>
    <div className="recSlider__subtitle">
        <p>Below listed are your itineraries, have a look to the timings and the location.</p>
        <p>We wish you to enjoy the activities and the weather!</p>
    </div>
    <div className="swiper tailored">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <a href="completed-event-details.html" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src={img1} alt="event title" />
                        <div className="weather">
                             <div className="weather__icon">
                                <img src={img2} alt="Weather" />
                            </div>
                            <div className="weather__text">
                                <h2>18&#176;<sup>C</sup></h2>
                                <div className="weather__text--wrap">
                                    <span>29&#176;</span>
                                    <span>16&#176;</span>
                                </div>
                            </div> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="48" viewBox="0 0 97 48">
                                <g id="Group_136" data-name="Group 136" transform="translate(-188 -415)">
                                    <g id="Group_134" data-name="Group 134">
                                        <circle id="Ellipse_8" data-name="Ellipse 8" cx="16" cy="16" r="16"
                                            transform="translate(193.007 416)" fill="#ffc368" />
                                        <path id="Icon_ionic-ios-cloud" data-name="Icon ionic-ios-cloud"
                                            d="M19.332,12.668A6.634,6.634,0,0,0,7.28,9.612a3.135,3.135,0,0,0-1.19-.234,3.276,3.276,0,0,0-3.158,3.246A4.32,4.32,0,0,0,0,16.723,4.159,4.159,0,0,0,4.02,20.9H18.629a4.162,4.162,0,0,0,.7-8.235Z"
                                            transform="translate(188 410.597)" fill="#fff" />
                                        <path id="Icon_ionic-ios-cloudy" data-name="Icon ionic-ios-cloudy"
                                            d="M10.7,6.75a5.4,5.4,0,0,0-5.292,5.416,4.5,4.5,0,0,0,.033.53,3.664,3.664,0,0,0-3.188,3.66A3.619,3.619,0,0,0,5.753,20H16.427a4.49,4.49,0,0,0,0-8.977c-.1,0-.2-.008-.3-.008s-.174,0-.253,0A5.231,5.231,0,0,0,10.7,6.75Z"
                                            transform="translate(205.757 428)" fill="#fff" />
                                    </g>
                                    <g id="Group_135" data-name="Group 135">
                                        <g id="Group_132" data-name="Group 132" transform="translate(-286 -66)">
                                            <text id="o" transform="translate(548 496)" fill="#fff"
                                                font-size="7.583" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em" baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="C" transform="translate(555 497)" fill="#fff"
                                                font-size="12" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em">
                                                <tspan x="0" y="0">C</tspan>
                                            </text>
                                        </g>
                                        <text id="_18" data-name="18" transform="translate(235 440)" fill="#fff"
                                            font-size="24" font-family="Poppins-Medium, Poppins"
                                            font-weight="500">
                                            <tspan x="0" y="0">18</tspan>
                                        </text>
                                        <g id="Group_133" data-name="Group 133" transform="translate(-239 -84)">
                                            <text id="_29_16" data-name="29    16"
                                                transform="translate(478 543)" fill="#fff" font-size="12"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em">
                                                <tspan x="0" y="0" >29 16</tspan>
                                            </text>
                                            <text id="o-2" data-name="o" transform="translate(494 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="o-3" data-name="o" transform="translate(519 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>

                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Surfing at leasure</h3>
                        <div className="recSlider__info__rating">
                            <div className="rating"></div>
                            <div className="review"><span>5.0</span> (123 reviews)</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat… <button className="read--more">read more</button>
                            </div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-calendar"></span>Nov 10,
                                10:30 AM - Nov 29. 6:30 PM</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-location"></span>Sindalah
                                City</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-category"></span>Golf
                            </div>
                        </div>
                        <div className="recSlider__info__row recSlider__footer">
                            <div className="recSlider__footer__item">
                                <div className="vibes">
                                    <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                        className="vibes__icon" />
                                    <span className="vibes__text">Overwhelmed </span>
                                </div>
                                <span className="status scheduled">Scheduled</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="completed-event-details.html" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src="./assets/img/holiday_0.png" alt="event title" />
                        <div className="weather">
                             <div className="weather__icon">
                                <img src="./assets/img/abstract.jpg" alt="Weather" />
                            </div>
                            <div className="weather__text">
                                <h2>18&#176;<sup>C</sup></h2>
                                <div className="weather__text--wrap">
                                    <span>29&#176;</span>
                                    <span>16&#176;</span>
                                </div>
                            </div> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="48" viewBox="0 0 97 48">
                                <g id="Group_136" data-name="Group 136" transform="translate(-188 -415)">
                                    <g id="Group_134" data-name="Group 134">
                                        <circle id="Ellipse_8" data-name="Ellipse 8" cx="16" cy="16" r="16"
                                            transform="translate(193.007 416)" fill="#ffc368" />
                                        <path id="Icon_ionic-ios-cloud" data-name="Icon ionic-ios-cloud"
                                            d="M19.332,12.668A6.634,6.634,0,0,0,7.28,9.612a3.135,3.135,0,0,0-1.19-.234,3.276,3.276,0,0,0-3.158,3.246A4.32,4.32,0,0,0,0,16.723,4.159,4.159,0,0,0,4.02,20.9H18.629a4.162,4.162,0,0,0,.7-8.235Z"
                                            transform="translate(188 410.597)" fill="#fff" />
                                        <path id="Icon_ionic-ios-cloudy" data-name="Icon ionic-ios-cloudy"
                                            d="M10.7,6.75a5.4,5.4,0,0,0-5.292,5.416,4.5,4.5,0,0,0,.033.53,3.664,3.664,0,0,0-3.188,3.66A3.619,3.619,0,0,0,5.753,20H16.427a4.49,4.49,0,0,0,0-8.977c-.1,0-.2-.008-.3-.008s-.174,0-.253,0A5.231,5.231,0,0,0,10.7,6.75Z"
                                            transform="translate(205.757 428)" fill="#fff" />
                                    </g>
                                    <g id="Group_135" data-name="Group 135">
                                        <g id="Group_132" data-name="Group 132" transform="translate(-286 -66)">
                                            <text id="o" transform="translate(548 496)" fill="#fff"
                                                font-size="7.583" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em" baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="C" transform="translate(555 497)" fill="#fff"
                                                font-size="12" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em">
                                                <tspan x="0" y="0">C</tspan>
                                            </text>
                                        </g>
                                        <text id="_18" data-name="18" transform="translate(235 440)" fill="#fff"
                                            font-size="24" font-family="Poppins-Medium, Poppins"
                                            font-weight="500">
                                            <tspan x="0" y="0">18</tspan>
                                        </text>
                                        <g id="Group_133" data-name="Group 133" transform="translate(-239 -84)">
                                            <text id="_29_16" data-name="29    16"
                                                transform="translate(478 543)" fill="#fff" font-size="12"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em">
                                                <tspan x="0" y="0" >29 16</tspan>
                                            </text>
                                            <text id="o-2" data-name="o" transform="translate(494 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="o-3" data-name="o" transform="translate(519 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        </div>
                    </div>
                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Surfing at leasure</h3>
                        <div className="recSlider__info__rating">
                            <div className="rating"></div>
                            <div className="review"><span>5.0</span> (123 reviews)</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat… <button className="read--more">read
                                    more</button>
                            </div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-calendar"></span>Nov 10,
                                10:30 AM - Nov 29. 6:30 PM</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-location"></span>Sindalah
                                City</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-category"></span>Swimming
                            </div>
                        </div>
                        <div className="recSlider__info__row recSlider__footer">
                            <div className="recSlider__footer__item">
                                <div className="vibes">
                                    <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                        className="vibes__icon" />
                                    <span className="vibes__text">Overwhelmed </span>
                                </div>
                                <span className="status cancelled">Cancelled</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="completed-event-details.html" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src="./assets/img/cusine_0.png" alt="event title" />
                        <div className="weather">
                             <div className="weather__icon">
                                <img src="./assets/img/abstract.jpg" alt="Weather" />
                            </div>
                            <div className="weather__text">
                                <h2>18&#176;<sup>C</sup></h2>
                                <div className="weather__text--wrap">
                                    <span>29&#176;</span>
                                    <span>16&#176;</span>
                                </div>
                            </div> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="48" viewBox="0 0 97 48">
                                <g id="Group_136" data-name="Group 136" transform="translate(-188 -415)">
                                    <g id="Group_134" data-name="Group 134">
                                        <circle id="Ellipse_8" data-name="Ellipse 8" cx="16" cy="16" r="16"
                                            transform="translate(193.007 416)" fill="#ffc368" />
                                        <path id="Icon_ionic-ios-cloud" data-name="Icon ionic-ios-cloud"
                                            d="M19.332,12.668A6.634,6.634,0,0,0,7.28,9.612a3.135,3.135,0,0,0-1.19-.234,3.276,3.276,0,0,0-3.158,3.246A4.32,4.32,0,0,0,0,16.723,4.159,4.159,0,0,0,4.02,20.9H18.629a4.162,4.162,0,0,0,.7-8.235Z"
                                            transform="translate(188 410.597)" fill="#fff" />
                                        <path id="Icon_ionic-ios-cloudy" data-name="Icon ionic-ios-cloudy"
                                            d="M10.7,6.75a5.4,5.4,0,0,0-5.292,5.416,4.5,4.5,0,0,0,.033.53,3.664,3.664,0,0,0-3.188,3.66A3.619,3.619,0,0,0,5.753,20H16.427a4.49,4.49,0,0,0,0-8.977c-.1,0-.2-.008-.3-.008s-.174,0-.253,0A5.231,5.231,0,0,0,10.7,6.75Z"
                                            transform="translate(205.757 428)" fill="#fff" />
                                    </g>
                                    <g id="Group_135" data-name="Group 135">
                                        <g id="Group_132" data-name="Group 132" transform="translate(-286 -66)">
                                            <text id="o" transform="translate(548 496)" fill="#fff"
                                                font-size="7.583" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em" baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="C" transform="translate(555 497)" fill="#fff"
                                                font-size="12" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em">
                                                <tspan x="0" y="0">C</tspan>
                                            </text>
                                        </g>
                                        <text id="_18" data-name="18" transform="translate(235 440)" fill="#fff"
                                            font-size="24" font-family="Poppins-Medium, Poppins"
                                            font-weight="500">
                                            <tspan x="0" y="0">18</tspan>
                                        </text>
                                        <g id="Group_133" data-name="Group 133" transform="translate(-239 -84)">
                                            <text id="_29_16" data-name="29    16"
                                                transform="translate(478 543)" fill="#fff" font-size="12"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em">
                                                <tspan x="0" y="0" >29 16</tspan>
                                            </text>
                                            <text id="o-2" data-name="o" transform="translate(494 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="o-3" data-name="o" transform="translate(519 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        </div>
                    </div>

                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Surfing at leasure</h3>
                        <div className="recSlider__info__rating">
                            <div className="rating"></div>
                            <div className="review"><span>5.0</span> (123 reviews)</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat… <button className="read--more">read
                                    more</button>
                            </div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-calendar"></span>Nov 10,
                                10:30 AM - Nov 29. 6:30 PM</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-location"></span>Sindalah
                                City</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-category"></span>Golf
                            </div>
                        </div>
                        <div className="recSlider__info__row recSlider__footer">
                            <div className="recSlider__footer__item">
                                <div className="vibes">
                                    <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                        className="vibes__icon" />
                                    <span className="vibes__text">Overwhelmed </span>
                                </div>
                                <span className="status scheduled">Scheduled</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="completed-event-details.html" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src="./assets/img/spa_0.png" alt="event title" />
                        <div className="weather">
                             <div className="weather__icon">
                                <img src="./assets/img/abstract.jpg" alt="Weather" />
                            </div>
                            <div className="weather__text">
                                <h2>18&#176;<sup>C</sup></h2>
                                <div className="weather__text--wrap">
                                    <span>29&#176;</span>
                                    <span>16&#176;</span>
                                </div>
                            </div> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="48" viewBox="0 0 97 48">
                                <g id="Group_136" data-name="Group 136" transform="translate(-188 -415)">
                                    <g id="Group_134" data-name="Group 134">
                                        <circle id="Ellipse_8" data-name="Ellipse 8" cx="16" cy="16" r="16"
                                            transform="translate(193.007 416)" fill="#ffc368" />
                                        <path id="Icon_ionic-ios-cloud" data-name="Icon ionic-ios-cloud"
                                            d="M19.332,12.668A6.634,6.634,0,0,0,7.28,9.612a3.135,3.135,0,0,0-1.19-.234,3.276,3.276,0,0,0-3.158,3.246A4.32,4.32,0,0,0,0,16.723,4.159,4.159,0,0,0,4.02,20.9H18.629a4.162,4.162,0,0,0,.7-8.235Z"
                                            transform="translate(188 410.597)" fill="#fff" />
                                        <path id="Icon_ionic-ios-cloudy" data-name="Icon ionic-ios-cloudy"
                                            d="M10.7,6.75a5.4,5.4,0,0,0-5.292,5.416,4.5,4.5,0,0,0,.033.53,3.664,3.664,0,0,0-3.188,3.66A3.619,3.619,0,0,0,5.753,20H16.427a4.49,4.49,0,0,0,0-8.977c-.1,0-.2-.008-.3-.008s-.174,0-.253,0A5.231,5.231,0,0,0,10.7,6.75Z"
                                            transform="translate(205.757 428)" fill="#fff" />
                                    </g>
                                    <g id="Group_135" data-name="Group 135">
                                        <g id="Group_132" data-name="Group 132" transform="translate(-286 -66)">
                                            <text id="o" transform="translate(548 496)" fill="#fff"
                                                font-size="7.583" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em" baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="C" transform="translate(555 497)" fill="#fff"
                                                font-size="12" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em">
                                                <tspan x="0" y="0">C</tspan>
                                            </text>
                                        </g>
                                        <text id="_18" data-name="18" transform="translate(235 440)" fill="#fff"
                                            font-size="24" font-family="Poppins-Medium, Poppins"
                                            font-weight="500">
                                            <tspan x="0" y="0">18</tspan>
                                        </text>
                                        <g id="Group_133" data-name="Group 133" transform="translate(-239 -84)">
                                            <text id="_29_16" data-name="29    16"
                                                transform="translate(478 543)" fill="#fff" font-size="12"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em">
                                                <tspan x="0" y="0" >29 16</tspan>
                                            </text>
                                            <text id="o-2" data-name="o" transform="translate(494 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="o-3" data-name="o" transform="translate(519 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        </div>
                    </div>
                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Surfing at leasure</h3>
                        <div className="recSlider__info__rating">
                            <div className="rating"></div>
                            <div className="review"><span>5.0</span> (123 reviews)</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat… <button className="read--more">read
                                    more</button>
                            </div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-calendar"></span>Nov 10,
                                10:30 AM - Nov 29. 6:30 PM</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-location"></span>Sindalah
                                City</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-category"></span>Swimming
                            </div>
                        </div>
                        <div className="recSlider__info__row recSlider__footer">
                            <div className="recSlider__footer__item">
                                <div className="vibes">
                                    <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                        className="vibes__icon" />
                                    <span className="vibes__text">Overwhelmed </span>
                                </div>
                                <span className="status cancelled">Cancelled</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="completed-event-details.html" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src="./assets/img/holiday_0.png" alt="event title" />
                        <div className="weather">
                             <div className="weather__icon">
                                <img src="./assets/img/abstract.jpg" alt="Weather" />
                            </div>
                            <div className="weather__text">
                                <h2>18&#176;<sup>C</sup></h2>
                                <div className="weather__text--wrap">
                                    <span>29&#176;</span>
                                    <span>16&#176;</span>
                                </div>
                            </div> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="48" viewBox="0 0 97 48">
                                <g id="Group_136" data-name="Group 136" transform="translate(-188 -415)">
                                    <g id="Group_134" data-name="Group 134">
                                        <circle id="Ellipse_8" data-name="Ellipse 8" cx="16" cy="16" r="16"
                                            transform="translate(193.007 416)" fill="#ffc368" />
                                        <path id="Icon_ionic-ios-cloud" data-name="Icon ionic-ios-cloud"
                                            d="M19.332,12.668A6.634,6.634,0,0,0,7.28,9.612a3.135,3.135,0,0,0-1.19-.234,3.276,3.276,0,0,0-3.158,3.246A4.32,4.32,0,0,0,0,16.723,4.159,4.159,0,0,0,4.02,20.9H18.629a4.162,4.162,0,0,0,.7-8.235Z"
                                            transform="translate(188 410.597)" fill="#fff" />
                                        <path id="Icon_ionic-ios-cloudy" data-name="Icon ionic-ios-cloudy"
                                            d="M10.7,6.75a5.4,5.4,0,0,0-5.292,5.416,4.5,4.5,0,0,0,.033.53,3.664,3.664,0,0,0-3.188,3.66A3.619,3.619,0,0,0,5.753,20H16.427a4.49,4.49,0,0,0,0-8.977c-.1,0-.2-.008-.3-.008s-.174,0-.253,0A5.231,5.231,0,0,0,10.7,6.75Z"
                                            transform="translate(205.757 428)" fill="#fff" />
                                    </g>
                                    <g id="Group_135" data-name="Group 135">
                                        <g id="Group_132" data-name="Group 132" transform="translate(-286 -66)">
                                            <text id="o" transform="translate(548 496)" fill="#fff"
                                                font-size="7.583" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em" baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="C" transform="translate(555 497)" fill="#fff"
                                                font-size="12" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em">
                                                <tspan x="0" y="0">C</tspan>
                                            </text>
                                        </g>
                                        <text id="_18" data-name="18" transform="translate(235 440)" fill="#fff"
                                            font-size="24" font-family="Poppins-Medium, Poppins"
                                            font-weight="500">
                                            <tspan x="0" y="0">18</tspan>
                                        </text>
                                        <g id="Group_133" data-name="Group 133" transform="translate(-239 -84)">
                                            <text id="_29_16" data-name="29    16"
                                                transform="translate(478 543)" fill="#fff" font-size="12"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em">
                                                <tspan x="0" y="0" >29 16</tspan>
                                            </text>
                                            <text id="o-2" data-name="o" transform="translate(494 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="o-3" data-name="o" transform="translate(519 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        </div>
                    </div>

                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Surfing at leasure</h3>
                        <div className="recSlider__info__rating">
                            <div className="rating"></div>
                            <div className="review"><span>5.0</span> (123 reviews)</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat… <button className="read--more">read
                                    more</button>
                            </div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-calendar"></span>Nov 10,
                                10:30 AM - Nov 29. 6:30 PM</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-location"></span>Sindalah
                                City</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-category"></span>Golf
                            </div>
                        </div>
                        <div className="recSlider__info__row recSlider__footer">
                            <div className="recSlider__footer__item">
                                <div className="vibes">
                                    <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                        className="vibes__icon" />
                                    <span className="vibes__text">Overwhelmed </span>
                                </div>
                                <span className="status scheduled">Scheduled</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="completed-event-details.html" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src="./assets/img/cusine_0.png" alt="event title" />
                        <div className="weather">
                             <div className="weather__icon">
                                <img src="./assets/img/abstract.jpg" alt="Weather" />
                            </div>
                            <div className="weather__text">
                                <h2>18&#176;<sup>C</sup></h2>
                                <div className="weather__text--wrap">
                                    <span>29&#176;</span>
                                    <span>16&#176;</span>
                                </div>
                            </div> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="48" viewBox="0 0 97 48">
                                <g id="Group_136" data-name="Group 136" transform="translate(-188 -415)">
                                    <g id="Group_134" data-name="Group 134">
                                        <circle id="Ellipse_8" data-name="Ellipse 8" cx="16" cy="16" r="16"
                                            transform="translate(193.007 416)" fill="#ffc368" />
                                        <path id="Icon_ionic-ios-cloud" data-name="Icon ionic-ios-cloud"
                                            d="M19.332,12.668A6.634,6.634,0,0,0,7.28,9.612a3.135,3.135,0,0,0-1.19-.234,3.276,3.276,0,0,0-3.158,3.246A4.32,4.32,0,0,0,0,16.723,4.159,4.159,0,0,0,4.02,20.9H18.629a4.162,4.162,0,0,0,.7-8.235Z"
                                            transform="translate(188 410.597)" fill="#fff" />
                                        <path id="Icon_ionic-ios-cloudy" data-name="Icon ionic-ios-cloudy"
                                            d="M10.7,6.75a5.4,5.4,0,0,0-5.292,5.416,4.5,4.5,0,0,0,.033.53,3.664,3.664,0,0,0-3.188,3.66A3.619,3.619,0,0,0,5.753,20H16.427a4.49,4.49,0,0,0,0-8.977c-.1,0-.2-.008-.3-.008s-.174,0-.253,0A5.231,5.231,0,0,0,10.7,6.75Z"
                                            transform="translate(205.757 428)" fill="#fff" />
                                    </g>
                                    <g id="Group_135" data-name="Group 135">
                                        <g id="Group_132" data-name="Group 132" transform="translate(-286 -66)">
                                            <text id="o" transform="translate(548 496)" fill="#fff"
                                                font-size="7.583" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em" baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="C" transform="translate(555 497)" fill="#fff"
                                                font-size="12" font-family="Poppins-Regular, Poppins"
                                                letter-spacing="0.022em">
                                                <tspan x="0" y="0">C</tspan>
                                            </text>
                                        </g>
                                        <text id="_18" data-name="18" transform="translate(235 440)" fill="#fff"
                                            font-size="24" font-family="Poppins-Medium, Poppins"
                                            font-weight="500">
                                            <tspan x="0" y="0">18</tspan>
                                        </text>
                                        <g id="Group_133" data-name="Group 133" transform="translate(-239 -84)">
                                            <text id="_29_16" data-name="29    16"
                                                transform="translate(478 543)" fill="#fff" font-size="12"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em">
                                                <tspan x="0" y="0" >29 16</tspan>
                                            </text>
                                            <text id="o-2" data-name="o" transform="translate(494 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                            <text id="o-3" data-name="o" transform="translate(519 541)"
                                                fill="#fff" font-size="7.583"
                                                font-family="Poppins-Regular, Poppins" letter-spacing="0.022em"
                                                baseline-shift="4.332900047302246">
                                                <tspan x="0" y="0">o</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        </div>
                    </div>
                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Surfing at leasure</h3>
                        <div className="recSlider__info__rating">
                            <div className="rating"></div>
                            <div className="review"><span>5.0</span> (123 reviews)</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Lorem ipsum dolor
                                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat… <button className="read--more">read
                                    more</button>
                            </div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-calendar"></span>Nov 10,
                                10:30 AM - Nov 29. 6:30 PM</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-location"></span>Sindalah
                                City</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items"><span className="icon icon-category"></span>Swimming
                            </div>
                        </div>
                        <div className="recSlider__info__row recSlider__footer">
                            <div className="recSlider__footer__item">
                                <div className="vibes">
                                    <img src="./assets/img/overwhelmed.svg" alt="Overwhelmed"
                                        className="vibes__icon" />
                                    <span className="vibes__text">Overwhelmed </span>
                                </div>
                                <span className="status cancelled">Cancelled</span>
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

<div className="recSlider recSlider--cardView recSlider--cardView-fullWidth">
    <h2 className="recSlider__title">Charlie, hope we understand you better</h2>
    <div className="swiper tailored">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <a href="#" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src="./assets/img/Event-Banner.png" alt="event title" />
                    </div>

                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Indulge in the Finest Epicurean Cuisines</h3>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items">on Nov 17, 2022</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Hi Charlie, we came
                                to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday.
                                As a compensation we would like to offer you a free Italian cuisines as a
                                goodwill gesture. Would you like to accept our request?</div>
                        </div>
                        <div className="recSlider__info__row">
                            <button className="btn btn__black">Yes, I accept</button>
                            <button className="btn btn__link">No, thanks</button>
                        </div>
                    </div>

                    <div className="recSlider__emotion">
                        <img src="./assets/img/disappointed.svg" alt=""/>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="#" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src="./assets/img/holiday_0.png" alt="event title" />
                    </div>

                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Indulge in the Finest Epicurean Cuisines</h3>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items">on Nov 17, 2022</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Hi Charlie, we came
                                to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday.
                                As a compensation we would like to offer you a free Italian cuisines as a
                                goodwill gesture. Would you like to accept our request?</div>
                        </div>
                        <div className="recSlider__info__row">
                            <button className="btn btn__black">Yes, I accept</button>
                            <button className="btn btn__link">No, thanks</button>
                        </div>
                    </div>

                    <div className="recSlider__emotion">
                        <img src="./assets/img/overwhelmed.svg" alt=""/>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="#" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src="./assets/img/cusine_0.png" alt="event title" />
                    </div>

                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Indulge in the Finest Epicurean Cuisines</h3>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items">on Nov 17, 2022</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Hi Charlie, we came
                                to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday.
                                As a compensation we would like to offer you a free Italian cuisines as a
                                goodwill gesture. Would you like to accept our request?</div>
                        </div>
                        <div className="recSlider__info__row">
                            <button className="btn btn__black">Yes, I accept</button>
                            <button className="btn btn__link">No, thanks</button>
                        </div>
                    </div>

                    <div className="recSlider__emotion">
                        <img src="./assets/img/joy.svg" alt=""/>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="#" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src="./assets/img/rolce.png" alt="event title" />
                    </div>

                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Indulge in the Finest Epicurean Cuisines</h3>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items">on Nov 17, 2022</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Hi Charlie, we came
                                to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday.
                                As a compensation we would like to offer you a free Italian cuisines as a
                                goodwill gesture. Would you like to accept our request?</div>
                        </div>
                        <div className="recSlider__info__row">
                            <button className="btn btn__black">Yes, I accept</button>
                            <button className="btn btn__link">No, thanks</button>
                        </div>
                    </div>

                    <div className="recSlider__emotion">
                        <img src="./assets/img/anger.svg" alt=""/>
                    </div>
                </a>
            </div>
            <div className="swiper-slide">
                <a href="#" className="recSlider__link">
                    <div className="slider__image--wrapper">
                        <img src="./assets/img/holiday_0.png" alt="event title" />
                    </div>

                    <div className="recSlider__info">
                        <h3 className="recSlider__info__title">Indulge in the Finest Epicurean Cuisines</h3>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items">on Nov 17, 2022</div>
                        </div>
                        <div className="recSlider__info__row">
                            <div className="recSlider__info__items recSlider__info__description">Hi Charlie, we came
                                to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday.
                                As a compensation we would like to offer you a free Italian cuisines as a
                                goodwill gesture. Would you like to accept our request?</div>
                        </div>
                        <div className="recSlider__info__row">
                            <button className="btn btn__black">Yes, I accept</button>
                            <button className="btn btn__link">No, thanks</button>
                        </div>
                    </div>

                    <div className="recSlider__emotion">
                        <img src="./assets/img/appreciation.svg" alt=""/>
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
        <h2 className="trending__title">Today's recommendations for you, Charlie!</h2>
        <div className="card__grid">
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/spa_0.png" alt="event name" className="card__img" />
                        <span className="card__count"><img src="./assets/img/one.svg" alt="Top ranking 1"/></span>
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
                        <div className="card__price">1100 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/holiday_0.png" alt="event name" className="card__img" />
                        <span className="card__count"><img src="./assets/img/two.svg" alt="Top ranking 1"/></span>
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
                        <div className="card__price">1100 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/cusine_0.png" alt="event name" className="card__img" />
                        <span className="card__count"><img src="./assets/img/three.svg" alt="Top ranking 1"/></span>
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
                        <div className="card__price">1100 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/rolce.png" alt="event name" className="card__img" />
                        <span className="card__count"><img src="./assets/img/four.svg" alt="Top ranking 1"/></span>
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
                        <div className="card__price">1100 AED/person</div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <button className="card__fav"><span className="icon-heart"></span></button>
                        <img src="./assets/img/Event-Banner.png" alt="event name" className="card__img" />
                        <span className="card__count"><img src="./assets/img/five.svg" alt="Top ranking 1"/></span>
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
                        <div className="card__price">1100 AED/person</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>


<div className="recommendations">
    <div className="container">
        <h2 className="recommendations__title">Charlie, here is your master journey with us so far</h2>
        <div className="card__grid card__grid--dashboard">
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <img src="./assets/img/spa_0.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">3 guests attended this event</div>
                        <div className="card__date">on Nov 17, 2022</div>
                        <div className="card__row">
                            <div className="card__rating">
                                <span className="card__rating__txt"><span className="card__rating__txt">You rated this event</span></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span><span className="icon-star"></span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <img src="./assets/img/Event-Banner.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <h3 className="card__title">Swimming game for below 18 year kids</h3>
                        <div className="card__price">1 guest attended this event</div>
                        <div className="card__date">on Nov 17, 2022</div>
                        <div className="card__row">
                            <div className="card__rating"><span className="card__rating__txt card__rating__txt--link">Rate this event</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <img src="./assets/img/holiday_0.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <h3 className="card__title">Live comedy Performance in front...</h3>
                        <div className="card__price">2 guest attended this event</div>
                        <div className="card__date">on Nov 16, 2022</div>
                        <div className="card__row">
                            <div className="card__rating"><span className="card__rating__txt card__rating__txt--link">Rate this event</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="card__item">
                <a href="#" className="card__link">
                    <div className="card__thumb">
                        <img src="./assets/img/spa_0.png" alt="event name" className="card__img" />
                    </div>
                    <div className="card__info">
                        <h3 className="card__title">Surfing at leasure</h3>
                        <div className="card__price">3 guests attended this event</div>
                        <div className="card__date">on Nov 17, 2022</div>
                        <div className="card__row">
                            <div className="card__rating">
                                <span className="card__rating__txt">You rated this event</span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                                <span className="icon-star"></span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>


<div className="onmap">
    <div className="container">
        <h2 className="onmap__title">Find events on map</h2>
        <div className="onmap__map">
            <img src="./assets/img/map.jpg" alt=""/>
        </div>
    </div>
</div>

 <div className="vibeMeter">
<div className="container">
    <h2 className="vibeMeter__title">Your master journey with Unified Guests</h2>
    <div className="grid__row">
        <div className="grid__col meter">
            <div className="background-colorBox">
                <div className="colorBox color1"></div>
                <div className="colorBox color2"></div>
            </div>
            <img src="./assets/img/vibe-o-meter.svg" alt="Vibe-O-Meter"/>
        </div>
        <div className="grid__col graph">
            <h4 className="graph__title">Your master journey with Unified Guests</h4>
            <img src="./assets/img/graph.svg" alt="Graph"/>
        </div>
    </div>
</div>
</div> 

</main>


</div>

    </>
  )
}

export default Main