import Error from "../../assets/images/error-404.png"
import "./Error.scss";

const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
        <div className="error-page-content">
            <div className="error-page-content-img">
                <img src={Error} />
            </div>
            <div className="error-page-content-text">
                Oops! Page Not Found
            </div>
            <button className="error-page-content-btn">Go To Home</button>
        </div>
    </div>
  )
}

export default ErrorPage