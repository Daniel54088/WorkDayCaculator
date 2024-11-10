import React from "react";
import { Tab } from "@/types/holidays";

interface TabsProps {
  tabs: {
    label: string;
    value: Tab;
  }[];
  activeTab: Tab;
  onTabChange: (value: Tab) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`flex-1 p-2 rounded-lg ${
            activeTab === tab.value ? "bg-blue-700 text-white" : "bg-gray-200"
          }`}
          aria-label={`${tab.label}-tab`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
