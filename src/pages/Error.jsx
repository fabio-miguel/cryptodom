import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-section">
      <div className="container">
        <h1>404</h1>
        <h3>Ooops, page not found</h3>
        <p>
          Sorry, but the requested page is not found. You might want to click
          the button below to take you back to the home page
        </p>
        <Link to={"/"} className="btn">
          Take me back home
        </Link>
      </div>
    </section>
  );
};
export default Error;
