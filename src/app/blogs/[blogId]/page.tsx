import BlogDetails from '@/components/ui/BlogDetails';
import { TBlog } from '@/types';
import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:5000/blogs");
    const blogs = await res.json();
    return blogs.slice(0, 3).map((blog: TBlog) => ({
        blogId: `${blog.id}`
    }))
}

const SingleBlog = async ({ params }: { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params;
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
    const blog = await res.json();
    console.log(blog);
    return (
        <div>
            <BlogDetails blog={blog}></BlogDetails>
        </div>
    );
};

export default SingleBlog;