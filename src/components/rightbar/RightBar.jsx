
import './rightBar.css'

export default function RightBar() {

    return (

        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="rightbarBirth">
                    <img className='birthDayImg' src='/assets/gift.png' />
                    <span><b>Pola Foster</b> and <b>3 other friends</b>have a birthday today.</span>


                </div>

                <img className='rightbarAd' src='/assets/ad.png' />


                <div className="onlineFriends">
                    <h4>Online Friends</h4>
                    <ul className='rightbarOnlineFriendList'>
                        <li className='onlineFriendItem'>
                            <div className="rightFriendItemContainer">
                                <img src='/assets/person/5.jpeg' className='onlineFriendImg' />
                                <span className="rightbarOnlinePoint"></span>
                                <span className="onlienFriendUserName">John Carter</span>
                            </div>
                        </li>
                        <li className='onlineFriendItem'>
                            <div className="rightFriendItemContainer">
                                <img src='/assets/person/5.jpeg' className='onlineFriendImg' />
                                <span className="rightbarOnlinePoint"></span>
                                <span className="onlienFriendUserName">John Carter</span>
                            </div>
                        </li>
                        <li className='onlineFriendItem'>
                            <div className="rightFriendItemContainer">
                                <img src='/assets/person/5.jpeg' className='onlineFriendImg' />
                                <span className="rightbarOnlinePoint"></span>
                                <span className="onlienFriendUserName">John Carter</span>
                            </div>
                        </li>
                        <li className='onlineFriendItem'>
                            <div className="rightFriendItemContainer">
                                <img src='/assets/person/5.jpeg' className='onlineFriendImg' />
                                <span className="rightbarOnlinePoint"></span>
                                <span className="onlienFriendUserName">John Carter</span>
                            </div>
                        </li>
                        <li className='onlineFriendItem'>
                            <div className="rightFriendItemContainer">
                                <img src='/assets/person/5.jpeg' className='onlineFriendImg' />
                                <span className="rightbarOnlinePoint"></span>
                                <span className="onlienFriendUserName">John Carter</span>
                            </div>
                        </li>
                        <li className='onlineFriendItem'>
                            <div className="rightFriendItemContainer">
                                <img src='/assets/person/5.jpeg' className='onlineFriendImg' />
                                <span className="rightbarOnlinePoint"></span>
                                <span className="onlienFriendUserName">John Carter</span>
                            </div>
                        </li>
                    </ul>




                </div>

            </div>
        </div>

    )


}