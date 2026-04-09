import "./errorState.css";
import { useNavigate } from "react-router";

type props = {
  title: string;
  message: string;
};
export function ErrorState({ title, message }: props) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/discover");
  };
  return (
    <div className="errorState">
      <h2 className="errorState__title">{title}</h2>
      <p className="errorState__message">{message}</p>
      <div className="errorState__buttons">
        <button onClick={handleBack} className="errorState__button">
          Back to Discover
        </button>
        <button
          onClick={() => window.location.reload()}
          className="errorState__button"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
