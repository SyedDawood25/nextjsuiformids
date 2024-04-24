import Image from "next/image";
import TitleImage from '../../assets/images/titleimage.svg'
import Dots from '../../assets/images/dots.svg'

export const Title = () => {
    return (
        <main className="flex flex-col bg-[#F5F7FA] px-32">
            <div className="flex items-center pt-32 pb-28">
                <div className="flex flex-col gap-y-6 w-1/2">
                    <div className="text-6xl font-bold leading-[53px] text-[#4D4D4D]">Lessons and insights</div>
                    <div className="text-6xl font-bold leading-[53px] text-[#4CAF4F]">from 8 years</div>
                    <div className="text-normal leading-[18px] text-[#717171] my-4">
                        Where to grow your business as a photographer: site or social media?
                    </div>
                    <div className="bg-[#4CAF4F] px-6 py-3 text-white rounded-md w-fit">
                        Register
                    </div>
                </div>

                <div className="flex w-1/2 justify-end">
                    <Image 
                    src={TitleImage}
                    alt="TitleImage"
                    className="w-[400px]"/>
                </div>
            </div>

            <div className="flex justify-center pb-4">
                <Image 
                src={Dots}
                alt="Dots"/>
            </div>
        </main>
    );
}