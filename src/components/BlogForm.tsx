import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Loader2 } from "lucide-react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "@/api/blogs"

interface FormInput {
    title: string;
    category: string;
    description: string;
    coverImage: string;
    content: string;
}

function BlogForm() {
    const { register, handleSubmit } = useForm<FormInput>()

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: createBlog,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["blogs"]})
        },
    })

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        
        const formattedData = {
            ...data,
            category: data.category.split(",").map(c => c.trim()),
            date: new Date().toISOString()
        }

        mutation.mutate(formattedData);
    }

    const isLoading = mutation.isPending

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        placeholder="Future of Fintech"
                        {...register("title", { required: "Title is required", maxLength: { value: 60, message: "Title too long" } })}
                    />
                    
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                        id="category"
                        placeholder="Finance, Tech (comma separated)"
                        {...register("category", { required: "Category is required" })}
                    />
                    
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="coverImage">Cover Image URL</Label>
                    <Input
                        id="coverImage"
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        {...register("coverImage")}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="description">Short Description</Label>
                    <Textarea
                        id="description"
                        placeholder="Brief overview of the article..."
                        {...register("description", { required: "Description is required", maxLength: 200 })}
                    />
                    
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        id="content"
                        className="min-h-[200px]"
                        placeholder="Write your story here..."
                        {...register("content", { required: "Content is required" })}
                    />
                    
                </div>
            </div>

            <div className="flex justify-end">
                <Button type="submit" className="bg-[#5148E7] text-white hover:bg-[#433bc2]" >
                    {isLoading && <Loader2 className="animate-spin mr-2" />}
                    Publish Blog
                </Button>
            </div>
        </form>
    )
}

export default BlogForm;
