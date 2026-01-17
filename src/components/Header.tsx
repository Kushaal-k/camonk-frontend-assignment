import { GraduationCap } from "lucide-react";
import { Button } from "./ui/button";


function Header() {
	return (
        <>
            <div className="flex justify-between p-4 items-center shadow-md">
                <div className="flex items-center">
                    <div className="h-8 w-8 bg-[#5148E7] flex justify-center items-center rounded-md mr-2">
                        <GraduationCap strokeWidth={2} fill="white" size={24}/>
                    </div>
                    <h1 className="font-header font-bold">CA MONK</h1>
                </div>
                <div >
                    <ul className="gap-6 list-none hidden md:flex">
                        <li>Tools</li>
                        <li>Practice</li>
                        <li>Events</li>
                        <li>Job Board</li>
                        <li>Points</li>
                    </ul>
                </div>
                <div>
                    <Button className="text-white bg-[#5148E7]">Profile</Button>
                </div>
            </div>
        </>
    );
}

export default Header;
