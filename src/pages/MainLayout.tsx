import HeroComp from "@/components/HeroComp";
import LatestArticle from "@/components/LatestArticle";
import { Outlet } from "react-router-dom";

function MainLayout() {
	return (
		<>
			<HeroComp />
			<div className='flex flex-col-reverse md:flex-row max-w-7xl mx-auto px-4 md:px-0'>
				<div className='md:w-1/3 lg:w-1/4'>
					<LatestArticle />
				</div>

				<div className='md:w-2/3 lg:w-3/4'>
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default MainLayout;
