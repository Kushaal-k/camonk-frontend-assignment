import { Button } from "./ui/button"
import { Share2 } from "lucide-react"

function ShareButton() {
    return (
        <Button className="text-white bg-[#524AEA] flex w-fit self-start items-center ml-6 px-8 hover:text-indigo-600 hover:bg-indigo-50">
            <Share2 />
            <div className="items-center">Share Article</div>
        </Button>
    )
}

export default ShareButton