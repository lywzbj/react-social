
import './sidebar.css'
import {BsReception4,BsFillChatSquareTextFill,BsFillQuestionCircleFill,BsFillPeopleFill,
    BsFillPlayCircleFill,BsBookmarkFill,BsBriefcaseFill,BsCalendarEventFill,BsMortarboardFill} from "react-icons/bs";

export default function Sidebar() {

    return (

        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <BsReception4 className='sidebarIcon' />
                        <span>Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillChatSquareTextFill className='sidebarIcon' />
                        <span>Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillPlayCircleFill  className='sidebarIcon' />
                        <span>Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillPeopleFill className='sidebarIcon' />
                        <span>Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsBookmarkFill className='sidebarIcon' />
                        <span>Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsFillQuestionCircleFill className='sidebarIcon' />
                        <span>Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsBriefcaseFill className='sidebarIcon' />
                        <span>Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsCalendarEventFill className='sidebarIcon' />
                        <span>Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <BsMortarboardFill className='sidebarIcon' />
                        <span>Courses</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr' />
                <ul className='sidebarFriendList'>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src='/assets/person/2.jpeg' alt="" />
                        <span className="sidebarFriendName">Json</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src='/assets/person/2.jpeg' alt="" />
                        <span className="sidebarFriendName">Json</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src='/assets/person/2.jpeg' alt="" />
                        <span className="sidebarFriendName">Json</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src='/assets/person/2.jpeg' alt="" />
                        <span className="sidebarFriendName">Json</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src='/assets/person/2.jpeg' alt="" />
                        <span className="sidebarFriendName">Json</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src='/assets/person/2.jpeg' alt="" />
                        <span className="sidebarFriendName">Json</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src='/assets/person/2.jpeg' alt="" />
                        <span className="sidebarFriendName">Json</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src='/assets/person/2.jpeg' alt="" />
                        <span className="sidebarFriendName">Json</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src='/assets/person/2.jpeg' alt="" />
                        <span className="sidebarFriendName">Json</span>
                    </li>

                </ul>
            </div>
        </div>

    )


}