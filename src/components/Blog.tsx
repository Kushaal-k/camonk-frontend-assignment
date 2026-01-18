import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import ShareButton from "./ShareButton";
import { Separator } from "./ui/separator";
import { Avatar, AvatarImage } from "./ui/avatar";
import { ThumbsUp, MessageSquare } from "lucide-react";

function Blog() {
	return (
		<div className='w-full my-6 mx-4'>
			<Card className='pt-0 '>
				<CardHeader className='p-0 pt-0'>
					<div className='h-65 overflow-hidden rounded-t-xl'>
						<img
							className='w-full h-full object-cover'
							src='data:image/jpeg;base64,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'
							alt=''
						/>
					</div>
					<div className='text-xs flex gap-6 px-6 py-4'>
						<div className='text-[#524AEA] font-bold'>FINANCE</div>
						<div className='text-gray-400'>5 min read</div>
					</div>
					<CardTitle className='px-6 pb-4 text-4xl font-extrabold'>
						The Future of Fintech in 2024
					</CardTitle>
					<ShareButton />
				</CardHeader>
				<CardContent>
					<div className='flex flex-col md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] bg-gray-50 border rounded-lg overflow-hidden'>
						<div className='flex flex-col items-center justify-center p-4 text-center'>
							<div className='text-gray-400 text-xs font-bold'>
								CATEGORY
							</div>
							<div className='font-semibold text-sm pt-1'>Fintech & AI</div>
						</div>
						<Separator orientation='vertical' className="hidden md:block" />
						<Separator orientation='horizontal' className="md:hidden" />
						<div className='flex flex-col items-center justify-center p-4 text-center'>
							<div className='text-gray-400 text-xs font-bold'>
								READ TIME
							</div>
							<div className='font-semibold text-sm pt-1'>5 mins</div>
						</div>
						<Separator orientation='vertical' className="hidden md:block" />
						<Separator orientation='horizontal' className="md:hidden" />
						<div className='flex flex-col items-center justify-center p-4 text-center'>
							<div className='text-gray-400 text-xs font-bold'>DATE</div>
							<div className='font-semibold text-sm pt-1'>Oct 24, 2023</div>
						</div>
					</div>

					<CardDescription className='pt-6 '>
						<div className=' text-gray-700 text-sm leading-relaxed'>
							The intersection of finance and technology has never
							been more vibrant. As we look towards 2024, the role
							of the Chartered Accountant is evolving from mere
							bookkeeping to strategic financial analysis powered
							by Al.
						</div>
						<div className='text-xl text-black pt-6 pb-4'>
							The Rise of Automated Accounting
						</div>
						<div className='leading-relaxed'>
							Automation is no longer a buzzword, it's really.
							Routine tasks like data entry, reconcillation, and
							payroll processing are being Automated at an
							unprecedented pace. This shift allows finance
							professionals to focus on higher-value activities
							such as:
							<ul className='list-disc pt-6 pl-4'>
								<li className='pb-2'>
									Strategic financial planning and analysis
									(FP&A)
								</li>
								<li className='pb-2'>
									Risk Management and compliance auditing.
								</li>
								<li className='pb-2'>
									Advisory services or business growth and
									sustainability.
								</li>
							</ul>
						</div>
						<div className='text-lg text-black pt-6 pb-4'>
							Blockchain: Beyond Cryptocurrency
						</div>
						<div className='leading-relaxed text-sm'>
							While Bitcoin grabs the headlines, the underlying
							technology-blockchain-is quietly revolutionizing
							auditing. The immutable ledger provides a "single
							source of truth" that could potentially eliminate
							the need for sampling in audits, allowing for 100%
							verification of transactions.
						</div>
						<Separator orientation='horizontal' className='my-4' />
						<div className='flex flex-row flex-wrap items-center gap-6 md:gap-12'>
							<div className='flex flex-row gap-4 items-center justify-center'>
								<Avatar className='h-10 w-10'>
									<AvatarImage
										src='https://github.com/shadcn.png'
										alt='@shadcn'
									/>
								</Avatar>
								<div className='flex flex-col'>
									<div className='font-semibold text-gray-700 text-sm'>
										Written by Kushaal Kankane
									</div>
									<div className='text-xs'>
										Software Engineer
									</div>
								</div>
							</div>
							<div className="flex gap-4 ml-auto">
								<ThumbsUp/>
                                <MessageSquare />
							</div>
						</div>
					</CardDescription>
				</CardContent>
			</Card>
		</div>
	);
}

export default Blog;
