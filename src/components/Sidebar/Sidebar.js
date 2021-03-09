import React from 'react';
import Link from 'next/link';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
const Sidebar = () => {
    return (
        <nav id="sidebar" className="sidebar d-none d-sm-block">
            <ul className="nav-menu-items">
                <div className="brand-wrapper px-4">
                    <Link href="/">
                        <a>
                            <img src="/img/artbot-logo.png" className="brand" />
                        </a>
                    </Link>{' '}
                </div>
                <SidebarMenu/>
            </ul>
        </nav>
    );
};

export default Sidebar;
