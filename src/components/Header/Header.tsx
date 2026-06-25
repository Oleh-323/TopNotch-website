"use client";

import logo from "../../assets/logo.svg";
import arrowUp from "../../assets/carbon_arrow-up-right.svg";
import style from "./Header.module.css";

type TypeMenuComponents ={
    key: string;
    href: string;
};

const menuComponents: TypeMenuComponents[] =[
    {key: "Services", href: "#services"},
    {key: "About", href: "#about"},
    {key: "Contact us", href: "#contact-us"},
    {key: "Support", href: "#support"},
    {key: "Connect & Learn", href: "#connect-learn"}
];

function clickMessage(){
    const message= "send me a message on my telegram @ContuctNumber"
    window.alert(message);
}

function Header(){
    
    return (
        <>
        <header className={style.header}>
            <img src={logo.src} alt="Logo" />

            <nav>
                {menuComponents.map((c)=>
                    <a key={c.key} href={c.href}>{c.key}</a>
                )}
            </nav>

            <button onClick={clickMessage}>Contact us <img src={arrowUp.src} /></button>
        </header>
        </>
    )

}


export default Header;