import { useQuery } from "@tanstack/react-query";
import { getBlogs, type Blog } from "../api/blogs";
import BlogCard from "../components/BlogCard";
import BlogCardSkeleton from "../components/BlogCardSkeleton";

function Home() {
    const { data: blogs, isLoading, isError } = useQuery<Blog[]>({
        queryKey: ["blogs"],
        queryFn: getBlogs
    });

    if (isLoading) {
        return <BlogCardSkeleton />;
    }

    if (isError || !blogs) {
        return <div className="text-red-500 p-4">Error loading blogs.</div>;
    }
    
    const latestBlog = blogs.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

    if (!latestBlog) {
        return <div className="p-4">No blogs found.</div>;
    }

    return (
        <BlogCard initialBlog={latestBlog} />
    );
}

export default Home;
