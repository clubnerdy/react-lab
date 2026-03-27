import "./BookCard.css";
import { examImage } from "@/assets";

const BookCard = ({ label, title, date, skills }) => {
  return (
    <div className="BookCard">
      <figure>
        <img src={examImage} alt="" />
      </figure>
      <div className="container">
        <div className="contents">
          <p className="label">{label}</p>
          <h3 className="title">{title}</h3>
          <p className="date">{date}</p>
        </div>
        <ul>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BookCard;
