import { GraduationCap, SquarePen, User } from "lucide-react";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";
import BlogForm from "./BlogForm";

function Header() {
	return (
		<>
			<div className='flex justify-between p-4 items-center shadow-md'>
				<div className='flex items-center'>
					<div className='h-8 w-8 bg-[#5148E7] flex justify-center items-center rounded-md mr-2'>
						<GraduationCap strokeWidth={2} fill='white' size={24} />
					</div>
					<h1 className='font-header font-bold'>CA MONK</h1>
				</div>
				<div>
					<ul className='gap-6 list-none hidden md:flex'>
						<li>Tools</li>
						<li>Practice</li>
						<li>Events</li>
						<li>Job Board</li>
						<li>Points</li>
					</ul>
				</div>
				<div>
					<div className='flex gap-4 items-center'>
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
				</div>
			</div>
		</>
	);
}

export default Header;
