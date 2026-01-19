import LatestArticleCard from "./LatestArticleCard";
import { getBlogs, type Blog } from "../api/blogs.ts";
import BlogCardSkeleton from "./BlogCardSkeleton.tsx";
import { useQuery } from "@tanstack/react-query";
import { ScrollArea, ScrollBar } from "./ui/scroll-area.tsx";

function LatestArticle() {
	const { data: blogs, isLoading, isError, error } = useQuery<Blog[]>({
        queryKey: ["blogs"],
        queryFn: getBlogs
    })

	const latestBlogs: Blog[] = blogs?.slice().sort((a:Blog, b:Blog) => (
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )) ?? []
	

    if (isLoading) {
    return (
        <>
        {Array.from({ length: 5 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
        ))}
        </>
    );
    }

    if(isError){
        return (
            <div className="bg-red-300 text-red-700 rounded-2xl p-4 mt-4">Error while loading all the posts.</div>
        )
    }

	return (
        <div className="flex flex-col p-4 md:p-0 md:pl-4 md:mr-8 min-h-0">
            <div className="text-xl font-bold my-6">Latest Articles</div>

            <ScrollArea className="h-[100vh] pr-3">
            <div className="flex flex-col gap-4">
                {latestBlogs.map((blog) => (
                <LatestArticleCard key={blog.id} blog={blog} />
                ))}
            </div>

            <ScrollBar orientation="vertical" />
            </ScrollArea>
        </div>
        );

}

export default LatestArticle;
