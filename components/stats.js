export default function Stats() {
  const stats = [
    { number: "650", label: "Our Client" },
    { number: "980", label: "Project Done" },
    { number: "12", label: "Years Experience" },
    { number: "240", label: "Repeat Order" },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-green-500 text-5xl mb-2">✓</div>
            <h3 className="text-3xl font-bold text-gray-800">{item.number}</h3>
            <p className="text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
