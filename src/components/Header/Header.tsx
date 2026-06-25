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

const sectionServicesMenu: SectionMenuType[]= [
    {title: "Managed Services", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#managed-services"},
    {title: "Commercial", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#commercial"},
    {title: "Cybersecurity", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#cybersecurity"},
    {title: "Residential", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#residential"},
    {title: "Network Management", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#network-management"},
    {title: "Computer Repair", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#computer-repair"},
    {title: "IT Consulting", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#it-consulting"},
    {title: "Custom Computers", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#custom-computers"}
];

const sectionAboutMenu: SectionMenuType[]= [
    {title: "Why Top Notch?", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#why-top-notch"},
    {title: "Meet the Team", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#meet-theteam"},
    {title: "Rates", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#rates"},
    {title: "Frequently Asked Questions", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#frequently-asked-questions"},
    {title: "Privacy Policy", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#privacy-policy"}
];

const sectionContactUsMenu: SectionMenuType[]= [
    {title: "Contact Us", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#contact-us"},
    {title: "Your Community IT Support in Charlottesville", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#it-support"},
    {title: "Your Local IT Consulting Company in Richmond", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#local-it"},
    {title: "Complete Managed IT Services for Washington", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#complete-managed-it"}
];

const sectionSupportMenu: SectionMenuType[]= [
    {title: "I have a support PIN", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#i-have-a-support-pin"},
    {title: "Submit a Request", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#submit-a-request"}
];

const sectionConnectLearnMenu: SectionMenuType[]= [
    {title: "Cases", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#cases"},
    {title: "Soligent", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#soligent"},
    {title: "Weekly Webinar", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#weekly-webinar"},
    {title: "Follow Us On Social Media", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#follow-us-on-social-media"},
    {title: "Blog", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#blog"},
    {title: "23andMe’s $30 Million Settlement: What It Means for Genetic Data Privacy", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#what-it-means"},
    {title: "Newsletter", description: "Lorem ipsum dolor sit amet consectetur. Felis ullamcorper nunc vel tincidunt ultrices.", href: "#newsletter"}
];

function clickMessage(){
    const message= "send me a message on my telegram @ContuctNumber"
    window.alert(message);
}

function Header(){
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isContactUsOpen, setIsContactUsOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const [isConnectLearnOpen, setIsConnectLearnOpen] = useState(false);

    function handleMenuComponent(menuKey: string) {
        if (menuKey == "Services") {
            setIsServicesOpen(true);
        } else {
            setIsServicesOpen(false);
        }
        if (menuKey == "About") {
            setIsAboutOpen(true);
        } else {
            setIsAboutOpen(false);
        }
        if (menuKey == "Contact us"){
            setIsContactUsOpen(true);
        } else {
            setIsContactUsOpen(false);
        }
        if (menuKey == "Support"){
            setIsSupportOpen(true);
        } else {
            setIsSupportOpen(false);
        }
        if (menuKey == "Connect & Learn"){
            setIsConnectLearnOpen(true);
        } else {
            setIsConnectLearnOpen(false);
        }
    }

    function closeAllMenus() {
        setIsServicesOpen(false);
        setIsAboutOpen(false);
        setIsContactUsOpen(false);
        setIsSupportOpen(false);
        setIsConnectLearnOpen(false);
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
                <section style={{ "display": isServicesOpen ? "grid": "none" }} onMouseLeave={closeAllMenus} className={style.particle} >
                    {sectionServicesMenu.map((index)=>
                        <a className={style.part} title={index.title} href={index.href}>
                            <h1>{index.title}</h1>
                            <span className={style.description}>{index.description}</span>
                        </a>
                    )}
                </section>
                <section style={{ "display": isAboutOpen ? "grid": "none" }} onMouseLeave={closeAllMenus} className={style.particle} >
                    {sectionAboutMenu.map((index)=>
                        <a className={style.part} title={index.title} href={index.href}>
                            <h1>{index.title}</h1>
                            <span className={style.description}>{index.description}</span>
                        </a>
                    )}
                </section>
                <section style={{ "display": isContactUsOpen ? "grid": "none" }} onMouseLeave={closeAllMenus} className={style.particle} >
                    {sectionContactUsMenu.map((index)=>
                        <a className={style.part} title={index.title} href={index.href}>
                            <h1>{index.title}</h1>
                            <span className={style.description}>{index.description}</span>
                        </a>
                    )}
                </section>
                <section style={{ "display": isSupportOpen ? "grid": "none" }} onMouseLeave={closeAllMenus} className={style.particle} >
                    {sectionSupportMenu.map((index)=>
                        <a className={style.part} title={index.title} href={index.href}>
                            <h1>{index.title}</h1>
                            <span className={style.description}>{index.description}</span>
                        </a>
                    )}
                </section>
                <section style={{ "display": isConnectLearnOpen ? "grid": "none" }} onMouseLeave={closeAllMenus} className={style.particle} >
                    {sectionConnectLearnMenu.map((index)=>
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