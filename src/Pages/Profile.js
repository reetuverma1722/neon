import React from 'react'
import Header from '../Components/Header'
import "../assets/scss/_profile.scss"
import Footer from '../Components/Footer'
const Profile= () => {
  return (
    <>
         <Header/>
        <main className="content">
        <div className="profile">
            <div className="container">
                <div className="profile__page userPreferences">
                    <h2 className="profile__title">Edit Charlie's profile</h2>
                    <div className="profile__edit">
                        <div className="profile__list">
                            <div className="profile__list--item active">
                                <div className="profile__info">   
                                    <div className="profile__image">
                                        <div className="profile__image--abstract"></div>
                                        <div className="profile__main--image">
                                            <img src="./assets/img/music.png" alt=""/>
                                        </div>
                                        <div className="profile__image--overlay"></div>
                                        <div className="profile__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27.232" height="26" viewBox="0 0 27.232 26">
                                                <g id="Icon_feather-edit-3" data-name="Icon feather-edit-3" transform="translate(-3.5 -3.318)">
                                                  <path id="Path_25" data-name="Path 25" d="M18,30H31.5" transform="translate(-1.768 -1.682)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                  <path id="Path_26" data-name="Path 26" d="M23.356,5.189a2.968,2.968,0,0,1,4.19,4.205L10.087,26.916,4.5,28.318l1.4-5.607Z" transform="translate(0 0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>Name
                                </div>
                            </div>
                        </div>
                        <div className="profile__content">
                            <div className="form__group">
                                <label className="form__label">What should we call you?</label>
                                <input type="text" className="form__input" placeholder=""/>
                            </div>
                            <div className="form__group">
                                <label className="form__label">What's your email address?</label>
                                <input type="email" className="form__input" placeholder="" value="Charlie.mathwe@gmail.com" disabled/>
                            </div>
                            <div className="form__group">
                                <label className="form__label">On which number can we contact you?</label>
                                <input type="tel" className="form__input" placeholder=""/>
                            </div>
                            <div className="form__group">
                                <label className="form__label">When can we wish a happy birthday?</label>
                                <input type="text" className="form__input" placeholder=""/>
                            </div>
                            <ul className="activity__list">
                                <li className="activity__list--item active">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/golf.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Golf</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
        
                                <li className="activity__list--item">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/music.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Music</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
        
                                <li className="activity__list--item active">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/exploring.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Rooms</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
        
                                <li className="activity__list--item">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/cooking&dinner.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Exploring</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
        
                                <li className="activity__list--item">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/standup-comedy.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Socializing</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
        
        
                                <li className="activity__list--item">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/socializing.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Cooking & dining</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
        
        
                                <li className="activity__list--item">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/plays.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Plays</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
        
                                <li className="activity__list--item">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/chinese-food.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Chinese Food</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
        
                                <li className="activity__list--item">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/screaming-child.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Screaming Child</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
        
                                <li className="activity__list--item">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/walking-for-long.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Walking for long</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
        
                                <li className="activity__list--item">
                                    <div className="activity__info">   
                                        <div className="activity__image">
                                            <img src="./assets/img/water-sports.png" alt="activity"/>
                                            <div className="activity__image--overlay"></div>
                                            <div className="activity__name">Water Sports</div>
                                        </div>
                                        <div className="activity__selected">
                                            <div className="icon-thumbs-up"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="form__group m-0">
                                <label className="form__label">Please let us know if you have some interests</label>
                                <input type="text" className="form__input" placeholder="Add multiple interests comma ( , ) separated"/>
                            </div>
                            <div className="btn--wrap">
                                <button className="btn btn__red">Save</button>
                                <button className="btn btn__transparent">Cancel</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
  </main>
   <Footer/>
    
    </>
  )
}

export default Profile