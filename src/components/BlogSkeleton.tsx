import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function BlogDetailSkeleton() {
	return (
		<div className='w-full my-6 mx-4'>
			<Card>
				<CardContent className='p-6 space-y-4'>
					<Skeleton className='h-4 w-full' />
					<Skeleton className='h-4 w-11/12' />
					<Skeleton className='h-4 w-10/12' />
					<Skeleton className='h-4 w-9/12' />
				</CardContent>
			</Card>
		</div>
	);
}
