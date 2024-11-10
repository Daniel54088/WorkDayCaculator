import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/react-redux";
import { resetQuestion } from "@/features/question-slice";

export default function Result() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const match = JSON.parse(localStorage.getItem("match") || "{}");

  const handleRestartQuiz = () => {
    dispatch(resetQuestion());
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-900 mb-4">
        Your perfect tree match is - {match?.name}!
      </h1>
      <p className="text-lg text-purple-700 mb-6">{match?.description}</p>
      <button
        onClick={handleRestartQuiz}
        className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Restart quiz
      </button>
    </div>
  );
}
