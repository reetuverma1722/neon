import React from 'react'

const Header = () => {
  return (
   <>

    <div>
    <header class="header">
        <div class="container">
            <div class="header__branding">
                <a href="dashboard.html" class="header__branding__logo">
                    <img src="./assets/img/logo-black.svg" alt="Logo" />
                </a>
            </div>
            <nav class="header__menu">
                <ul class="header__nav">
                    <li class="header__nav__item header__nav__item-active header__nav__item--mobile">
                        <a href="dashboard.html" class="header__nav__link header__nav__link--underline">Dashboard</a>
                    </li>
                    <li class="header__nav__item header__nav__item--mobile">
                        <a href="myfavorites.html" class="header__nav__link header__nav__link--underline">My
                            favorites</a>
                    </li>
                    <li class="header__nav__item header__nav__item--mobile">
                        <a href="upcoming-event.html" class="header__nav__link header__nav__link--underline">Upcoming
                            events</a>
                    </li>
                    <li class="header__nav__item header__nav__item--notifications">
                        <a href="#" class="header__nav__link">
                            <span class="icon-bell"></span>
                               <span class="circle"></span>
                        </a>
                        <div class="popup">
                            <h4 class="popup__title">Hey Charlie
                                <span class="popup__icon">
                                    <img src="./assets/img/hand.svg" alt="" />
                                </span>
                            </h4>
                            <p class="popup__content">We noticed that you have changed your preferences. We have added
                                some new events keeping in mind your new settings.</p>
                            <p class="popup__content">Please visit the home page to check the new events and activities!
                            </p>
                            <div class="popup__actions">
                                <button class="popup__btn" onclick="location.href = 'notifications.html';">I want to
                                    see</button>
                                <a class="popup__link">Remind me later</a>
                            </div>
                            <div class="popup__pointer"></div>
                            <div class="popup__close">
                               <svg version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    x="0px" y="0px" width="122.881px" height="122.88px" viewBox="0 0 122.881 122.88"
                                    enable-background="new 0 0 122.881 122.88" >
                                    <g>
                                        <path
                                            d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li class="header__nav__item header__nav__item--menu">
                        <a href="#" class="header__nav__link">
                            <div class="header__nav__link__menu">
                                <span class="icon-menu"></span>
                                <div class="header__nav__link__user">
                                    <div class="header__nav__link__user--init"></div>
                                     <div class="nav__link__user--pic"></div> 
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-menu">
                            <ul class="nav">
                                <li class="nav__item nav__item--mobile"><a href="dashboard.html" class="nav__link">Dashboard</a></li>
                                <li class="nav__item nav__item--mobile"><a href="myfavorites.html" class="nav__link">My favorites</a>
                                </li>
                                <li class="nav__item nav__item--mobile"><a href="upcoming-event.html" class="nav__link">Upcomingevents</a>
                                </li>
                                <li class="nav__divider nav__item--mobile"></li>
                                <li class="nav__item"><a href="edit-profile.html" class="nav__link">Edit profiles</a>
                                </li>
                                <li class="nav__item"><a href="feedback.html" class="nav__link">Feedback</a></li>
                                <li class="nav__item"><a href="settings.html" class="nav__link">Settings</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="header__nav__item header__nav__item--languages">
                        <div role="button" class="header__nav__link"><span class="icon-globe"></span></div>
                        <div class="dropdown-menu dropdown-menu--sm">
                            <ul class="nav">
                                <li class="nav__item"><a href="#english" class="nav__link nav__link--selected">English</a></li>
                                <li class="nav__item"><a href="#french" class="nav__link">French</a></li>
                                <li class="nav__item"><a href="#arabic" class="nav__link">Arabic</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    </div>
   </>
  )
}

export default Header