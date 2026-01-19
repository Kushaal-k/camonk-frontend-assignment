import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogCard from "./components/BlogCard";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/blogs/:blogId" element={<BlogCard />} />
				</Route>
			</Routes>

			<Footer />
		</>
	);
}

export default App;
