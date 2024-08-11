import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreen, faEnvelopeOpenText, faLocationDot, faCalendarDays, faDownload } from '@fortawesome/free-solid-svg-icons' // Import the faHome icon

function Profile() {
    return (
        <div className="bg-white max-w-sm rounded-xl flex flex-col items-center p-5 gap-3">
            <div className="flex flex-col text-center gap-2">
                <Image src={'/mypic.png'} height={200} width={200} className="rounded-xl" />
                <h1 className="text-2xl font-bold">Dave Mariano</h1>
                <div className="bg-slate-100 rounded-lg">
                    <p>Web Developer</p>
                </div>

                <div className="flex gap-2 justify-center">
                    <div className="bg-slate-100 p-2 rounded-md ">
                        <a href="https://www.facebook.com/dave.mariano.589/" target="_blank">
                            <Image src={'facebook.svg'} height={15} width={15} />
                        </a>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-md ">
                        <a href="#">
                            <Image src={'instagram.svg'} height={20} width={20} />
                        </a>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-md ">
                        <a href="https://www.linkedin.com/in/mrdavepmariano/" target="_blank">
                            <Image src={'linkedin-in.svg'} height={20} width={20} />
                        </a>
                    </div>
                    <div className="bg-slate-100 p-2 rounded-md ">
                        <a href="https://github.com/rhiaji" target="_blank">
                            <Image src={'github.svg'} height={20} width={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 p-2 rounded-md ">
                <div className="flex items-center p-2 border-b-2 gap-2">
                    <div className="p-2 rounded-md bg-white">
                        <FontAwesomeIcon icon={faMobileScreen} style={{ color: '#e534df' }} height={25} width={25} />
                    </div>
                    <div>
                        <p className="text-sm">Phone</p>
                        <p>+639563656500</p>
                    </div>
                </div>
                <div className="flex items-center p-2 border-b-2 gap-2">
                    <div className="p-2 rounded-md bg-white">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} style={{ color: '#63E6BE' }} height={25} width={25} />
                    </div>
                    <div>
                        <p className="text-sm">Email</p>
                        <p>mrdavepmariano@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center p-2 border-b-2 gap-2">
                    <div className="p-2 rounded-md bg-white">
                        <FontAwesomeIcon icon={faLocationDot} style={{ color: '#df304a' }} height={25} width={25} />
                    </div>
                    <div>
                        <p className="text-sm">Location</p>
                        <p>Davao City, Philippines</p>
                    </div>
                </div>
                <div className="flex items-center p-2 gap-2">
                    <div className="p-2 rounded-md bg-white">
                        <FontAwesomeIcon icon={faCalendarDays} style={{ color: '#B197FC' }} height={25} width={25} />
                    </div>
                    <div>
                        <p className="text-sm">Birthday</p>
                        <p>April 15, 1997</p>
                    </div>
                </div>
            </div>
            <a
                href="/Resume_DaveMariano.pdf"
                download
                className="bg-blue-500 p-4 rounded-xl hover:bg-red-500 hover:text-white cursor-pointer flex items-center gap-2"
            >
                <FontAwesomeIcon icon={faDownload} style={{ color: '#ffffff' }} height={20} width={20} />
                Download CV
            </a>
        </div>
    )
}

export default Profile
