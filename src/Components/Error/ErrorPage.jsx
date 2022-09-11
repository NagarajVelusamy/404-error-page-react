// import Error from "../../assets/images/error-404.png"
import PageNotFound from "../../assets/images/pagenotfound.svg";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
      <div className="error-page-content">
        <div className="error-page-content-img">
          <img src={PageNotFound} alt="Page Not Found" />
        </div>
        <div className="error-page-content-text">
          Oops! Page Not Found
        </div>
        <button className="error-page-content-btn" type="button">Go To Home</button>
      </div>
    </div>
  )
}

export default ErrorPage