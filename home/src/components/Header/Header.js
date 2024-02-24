import { useState } from "react";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Notifications from "./Notifications";
import Profile from "./Profile";

export default function Header(){
    return (
        <header id="header" class="header fixed-top d-flex align-items-center">
            <Logo src='assets/img/logo.png' label='ICPCources'/>
            <SearchBar/>
            <nav class="header-nav ms-auto">
                <ul class="d-flex align-items-center">
                    <Notifications/>
                    <Profile src="assets/img/sour_soup.jpg" name="Суп в супе"/>
                </ul>
            </nav>     
        </header>
    );
}