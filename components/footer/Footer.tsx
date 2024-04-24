import Image from 'next/image'
import Logo1 from '../../assets/images/logo1.svg'
import Logo2 from '../../assets/images/logo2.svg'
import Logo3 from '../../assets/images/logo3.svg'
import Logo4 from '../../assets/images/logo4.svg'
import Logo5 from '../../assets/images/logo5.svg'
import Logo6 from '../../assets/images/logo6.svg'
import Community1 from '../../assets/images/community1.svg'
import Community2 from '../../assets/images/community2.svg'
import Community3 from '../../assets/images/community3.svg'

export const Footer = () => {
    return (
        <main className="flex flex-col items-center gap-y-20 py-10">
            <div className="flex flex-col w-full gap-y-3 items-center">
                <div className="text-4xl text-center font-semibold text-[#4D4D4D]">Our Clients</div>
                <div className="text-normal text-center text-[#4D4D4D]">
                    We have been working with some Fortune 500+ clients
                </div>
                <div className="flex w-full items-center justify-evenly mt-6">
                    <Image src={Logo1} alt='Logo1' width={40}/>
                    <Image src={Logo2} alt='Logo2' width={40}/>
                    <Image src={Logo3} alt='Logo3' width={40}/>
                    <Image src={Logo4} alt='Logo4' width={40}/>
                    <Image src={Logo5} alt='Logo5' width={40}/>
                    <Image src={Logo6} alt='Logo6' width={40}/>
                    <Image src={Logo1} alt='Logo1' width={40}/>
                </div>
            </div>

            <div className="flex flex-col w-full gap-y-3 items-center">
                <div className="text-4xl text-center font-semibold text-[#4D4D4D]">
                    Manage your entire community in a single system
                </div>
                <div className="text-normal text-center text-[#4D4D4D]">
                    Who is Nextcent suitable for?
                </div>

                <div className='flex justify-evenly items-center py-10'>
                    <div className='flex flex-col items-center justify-center p-6 max-w-[500px]'>
                        <Image src={Community3} alt='Community3' width={60}/>
                        <div className="text-3xl text-center font-semibold text-[#4D4D4D] mt-4">
                            Member Organisations
                        </div>
                        <div className="text-normal text-center text-[#4D4D4D] mt-2">
                            Our membership management software provides full automation of membership renewals and payments
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center p-6 max-w-[500px]'>
                        <Image src={Community2} alt='Community2' width={60}/>
                        <div className="text-3xl text-center font-semibold text-[#4D4D4D] mt-4">
                            National Associations
                        </div>
                        <div className="text-normal text-center text-[#4D4D4D] mt-2">
                            Our membership management software provides full automation of membership renewals and payments
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center p-6 max-w-[500px]'>
                        <Image src={Community1} alt='Community1' width={60}/>
                        <div className="text-3xl text-center font-semibold text-[#4D4D4D] mt-4">
                            Clubs And Groups
                        </div>
                        <div className="text-normal text-center text-[#4D4D4D] mt-2">
                            Our membership management software provides full automation of membership renewals and payments
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}