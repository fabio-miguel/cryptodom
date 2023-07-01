const Card = ({ img, title, text }) => {
  return (
    <div className="card">
      <i className={img}></i>
      <div className="card-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default Card;
