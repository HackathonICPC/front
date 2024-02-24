import { useState } from "react";

import Logo from "./Logo";

export default function Header(){
    return (
        <header id="header" class="header fixed-top d-flex align-items-center">
            <Logo src='assets/img/logo.png' label='ICPCources'/>            
        </header>
    );
}