import BlogCard from "@/components/card/BlogCard";
import "./Blog.css";
import { examImage, linkIcon } from "@/assets";

// TODO: RSS 작업 필요

const Blog = () => {
  return (
    <div className="Blog">
      <div className="inner">
        <h3 className="page_title">블로그</h3>
        <div className="blog_list">
          <BlogCard
            link={"/"}
            imgUrl={examImage}
            date={"2026.03.31"}
            title={"[React] 45. New 페이지 기능 구현"}
          />
          <BlogCard
            link={"/"}
            imgUrl={examImage}
            date={"2026.03.31"}
            title={"[React] 45. New 페이지 기능 구현"}
          />
          <BlogCard
            link={"/"}
            imgUrl={examImage}
            date={"2026.03.31"}
            title={"[React] 45. New 페이지 기능 구현"}
          />
          <BlogCard
            link={"/"}
            imgUrl={examImage}
            date={"2026.03.31"}
            title={"[React] 45. New 페이지 기능 구현"}
          />
          <BlogCard
            link={"/"}
            imgUrl={examImage}
            date={"2026.03.31"}
            title={"[React] 45. New 페이지 기능 구현"}
          />
          <BlogCard
            link={"/"}
            imgUrl={examImage}
            date={"2026.03.31"}
            title={"[React] 45. New 페이지 기능 구현"}
          />
        </div>
        <a href="https://inblog.ai/clubnerdy" target="_blank">
          블로그로 이동 <img src={linkIcon} alt="" />
        </a>
      </div>
    </div>
  );
};
export default Blog;
