import LatestArticleCard from "./LatestArticleCard";
import { getBlogs, type Blog } from "../api/blogs.ts";
import BlogCardSkeleton from "./BlogCardSkeleton.tsx";
import { useQuery } from "@tanstack/react-query";

function LatestArticle() {
	const { data: blogs, isLoading, isError, error } = useQuery<Blog[]>({
        queryKey: ["blogs"],
        queryFn: getBlogs
    })

	const latestBlogs: Blog[] = blogs?.slice().sort((a:Blog, b:Blog) => (
        new Date(b.date).getTime() - new Date(a.date).getTime()
    ))
    .slice(0,5) ?? [];
	

    if (isLoading) {
    return (
        <>
        {Array.from({ length: 5 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
        ))}
        </>
    );
    }

	return (
		<div className='flex flex-col'>
			<div className='text-xl font-bold ml-4 my-6'>Latest Articles</div>
			<div className='m-4 flex flex-col'>
                {latestBlogs.map((blog) => (
                    <LatestArticleCard key={blog.id} blog={blog}/>
                ))}
			</div>
		</div>
	);
}

export default LatestArticle;
