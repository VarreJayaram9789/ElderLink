
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupsIcon from "@mui/icons-material/Groups";
//import BookmarkIcon from "@mui/icons-material/Bookmark";
//import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventIcon from "@mui/icons-material/Event";
//import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./sidebar.scss";
import MenuLink from "../menuLink/MenuLink";
import Friends from "../friends/Friends";
import { Users } from "../../data";
import { Link } from "react-router-dom";


const Sidebar = () => {
  
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <Link to="/" style={{textDecoration: "none"}}>
        <MenuLink Icon={<RssFeedIcon />} text="Feed" />
        </Link>
        <MenuLink Icon={<ChatIcon />} text="LiveChats" />
        <MenuLink Icon={<VideocamIcon />} text="Videos" />
        <MenuLink Icon={<GroupsIcon />} text="Friends" />
        <MenuLink Icon={<EventIcon />} text="Events" />
       
          
        <MenuLink Icon={<ExitToAppOutlinedIcon />} text="Logout" />

        
        <hr className="sidebarHr" />

        {/*<ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
          </ul>*/}
          <div className="birthdayContainer">
        <img
          src="/assets/birthdaygifts/gift.png"
          alt= ""
          className="birthdayImg"
        />
        <span className="birthdayText">
          <b>Sarah Dane</b> and <b>other friends</b> have a birthday today
        </span>
      </div>
          <img src="/assets/ads/adv.jpg" alt="" className="rightbarAdvert" />
      </div>
    </div>
  );
};

export default Sidebar;
