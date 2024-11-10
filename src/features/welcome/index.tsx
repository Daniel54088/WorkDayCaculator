import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Welcome() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/questionnaire");
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleStartQuiz();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h1
        className="text-4xl 
      font-bold text-purple-900 mb-4"
      >
        Find the Perfect Tree for Your Garden
      </h1>
      <p className="text-lg text-purple-700 mb-6">
        Answer a few simple questions, and we’ll match you with the best tree
        species for your garden!
      </p>
      <Button
        onClick={handleStartQuiz}
        variant="default"
        size="lg"
        className="bg-purple-600  rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Take quiz
      </Button>

      <p className="mt-2 text-sm text-purple-500">press Enter ↵</p>
    </div>
  );
}
