"use client";

import logo from "../../assets/logo.svg";
import arrowUp from "../../assets/carbon_arrow-up-right.svg";
import style from "./Header.module.css";
import { useState } from "react";

type TypeMenuComponents ={
    key: string;
    href: string;
};

type SectionMenuType={
    title: string;
    description: string;
    href: string;
};

const menuComponents: TypeMenuComponents[] =[
    {key: "Services", href: "#services"},
    {key: "About", href: "#about"},
    {key: "Contact us", href: "#contact-us"},
    {key: "Support", href: "#support"},
    {key: "Connect & Learn", href: "#connect-learn"}
];

const sectionMenu: SectionMenuType[]= [
    {title: "Managed Services", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#managed-services"},
    {title: "Commercial", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#commercial"},
    {title: "Cybersecurity", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#cybersecurity"},
    {title: "Residential", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#residential"},
    {title: "Network Management", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#network-management"},
    {title: "Computer Repair", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#computer-repair"},
    {title: "IT Consulting", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#it-consulting"},
    {title: "Custom Computers", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#custom-computers"}
];

function clickMessage(){
    const message= "send me a message on my telegram @ContuctNumber"
    window.alert(message);
}

function Header(){
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    function handleMenuEnter(){setIsServicesOpen(true)}
    function handleMenuDown(){setIsServicesOpen(false)}

    function handleMenuComponent(menuKey: string) {
        if (menuKey == "Services") {
            setIsServicesOpen(true);
        } else {
            setIsServicesOpen(false);
        }
    }

    return (
        <>
            <div className={style.headerWrapper}>
                <header className={style.header}>
                    <img src={logo.src} alt="Logo" />

                    <nav>
                        {menuComponents.map((c)=>
                            <a key={c.key} href={c.href}  onMouseEnter={() => handleMenuComponent(c.key)}>{c.key}</a>
                        )}
                    </nav>

                    <button onClick={clickMessage}>Contact us <img src={arrowUp.src} /></button>
                </header>
                <section style={{ "display": isServicesOpen ? "grid": "none" }} className={style.particle} >
                    {sectionMenu.map((index)=>
                        <a className={style.part} title={index.title} href={index.href}>
                            <h1>{index.title}</h1>
                            <span className={style.description}>{index.description}</span>
                        </a>
                    )}
                </section>
            </div>
        </>
    )

}


export default Header;