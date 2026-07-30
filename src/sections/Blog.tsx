import BlogCard from "@/components/card/BlogCard";
import "@/styles/sections/Blog.css";
import { examImage, linkIcon } from "@/assets";

// TODO: RSS 작업 필요

const Blog = () => {
  return (
    <section id="Blog" className="Blog">
      <div className="inner">
        <h3 className="page_title">블로그</h3>
        <div className="blog_list">
          <BlogCard link={"/"} imgUrl={examImage} date={""} title={"준비중"} />
          <BlogCard link={"/"} imgUrl={examImage} date={""} title={"준비중"} />
          <BlogCard link={"/"} imgUrl={examImage} date={""} title={"준비중"} />
          <BlogCard link={"/"} imgUrl={examImage} date={""} title={"준비중"} />
          <BlogCard link={"/"} imgUrl={examImage} date={""} title={"준비중"} />
          <BlogCard link={"/"} imgUrl={examImage} date={""} title={"준비중"} />
        </div>
        <a href="https://inblog.ai/clubnerdy" target="_blank" rel="noreferrer">
          블로그로 이동 <img src={linkIcon} alt="" />
        </a>
      </div>
    </section>
  );
};

export default Blog;
