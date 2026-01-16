import LatestArticleCard from "./LatestArticleCard";

function LatestArticle() {
    return (
        <div>
            <div className="text-xl font-bold ml-4 my-6">
                Latest Articles
            </div>
            <div className="m-4">
                <LatestArticleCard />
                <LatestArticleCard />
            </div>
        </div>
    )
}

export default LatestArticle