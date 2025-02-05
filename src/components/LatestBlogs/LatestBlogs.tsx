import { TBlog } from '@/types';
import React from 'react';
import LatestBlogCard from '../ui/LatestBlogCard';

const LatestBlogs = ({ blogs }: { blogs: TBlog[] }) => {
    console.log(blogs);
    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl my-5 text-center font-bold'>
                Latest Blogs From <span className='text-teal-600'>NexaBlog</span>
            </h1>
            <p className='text-center text-gray-400 w-3/5 mx-auto'>
                <i>
                    Dive into the fascinating world of quantum computing, where unlocking
                    unprecedented computational power.
                </i>
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                {
                    blogs.slice(0, 2).map((blog)=><LatestBlogCard key={blog.id}  blog={blog}></LatestBlogCard>)
                }
            </div>
        </div>
    );
};

export default LatestBlogs;