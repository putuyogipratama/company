export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-1 p-4 bg-white">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
