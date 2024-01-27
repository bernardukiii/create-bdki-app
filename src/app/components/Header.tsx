import React from "react"
import "../custom-styles/styles-misc.scss"

const Header = () => {
    return (
        <>
            <header className="sticky top-0 w-full z-10 flex justify-center items-center text-white font-semibold text-sm md:text-base lg:text-base border-b-2 border-b-bdki-grey bdki-glassify">
                <div className="flex justify-center items-center w-1/3">
                    <button className="flex-grow p-2 hover:text-bdki-lighter-grey focus:text-lighter-grey bdki-cursor">ITEM 1</button>
                    <button className="flex-grow p-2 hover:text-bdki-lighter-grey focus:text-lighter-grey bdki-cursor">ITEM 2</button>
                    <button className="flex-grow p-2 hover:text-bdki-lighter-grey focus:text-lighter-grey bdki-cursor">ITEM 3</button>
                    <button className="flex-grow p-2 hover:text-bdki-lighter-grey focus:text-lighter-grey bdki-cursor">ITEM 4</button>
                    <button className="flex-grow p-2 hover:text-bdki-lighter-grey focus:text-lighter-grey bdki-cursor">ITEM 5</button>
                </div>
            </header>
        </>
    )
}

export default Header