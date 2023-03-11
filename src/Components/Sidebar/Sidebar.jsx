import React from 'react';
import {Linksidebar} from '../../Utils/Components';
import "./Sidebar.scss"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__categories">
                <Linksidebar linkIcon="home" text="Home" link="Home" />
                <Linksidebar linkIcon="local_fire_department" text="Trending" link="trending" />
                <Linksidebar linkIcon="subscriptions" text="Subcriptions" link="subcriptions" />
            </div>
            <hr />
            <div className="sidebar__categories">
                <Linksidebar linkIcon="library_add_check" text="Library" link="library" />
                <Linksidebar linkIcon="history" text="History" link="history" />
                <Linksidebar linkIcon="play_arrow" text="Your Videos" link="Your-Videos" />
                <Linksidebar linkIcon="watch_later" text="Watch Later" link="Watch-Later" />
                <Linksidebar linkIcon="thumb_up" text="Liked Videos" link="Liked-Videos" />
            </div>
            <hr />
        </div>
    );
}

export default Sidebar;
