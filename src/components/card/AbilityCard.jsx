import "./AbilityCard.css";

const AbilityCard = ({ imgUrl, title, description }) => {
  return (
    <div className="AbilityCard">
      <figure>
        <img src={imgUrl} alt="" />
      </figure>
      <div className="container">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default AbilityCard;
