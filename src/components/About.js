import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faRobot } from '@fortawesome/free-solid-svg-icons' // Import the faHome icon

function About() {
    return (
        <div className="gap-4">
            <div>
                <p className="text-gray-700">
                    Hello, I'm Dave Mariano, a dedicated and self-taught web developer with a strong commitment to continuous learning and web
                    application development. Despite being a registered mechanical engineer, I am deeply passionate about honing my programming skills
                    and contributing to the world of web development.
                </p>
            </div>
            <div className="mt-2 mb-2">
                <h2 className="font-bold text-xl">What I do!</h2>
            </div>
            <div className="flex justify-center gap-5">
                <div className="bg-pink-100 w-80 p-4 flex justify-start">
                    <div>
                        <FontAwesomeIcon icon={faCode} style={{ color: '#0091ff' }} height={40} width={40} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Web Development</h3>
                        <p className="text-gray-500">
                            Specializing in full-stack website development, proficient in HTML, CSS, JavaScript, and the MERN stack, ensuring dynamic
                            and interactive user experiences.
                        </p>
                    </div>
                </div>
                <div className="bg-blue-100 w-80 p-4 flex justify-start">
                    <div>
                        <FontAwesomeIcon icon={faRobot} style={{ color: '#dda323' }} height={40} width={40} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Automation</h3>
                        <p className="text-gray-500">
                            Proficient in utilizing Node.js and Express for automation tasks, streamlining processes and enhancing efficiency in
                            various domains.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
