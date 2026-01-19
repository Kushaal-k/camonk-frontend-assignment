import { GraduationCap, SquarePen, User, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";
import BlogForm from "./BlogForm";
import { useState } from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<>
			<div className='flex justify-between p-4 items-center shadow-md relative'>
				<div className='flex items-center'>
					<div className='h-8 w-8 bg-[#5148E7] flex justify-center items-center rounded-md mr-2'>
						<GraduationCap strokeWidth={2} fill='white' size={24} />
					</div>
					<h1 className='font-header font-bold'>CA MONK</h1>
				</div>
				<div>
					<ul className='gap-6 list-none hidden md:flex'>
						<li className="cursor-pointer hover:text-[#5148E7]">Tools</li>
						<li className="cursor-pointer hover:text-[#5148E7]">Practice</li>
						<li className="cursor-pointer hover:text-[#5148E7]">Events</li>
						<li className="cursor-pointer hover:text-[#5148E7]">Job Board</li>
						<li className="cursor-pointer hover:text-[#5148E7]">Points</li>
					</ul>
				</div>
				<div className="flex gap-4 items-center">
					<div className='hidden md:flex gap-4 items-center'>
						<div className='flex gap-4 items-center'>
							<Dialog>
								<DialogTrigger asChild>
									<Button className='gap-2 bg-[#5148E7] text-white hover:text-indigo-600 hover:bg-indigo-50'>
										<SquarePen size={20} />
										Write
									</Button>
								</DialogTrigger>

								<DialogContent className='max-w-2xl'>
									<DialogHeader>
										<DialogTitle>Add New Blog</DialogTitle>
									</DialogHeader>

									<BlogForm />
								</DialogContent>
							</Dialog>

							<Button className='text-white bg-[#5148E7] hover:text-indigo-600 hover:bg-indigo-50'>
								<User size={20} />
								Profile
							</Button>
						</div>
					</div>
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu size={24} />
                    </button>
				</div>
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50 flex flex-col p-4 gap-4">
                        <ul className='flex flex-col gap-4 list-none'>
                            <li className="cursor-pointer hover:text-[#5148E7]">Tools</li>
                            <li className="cursor-pointer hover:text-[#5148E7]">Practice</li>
                            <li className="cursor-pointer hover:text-[#5148E7]">Events</li>
                            <li className="cursor-pointer hover:text-[#5148E7]">Job Board</li>
                            <li className="cursor-pointer hover:text-[#5148E7]">Points</li>
                        </ul>
                        <div className="flex flex-col gap-4">
                             <Dialog>
								<DialogTrigger asChild>
									<Button className='gap-2 bg-[#5148E7] text-white hover:text-indigo-600 hover:bg-indigo-50 w-full justify-start'>
										<SquarePen size={20} />
										Write
									</Button>
								</DialogTrigger>

								<DialogContent className='max-w-2xl'>
									<DialogHeader>
										<DialogTitle>Add New Blog</DialogTitle>
									</DialogHeader>

									<BlogForm />
								</DialogContent>
							</Dialog>

							<Button className='text-white bg-[#5148E7] hover:text-indigo-600 hover:bg-indigo-50 w-full justify-start'>
								<User size={20} />
								Profile
							</Button>
                        </div>
                    </div>
                )}
			</div>
		</>
	);
}

export default Header;
