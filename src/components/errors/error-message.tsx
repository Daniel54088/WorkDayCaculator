function ErrorMessage({ message }: { message: string }) {
  return <p className="text-red-500 text-sm mb-4">{message}</p>;
}

export default ErrorMessage;
