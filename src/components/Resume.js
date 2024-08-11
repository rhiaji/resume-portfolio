import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons' // Import the faHome icon

function Resume() {
    return (
        <div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#0091ff' }} height={40} width={40} />
                        <p className="font-bold text-xl">Education</p>
                    </div>
                    <div className="bg-pink-100 p-3 rounded-lg">
                        <div>
                            <p className="text-base text-gray-500">2014-2021</p>
                            <h5 className="font-bold text-sm">BS in Mechanical Engineering</h5>
                            <p>- Ateneo de Davao University</p>
                            <p>Davao City, Philippines</p>
                        </div>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                        <div>
                            <p className="text-base text-gray-500">2012-Present</p>
                            <h5 className="font-bold text-sm">Self-taught Web Developer</h5>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faBriefcase} style={{ color: '#0091ff' }} height={40} width={40} />
                        <p className="font-bold text-xl">Experience</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                        <div>
                            <p className="text-base text-gray-500">2022-Present</p>
                            <h5 className="font-bold text-sm">Web Developer Freelancer</h5>
                            <p>Davao City, Philippines</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <h2 className="font-bold text-2xl">Tech Stacks:</h2>
                <div className="p-2">
                    <h4 className="font-bold text-lg">Frontend:</h4>
                    <ul className="flex pl-4 gap-2">
                        <li className="bg-pink-100 p-2 rounded-lg text-sm font-semibold">JavaScript</li>
                        <li className="bg-blue-100 p-2 rounded-lg text-sm font-semibold">CSS</li>
                        <li className="bg-pink-100 p-2 rounded-lg text-sm font-semibold">Tailwind</li>
                    </ul>
                    <h4 className="font-bold text-lg">Backend:</h4>
                    <ul className="flex pl-4 gap-2">
                        <li className="bg-blue-100 p-2 rounded-lg text-sm font-semibold">Firebase</li>
                        <li className="bg-pink-100 p-2 rounded-lg text-sm font-semibold">MongoDB</li>
                        <li className="bg-blue-100 p-2 rounded-lg text-sm font-semibold">Node.js</li>
                        <li className="bg-pink-100 p-2 rounded-lg text-sm font-semibold">Express.js</li>
                    </ul>
                    <h4 className="font-bold text-lg">Framework/Library:</h4>
                    <ul className="flex pl-4 gap-2">
                        <li className="bg-pink-100 p-2 rounded-lg text-sm font-semibold">React</li>
                        <li className="bg-blue-100 p-2 rounded-lg text-sm font-semibold">Next.js</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume
