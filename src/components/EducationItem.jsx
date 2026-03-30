import "./EducationItem.css";

const EducationItem = ({ title, date, state, position, description }) => {
  return (
    <div className="EducationItem">
      <h4 className="title">{title}</h4>
      <div className="description">
        <ul>
          <li>{date}</li>
          <li>{state}</li>
          {position && <li>{position}</li>}
        </ul>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default EducationItem;
