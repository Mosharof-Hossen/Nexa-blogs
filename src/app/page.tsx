import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";

export default async function Home () {
  const res = await fetch("http://localhost:5000/blogs",{
    next:{
      revalidate:30,
    }
  })

  const blogs = await res.json();
  console.log(blogs);
  return (
    <div className="my-10">
      <LatestBlogs blogs={blogs}></LatestBlogs>
    </div>
  );
}
