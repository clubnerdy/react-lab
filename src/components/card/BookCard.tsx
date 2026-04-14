import SkillLabel from "../SkillLabel";
import "@/styles/components/(card)/BookCard.css";
import type { DesignBookItem } from "@/types";

type BookCardProps = Omit<DesignBookItem, "id">;

const BookCard = ({
  link,
  imgUrl,
  device,
  title,
  date,
  skills,
}: BookCardProps) => {
  if (link) {
    return (
      <a className="BookCard" href={link} target="_blank">
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
    );
  }

  return (
    <div className="BookCard">
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
    </div>
  );
};

export default BookCard;
