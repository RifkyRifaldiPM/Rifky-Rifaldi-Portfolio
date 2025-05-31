export function Button({ children, variant }) {
  const style = variant === "outline"
    ? "border border-gray-400 text-gray-700 hover:bg-gray-100"
    : "bg-blue-500 text-white";
  return <button className={`px-4 py-2 rounded ${style}`}>{children}</button>;
}
