import Image from "next/image";
import Logo from '../../assets/images/logo.png'
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

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
                <Link href={'./'}>Home</Link>
                <Link href={'./'}>Features</Link>
                <Link href={'./'}>Community</Link>
                <Link href={'./'}>Blog</Link>
                <Link href={'./'}>Pricing</Link>
                <div className="flex items-center justify-center bg-[#4CAF4F] px-6 py-3 text-white rounded-md ml-4">
                    <Link href={'./'} className="flex items-center">Register Now <span className="ml-4"><FaArrowRight /></span></Link>
                </div>
            </div>
        </main>
    );
}