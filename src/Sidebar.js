import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


function SideBar() {
    return (
        <div className="sidebar"> 

        <SidebarRow src='G:\Personal\Jowhar passport size.jpg' title='Jowhar' />
        <SidebarRow Icon={LocalHospitalIcon} title='Covid19 Information Center'/>
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
        <SidebarRow Icon={PeopleIcon} title='Friends'/>
        <SidebarRow Icon={ChatIcon} title='Messenger'/>
        <SidebarRow Icon={StorefrontIcon} title='Market Place'/>
        <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
        <SidebarRow />
        <SidebarRow />
            
        </div>
    )
}

export default SideBar
