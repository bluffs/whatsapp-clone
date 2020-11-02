import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from '../SidebarChat/SidebarChat';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src='data:image/jpeg;base64,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' />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>   
    )
}

export default Sidebar;
