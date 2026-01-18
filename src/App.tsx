import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import MainLayout from "./pages/MainLayout";
function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route element={<MainLayout />}>
          <Route path="/" element={<BlogCard/>} />
          <Route path="/blogs/:blogId" element={<BlogCard/>} />
        </Route>
			</Routes>
		</>
	);
}

export default App;
