import LatestArticleCard from "./LatestArticleCard";

function LatestArticle() {
    return (
        <div className="flex flex-col" >
            <div className="text-xl font-bold ml-4 my-6">
                Latest Articles
            </div>
            <div className="m-4 flex md:flex-col">
                <LatestArticleCard />
                <LatestArticleCard />
            </div>
        </div>
    )
}

export default LatestArticle