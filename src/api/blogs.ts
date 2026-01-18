export type Blog = {
	id: number;
	title: string;
	category: string[];
	description: string;
	date: string;
	coverImage: string;
	content: string;
};

type CreateBlog = {
	title: string;
	category: string[];
	description: string;
	content: string;
	coverImage: string;
};

const SERVER_URL = "http://localhost:3001";

export async function getBlogs(): Promise<Blog[]> {
	const res = await fetch(`${SERVER_URL}/blogs`);
	if (!res.ok) {
		throw new Error(`Failed to fetch blogs: ${res.status}`);
	}

	const data = (await res.json()) as Blog[];

	return data;
}

export async function getBlogById(id: number): Promise<Blog> {
	const res = await fetch(`${SERVER_URL}/blogs/${id}`);

	if (!res.ok) {
		throw new Error(`Failed to fetch blog: ${res.status}`);
	}

	const data = (await res.json()) as Blog;

	return data;
}

export async function createBlog(blog: CreateBlog): Promise<Blog> {
	const res = await fetch(`${SERVER_URL}/blogs`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(blog),
	});

	if (!res.ok) {
		throw new Error(`Failed to create new blog: ${res.status}`);
	}

	const data = (await res.json()) as Blog;

	return data;
}
