import Image from "next/image";
import Logo from '../../assets/images/logo.png'
import { FaArrowRight } from "react-icons/fa6";

export const NavBar = () => {
    return (
        <main className="flex py-6 px-32 justify-between">
            <div className="flex gap-x-2 items-center">
                <Image
                    src={Logo}
                    alt="Logo" />
                <div className="text-2xl font-bold">Nextcent</div>
            </div>

            <div className="flex gap-x-6 items-center justify-center">
                <div>Home</div>
                <div>Features</div>
                <div>Community</div>
                <div>Blog</div>
                <div>Pricing</div>
                <div className="flex items-center justify-center bg-[#4CAF4F] px-6 py-3 text-white rounded-md ml-4">Register Now <span className="ml-4"><FaArrowRight /></span></div>
            </div>
        </main>
    );
}