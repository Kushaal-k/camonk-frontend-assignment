import { useParams } from "react-router-dom";
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
import { ThumbsUp, MessageSquare, Circle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBlogById, type Blog } from "../api/blogs";
import BlogCardSkeleton from "./BlogCardSkeleton";

type BlogCardProps = {
	id?: number;
	initialBlog?: Blog;
}

function BlogCard({ id: propId, initialBlog }: BlogCardProps = {}) {
	const { blogId } = useParams<{ blogId: string }>();

	const id = propId ?? Number(blogId);

	const { data: fetchedBlog, isLoading } = useQuery({
		queryKey: ["blog", id],
		queryFn: () => getBlogById(id),
		enabled: !initialBlog && Number.isFinite(id),
	})

	const blog = initialBlog ?? fetchedBlog;

	if (isLoading && !blog) return (
		<BlogCardSkeleton />
	)

	return (
		<div className='w-full my-6 mx-4'>
			<Card className='pt-0 '>
				<CardHeader className='p-0 pt-0'>
					<div className='h-65 overflow-hidden rounded-t-xl'>
						<img
							className='w-full h-full object-cover'
							src={blog?.coverImage}
							alt=''
						/>
					</div>
					<div className='text-xs flex gap-3 px-6 py-4 items-center'>
						<div className='text-[#524AEA] font-bold'>{blog?.category?.[0]}</div>
						<Circle size={6} className="text-gray-400" />
						<div className='text-gray-400'>5 min read</div>
					</div>
					<CardTitle className='px-6 pb-4 text-4xl font-extrabold'>
						{blog?.title.toUpperCase()}
					</CardTitle>
					<ShareButton />
				</CardHeader>
				<CardContent>
					<div className='flex flex-col md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] bg-gray-50 border rounded-lg overflow-hidden'>
						<div className='flex flex-col items-center justify-center p-4 text-center'>
							<div className='text-gray-400 text-xs font-bold'>
								CATEGORY
							</div>
							<div className='font-semibold text-sm pt-1'>{blog?.category.join(' & ')}</div>
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
							<div className='font-semibold text-sm pt-1'>{blog && new Date(blog?.date).toLocaleDateString()}</div>
						</div>
					</div>

					<CardDescription className='pt-6 '>
						<div className=' text-gray-700 text-sm leading-relaxed'>
							{blog?.description}
						</div>

						<div className='leading-relaxed'>
							{blog?.content}
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
								<ThumbsUp />
								<MessageSquare />
							</div>
						</div>
					</CardDescription>
				</CardContent>
			</Card>
		</div>
	);
}

export default BlogCard;
