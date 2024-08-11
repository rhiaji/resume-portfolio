import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons' // Import the faHome icon

function Projects() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center">
                <FontAwesomeIcon icon={faBriefcase} style={{ color: '#0091ff' }} height={40} width={40} />
                <p className="font-bold text-xl">Personal Projects</p>
            </div>
            <div className="flex flex-col gap-4 pl-5">
                <div className="bg-pink-100 p-2 rounded-lg">
                    <h3 className="font-bold text-lg">Post Sphere</h3>
                    <p className="text-gray-500">
                        <i>- Next.Js, Node js, Express.Js, MongoDB, Vercel</i>
                    </p>
                    <a href="https://post-sphere-rhiaji.vercel.app/" target="_blank" className="text-sm font-semibold hover:text-blue-400">
                        Visit Website
                    </a>
                </div>

                <div div className="bg-blue-100 p-2 rounded-lg">
                    <h3 className="font-bold text-lg">Terracore Automation</h3>
                    <p className="text-gray-500">
                        <i>- Javascript, Node js, Express.Js, Vercel, Hive blockchain</i>
                    </p>
                </div>

                <div div className="bg-pink-100 p-2 rounded-lg">
                    <h3 className="font-bold text-lg">Mobile Legends Info Website</h3>
                    <p className="text-gray-500">
                        <i>- Next.Js, Node js, Express.Js, MongoDB, Vercel</i>
                    </p>
                    <a href="https://next-mlbb-rhiaji.vercel.app/" target="_blank" className="text-sm font-semibold hover:text-blue-400">
                        Visit Website
                    </a>
                </div>

                <div div className="bg-blue-100 p-2 rounded-lg">
                    <h3 className="font-bold text-lg">Realtime Multiplayer Tic-Tac-Toe</h3>
                    <p className="text-gray-500">
                        <i>- HTML, CSS, Javascript, Node js, Express.Js, Firebase, Vercel</i>
                    </p>
                    <a href="https://rhiaji-tictactoe.vercel.app/" target="_blank" className="text-sm font-semibold hover:text-blue-400">
                        Visit Website
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects
