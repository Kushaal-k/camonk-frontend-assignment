import { Button } from "./ui/button"
import { Share2 } from "lucide-react"

function ShareButton() {
    return (
        <Button className="text-white bg-[#524AEA] flex w-fit self-startitems-center ml-6 px-8">
            <Share2 />
            <div className="items-center">Share Article</div>
        </Button>
    )
}

export default ShareButton