import { Button } from "@/components/ui/button";

interface ResultSectionProps {
  result: number | null;
  onReset: () => void;
}

export default function ResultSection({ result, onReset }: ResultSectionProps) {
  return (
    <section className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Your Calculation Result</h2>

      <p
        className="text-2xl font-bold text-blue-700 mb-4"
        aria-label="result-days"
      >
        {result ?? 0} days.
      </p>

      <div className="text-blue-700 text-sm flex justify-end mt-4">
        <Button
          onClick={onReset}
          variant="ghost"
          className="flex items-center space-x-1"
          aria-label="Start Over"
        >
          <span>🔄 Start Over</span>
        </Button>
      </div>
    </section>
  );
}
