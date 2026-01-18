import { TrendingUp  } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Badge } from "./ui/badge"
import type { Blog } from "../api/blogs"
import { formatDistanceToNow } from "date-fns";

function LatestArticleCard({blog}: {blog : Blog}) {
    return (
        <div className="mb-4">
            <Card className="w-full border-l-4 border-l-[#524AEA] gap-2">
                <CardHeader>
                    <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2 text-[#5249E2]">
                            <TrendingUp size={15}/>
                            <div>{blog.category?.[0]}</div>
                        </div>
                        <div className="text-gray-400">{formatDistanceToNow(new Date(blog.date),{addSuffix: true})}</div>
                    </div>
                    <CardTitle className="font-bold text-xl">{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-xs" >{blog.description}</CardDescription>
                    <Badge className="text-[#524AEA] bg-[#D9D5FF] mt-4">Featured</Badge>
                </CardContent>
            </Card>
        </div>
    )
}

export default LatestArticleCard