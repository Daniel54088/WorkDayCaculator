export const QuestionnaireLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-purple-100 px-8 py-12">
      <div className="w-full max-w-lg">{children}</div>
    </div>
  );
};
