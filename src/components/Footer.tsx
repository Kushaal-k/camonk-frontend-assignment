import { GraduationCap } from "lucide-react"
import { Separator } from "./ui/separator"

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-16 gap-y-6 p-6">
                <div className="flex flex-col gap-6">
                    <div className="flex gap-2 items-center">
                        <div className="bg-white text-black rounded-sm p-1">
                            <GraduationCap />
                        </div>
                        <div className="font-bold text-white">CA MONK</div>
                    </div>
                    <div className="text-sm text-wrap">Empowering the next generation of financial leaders with tools, community and knowledge.</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-gray-500 font-semibold text-sm">RESOURCES</div>
                    <ul className="text-sm space-y-1">
                        <li>Blog</li>
                        <li>Webinars</li>
                        <li>Case Studies</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-gray-500 font-semibold text-sm">PLATFORM</div>
                    <ul className="text-sm space-y-1">
                        <li>Job Board</li>
                        <li>Practice Tests</li>
                        <li>Mentorship</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-gray-500 font-semibold text-sm">CONNECT</div>
                    <ul className="text-sm space-y-1">
                        <li>LinkedIn</li>
                        <li>X (Twitter) </li>
                        <li>Instagram</li>
                    </ul>
                </div>

                <Separator className="w-full bg-gray-700 col-span-1 md:col-span-2 lg:col-span-4" />
                <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="text-sm">2024 CA Monk. All rights reserved.</div>

                <div className="flex gap-6 text-sm text-gray-400">
                    <div className="hover:text-white cursor-pointer">Privacy Policy</div>
                    <div className="hover:text-white cursor-pointer">Terms of Service</div>
                </div>
                </div>
            </div>
            
            
        </footer>
    )
}

export default Footer