export const WorkDaysCalculatorLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-50 px-4 py-8">
      {/* Header */}
      <header className="w-full bg-gray-800 text-white py-4 flex justify-center fixed top-0 left-0">
        <h1 className="text-xl font-semibold">Work Days Calculator</h1>
      </header>
      {/* Content */}
      <main className="flex-1 w-full flex items-center justify-center mt-16">
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};
