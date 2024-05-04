import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row h-5 justify-between items-center">
            <div className="flex flex-col md:flex-row gap-4 items-center md:gap-20">
                <div>
                    <p className="text-white text-xs md:text-sm font-satoshiregular">© Creon 2023. All rights reserved.</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaTelegramPlane className="transition ease-in-out hover:bg-white hover:text-black duration-300 delay-100 flex items-center p-2 w-8 h-8 text-white rounded-full border border-white cursor-pointer" />
                    <FaDiscord className="transition ease-in-out hover:bg-white hover:text-black duration-300 delay-100 flex items-center p-2 w-8 h-8 text-white rounded-full border border-white cursor-pointer" />
                    <FaTwitter className="transition ease-in-out hover:bg-white hover:text-black duration-300 delay-100 flex items-center p-2 w-8 h-8 text-white rounded-full border border-white cursor-pointer" />
                </div>
            </div>
            <div className="mt-3 md:mt-0">
                <p className="text-white font-satoshiregular">Powered by <span className="font-bold">NIFTABLES</span></p>
            </div>
        </footer>
    )
}

export default Footer