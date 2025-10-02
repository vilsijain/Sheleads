const opportunities = [
  {
    title: "Women in Tech Internship – Infosys",
    location: "Bangalore",
    type: "Internship",
  },
  {
    title: "Leadership Fellowship – Google",
    location: "Hyderabad",
    type: "Fellowship",
  },
  {
    title: "Women Entrepreneur Grant",
    location: "Delhi",
    type: "Grant",
  },
];

const Opportunities = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Opportunities for Women</h2>
      <ul className="space-y-4">
        {opportunities.map((job, idx) => (
          <li key={idx} className="p-4 border rounded shadow">
            <h3 className="font-semibold">{job.title}</h3>
            <p>📍 {job.location}</p>
            <p>🗂️ {job.type}</p>
            <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded">
              Apply
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Opportunities;
