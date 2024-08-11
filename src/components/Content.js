'use client'
import React, { useState } from 'react'
import About from './About'
import Resume from './Resume'
import Projects from './Projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFile, faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Content() {
    const [aboutPage, setAboutPage] = useState(true)
    const [resumePage, setResumePage] = useState(false)
    const [projectsPage, setProjectsPage] = useState(false)
    const [title, setTitle] = useState('About')

    const handleTogglePage = (page) => {
        if (page === 'About') {
            setAboutPage(true)
            setResumePage(false)
            setProjectsPage(false)
            setTitle('About')
        } else if (page === 'Resume') {
            setResumePage(true)
            setAboutPage(false)
            setProjectsPage(false)
            setTitle('Resume')
        } else if (page === 'Projects') {
            setProjectsPage(true)
            setAboutPage(false)
            setResumePage(false)
            setTitle('Projects')
        }
    }

    return (
        <div className="bg-white max-w-3xl rounded-xl flex flex-col p-5 gap-3 ">
            <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold">{title}</h1>
                <span className="bg-blue-500 h-1 w-40 rounded-lg"></span>
                <ul className="flex gap-3">
                    <li
                        className={`w-20 h-20 gap-1 flex flex-col items-center justify-center rounded-lg cursor-pointer 
                            ${aboutPage ? 'bg-blue-500 text-white' : 'bg-slate-100 hover:bg-blue-500 hover:text-white'}`}
                        onClick={() => handleTogglePage('About')}
                    >
                        <FontAwesomeIcon icon={faUser} height={25} width={25} />
                        <p>About</p>
                    </li>
                    <li
                        className={`w-20 h-20 gap-1 flex flex-col items-center justify-center rounded-lg cursor-pointer 
                            ${resumePage ? 'bg-blue-500 text-white' : 'bg-slate-100 hover:bg-blue-500 hover:text-white'}`}
                        onClick={() => handleTogglePage('Resume')}
                    >
                        <FontAwesomeIcon icon={faFile} height={25} width={25} />
                        <p>Resume</p>
                    </li>
                    <li
                        className={`w-20 h-20 gap-1 flex flex-col items-center justify-center rounded-lg cursor-pointer 
                            ${projectsPage ? 'bg-blue-500 text-white' : 'bg-slate-100 hover:bg-blue-500 hover:text-white'}`}
                        onClick={() => handleTogglePage('Projects')}
                    >
                        <FontAwesomeIcon icon={faBriefcase} height={25} width={25} />
                        <p>Projects</p>
                    </li>
                </ul>
            </div>
            {aboutPage && <About />}
            {resumePage && <Resume />}
            {projectsPage && <Projects />}
        </div>
    )
}

export default Content
