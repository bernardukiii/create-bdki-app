import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="bg-bdki-darkest my-24 w-full flex flex-col justify-center items-center">
                <div className="w-1/2 p-4 flex flex-col justify-center items-center border-t-4 border-t-bdki-grey">
                    <h1 className=" text-white text-md"><code>Keep it simple, make it possible, make it happen...</code></h1>
                    <div className="w-full h-16 box-border flex justify-center items-center mt-4">
                        <a href="" target="_blank">
                        <Image className="p-2 bdki-dashed-border__github-footer" src="/githubicon.png" height={60} width={65} alt="footer-icon"></Image>
                        </a>
                        <a href="" target="_blank">
                        <Image className="p-2 bdki-dashed-border__linkedin-footer" src="/linkedinlogo.png" height={60} width={80} alt="footer-icon"></Image>
                        </a>
                      </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;