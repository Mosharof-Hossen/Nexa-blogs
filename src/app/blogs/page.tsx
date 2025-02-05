import BlogCard from '@/components/ui/BlogCard';
import { TBlog } from '@/types';
import React from 'react';

export const metadata = {
    title: "NexaBlog | Blogs"
}

const BlogsPage = async () => {
    const res = await fetch("http://localhost:5000/blogs", {
        cache: "no-cache"
    });
    const blogs = await res.json();
    return (
        <div className='w-[90%] mx-auto space-y-5'>
            <div>
                <h1 className='text-3xl my-5 text-center font-bold'>
                    Explore All <span className='text-teal-600'>Blogs</span>
                </h1>
                <p className='text-center text-gray-400 w-3/5 mx-auto'>
                    <i>
                        Dive into the fascinating world of quantum computing, where unlocking
                        unprecedented computational power.
                    </i>
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    blogs.map((blog: TBlog) => <BlogCard blog={blog} key={blog.id}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;