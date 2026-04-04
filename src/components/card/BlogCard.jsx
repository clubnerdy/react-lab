import "@/styles/components/(card)/BlogCard.css";

const BlogCard = ({ link, imgUrl, date, title }) => {
  return (
    <div className="BlogCard">
      <a href={link} target="_blank">
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
