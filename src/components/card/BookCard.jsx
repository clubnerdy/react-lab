import SkillLabel from "../SkillLabel";
import "@/styles/components/(card)/BookCard.css";

const BookCard = ({ link, imgUrl, device, title, date, skills }) => {
  return (
    <div className="BookCard">
      <a href={link}>
        <figure>
          <img src={imgUrl} alt={title} />
        </figure>
        <div className="container">
          <div className="contents">
            <p className="label">{device}</p>
            <h3 className="title">{title}</h3>
            <p className="date">{date}</p>
          </div>
          <SkillLabel skills={skills} />
        </div>
      </a>
    </div>
  );
};
export default BookCard;
