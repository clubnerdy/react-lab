import "@/styles/components/(card)/BlogCard.css";

interface BlogCardProps {
  link: string;
  imgUrl: string;
  date: string;
  title: string;
}

const BlogCard = ({ link, imgUrl, date, title }: BlogCardProps) => {
  return (
    <div className="BlogCard">
      <a href={link} target="_blank" rel="noreferrer">
        <figure>
          <img src={imgUrl} alt={title} />
        </figure>
        <div className="contents">
          <p>{date}</p>
          <h4>{title}</h4>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
