const blogs = [
  { title: "Breaking Barriers in Tech", author: "Neha Verma" },
  { title: "Why Leadership Needs More Women Voices", author: "Shreya Kapoor" },
];

const Blogs = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Leadership Blogs</h2>
      {blogs.map((blog, idx) => (
        <div key={idx} className="p-4 border rounded mb-3 shadow">
          <h3 className="font-semibold">{blog.title}</h3>
          <p className="text-sm">✍️ {blog.author}</p>
        </div>
      ))}
      <form className="mt-4">
        <input
          type="text"
          placeholder="Write your blog title"
          className="border p-2 mr-2 rounded"
        />
        <button className="px-3 py-1 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Blogs;
