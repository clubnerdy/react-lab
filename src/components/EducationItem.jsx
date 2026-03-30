import "./EducationItem.css";

const EducationItem = ({ title, date, state, position, description }) => {
  return (
    <div className="EducationItem">
      <h4 className="title">{title}</h4>
      <div className="description">
        <ul>
          <li className="edu_con">{date}</li>
          <li className="edu_con">{state}</li>
          {position && <li className="edu_con">{position}</li>}
        </ul>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default EducationItem;
