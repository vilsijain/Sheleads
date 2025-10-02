const mentors = [
  { name: "Anjali Sharma", expertise: "Tech Leadership" },
  { name: "Priya Mehta", expertise: "Entrepreneurship" },
  { name: "Nidhi Gupta", expertise: "Public Speaking" },
];

const MentorDashboard = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Mentorship Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mentors.map((mentor, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow">
            <h3 className="font-semibold">{mentor.name}</h3>
            <p>{mentor.expertise}</p>
            <button className="mt-2 px-3 py-1 bg-pink-500 text-white rounded">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorDashboard;
