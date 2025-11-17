"use client";
import { useState } from "react";

function Drawer() {
    const [menuItems, setMenuItem] = useState(["Home", "Accounts", "Chain"]);
    
    return (
        <nav className="drawer col-flex-box">
            <img alt="logo"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.yQVMBFUyj-4CF7lFyg5OAgHaHW%3Fpid%3DApi&f=1&ipt=a4e6d1baa852824f83dcc796ab78f03a348e1226d8edbdd3fbc756c6fe89d982&ipo=images"/>
            {
                menuItems.map(
                    (item) => {
                        return <DrawerMenuItem key={item} menuItem={item} />
                    }
                )
            }
        </nav>
    )
}

function DrawerMenuItem({ menuItem }: { menuItem: String}) {
    return (
        <div className="drawer-menu-item flex-box">
            <span>{menuItem}</span>
        </div>
    );
}

export default Drawer;