import React from "react";
import { Input } from "@/components/ui/input";

interface DatePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange }) => {
  const loweCaseName = `${label.replace(/\s+/g, "-").toLowerCase()}`;
  const inputId = `${loweCaseName}-input`;
  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block font-medium mb-1">
        {label}
      </label>
      <Input
        id={inputId}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={inputId}
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default DatePicker;
