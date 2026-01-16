import { TrendingUp  } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Badge } from "./ui/badge"

function LatestArticleCard() {
    return (
        <div className="mb-4">
            <Card className="w-87.5 border-l-4 border-l-[#524AEA] gap-2">
                <CardHeader>
                    <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-2 text-[#5249E2]">
                            <TrendingUp size={15}/>
                            <div>FINANCE</div>
                        </div>
                        <div className="text-gray-400">2 days ago</div>
                    </div>
                    <CardTitle className="font-bold text-xl">Future of Fintech</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-xs" >Exploring how AI and blockchain are transforming financial services and what it means for the future of banking.</CardDescription>
                    <Badge className="text-[#524AEA] bg-[#D9D5FF] mt-4">Featured</Badge>
                </CardContent>
            </Card>
        </div>
    )
}

export default LatestArticleCard