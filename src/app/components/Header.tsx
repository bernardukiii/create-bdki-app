import React from "react";
// import "../styles/header-style.scss"

// interface HeaderProps {
//     introRef: any,
//     projectsRef: any,
//     aboutRef: any,
//     stackRef: any,
//     contactRef: any
// }

const Header:React.FC<HeaderProps> = () => {

    const scrollToSection = (ref: any) => {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    };

    return (
        <>
            <header className="sticky top-0 w-full z-10 bg-bdki-darkest flex justify-center items-center text-white font-semibold text-sm md:text-base lg:text-base border-b-2 border-b-bdki-grey bdki-glassify">
                <button className="p-2 hover:text-lighter-grey focus:text-lighter-grey bdki-cursor">ITEM 1</button>
                <button  className="p-2 hover:text-lighter-grey focus:text-lighter-grey bdki-cursor">ITEM 2</button>
                <button className="p-2 hover:text-lighter-grey focus:text-lighter-grey bdki-cursor">ITEM 3</button>
                <button className="p-2 hover:text-lighter-grey focus:text-lighter-grey bdki-cursor">ITEM 4</button>
                <button  className="p-2 hover:text-lighter-grey focus:text-lighter-grey bdki-cursor">ITEM 5</button>
            </header>
        </>
    )
}

export default Header;