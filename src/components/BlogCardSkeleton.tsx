import { Skeleton } from "./ui/skeleton";

function BlogCardSkeleton() {
	return (
		<div className='space-y-3 p-4'>
			<Skeleton className='h-4 w-24' /> 
			<Skeleton className='h-6 w-3/4' /> 
			<Skeleton className='h-4 w-full' /> 
			<Skeleton className='h-4 w-2/3' />
		</div>
	);
}

export default BlogCardSkeleton;
