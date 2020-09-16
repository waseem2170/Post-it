import React from 'react';
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Avatar} from "@material-ui/core";
import Pic from "./Pics/Capture.PNG";
import { useStateValue } from "./StateProvider";


function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <img src={Pic} alt="Not working"></img>
            </div>
            <div className="header_input">          
                <SearchIcon />
                <input placeholder="Search" type="text"/>
            </div>
            
            <div className="header_center">
                <div className="header_option header__option--active">
                         <HomeIcon fontSize="large"/>
                </div>
                <div className="header_option">             
                        <YouTubeIcon fontSize="large"/>            
                </div>
                <div className="header_option">
                        <InstagramIcon fontSize="large"/>
                </div>
                <div className="header_option">
                        <FacebookIcon fontSize="large"/>
                </div>
            </div>
             <div className="header_right">
                 <div className="header_info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                 </div>        
             </div>
        </div>
    )
}

export default Header
