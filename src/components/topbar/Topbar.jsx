import './topbar.css'
import {FaSearch} from "react-icons/fa";
import {BsFillPersonFill,BsFillChatSquareTextFill,BsFillBellFill} from "react-icons/bs";

export default function Topbar() {


    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>
                    Lamasocial
                </span>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <FaSearch className='searchIcon' />
                    <input placeholder="Search for friend,post or video"  type="text" className="searchInput"/>
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className='topbarIconItem'>
                        <BsFillPersonFill />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <BsFillChatSquareTextFill />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className='topbarIconItem'>
                        <BsFillBellFill />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src='/assets/person/1.jpeg'  className='topbarImg'/>
            </div>

        </div>

    )
}