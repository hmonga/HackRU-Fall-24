'use client'

import { useState } from "react";
import Link from "next/link";
import Home from "@/components/icons/home";
import { Button } from "./ui/button";


export default function Menubar() {
    const [toggleCollapse, setToggleCollapse] = useState(true);
    const onMouseOver = () => setToggleCollapse(!toggleCollapse);

    return (
        <div
            className={
                "w-screen bg-slate-50 transition duration-1000 px-4 pt-8 pb-4 flex justify-between flex-col fixed z-50 h-" + (toggleCollapse ? 64 : 20) 
            }
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOver}
            style={{ transition: "height 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
            <div className="flex justify-between items-center h-full">
                <ul className="md:flex gap-x-6 text-black">
                    <li>
                        <Link href="/">
                            <Home/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/memorycards">
                            <p className='transition ease-in-out hover:scale-110 active:scale-90 duration-300'>Memory Cards</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dailyreminders">
                            <p className='transition ease-in-out hover:scale-110 active:scale-90 duration-300'>Daily Reminders</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/moodtracker">
                            <p className='transition ease-in-out hover:scale-110 active:scale-90 duration-300'>Mood Tracker</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/memoryplaylists">
                            <p className='transition ease-in-out hover:scale-110 active:scale-90 duration-300'>Memory Playlists</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/caregiveraccess">
                            <p className='transition ease-in-out hover:scale-110 active:scale-90 duration-300'>Caregiver access</p>
                        </Link>
                    </li>
                    <li className='float-right'>
                        <Button>Sign In</Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}