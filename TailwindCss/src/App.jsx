function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-xl font-bold">Tailwind UI</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Features</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="p-8 flex flex-col lg:flex-row items-center gap-8">
        <div>
          <h2 className="
            text-xl
            md:text-3xl
            lg:text-5xl
            font-bold
            bg-gradient-to-r from-blue-500 to-purple-500
            text-transparent bg-clip-text
          ">
            Tailwind CSS Exploration
          </h2>
          <p className="mt-4 text-gray-600">
            Utility-first CSS framework for rapid UI development.
          </p>

          {/* BUTTON */}
          <button className="
            mt-6 px-6 py-2
            rounded
            bg-gray-200
            hover:bg-gray-300
            active:bg-gray-400
            transition
          ">
            Get Started
          </button>
        </div>

        {/* IMAGE */}
        <div className="w-64">
          <img
            src="https://via.placeholder.com/300"
            alt="hero"
            className="
              rounded-lg
              shadow-lg
              hover:scale-105
              transition-transform
              duration-300
            "
          />
        </div>
      </section>

      {/* ================= LIST ================= */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-4">Why Tailwind?</h3>
        <ul className="list-disc list-inside pl-5 space-y-2">
          <li className="hover:text-blue-600">Utility-first approach</li>
          <li className="hover:text-blue-600">Highly customizable</li>
          <li className="hover:text-blue-600">Responsive by default</li>
        </ul>
      </section>

      {/* ================= FEATURE CARDS GRID ================= */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-6">Features</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-lg shadow"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="card"
                className="rounded mb-4"
              />
              <h4 className="font-bold text-lg">Feature {item}</h4>
              <p className="text-gray-600 mt-2">
                Description of feature {item}.
              </p>
              <button className="
                mt-4 px-4 py-2
                bg-gray-200
                rounded
                hover:bg-gray-300
                active:bg-gray-400
              ">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TABLE ================= */}
      <section className="p-8 overflow-x-auto">
        <h3 className="text-2xl font-semibold mb-4">User Table</h3>

        <table className="w-full border border-gray-300 bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((row, index) => (
              <tr
                key={row}
                className={`
                  ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  hover:bg-gray-100
                `}
              >
                <td className="border p-2">{row}</td>
                <td className="border p-2">User {row}</td>
                <td className="border p-2">Developer</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ================= FORM ================= */}
      <section className="p-8">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>

        <form className="max-w-md bg-white p-6 rounded-lg shadow space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="
              w-full p-2 border rounded
              focus:outline-none focus:ring-2 focus:ring-blue-400
            "
          />

          <input
            type="email"
            placeholder="Email"
            className="
              w-full p-2 border rounded
              focus:outline-none focus:ring-2 focus:ring-blue-400
            "
          />

          <input
            type="password"
            placeholder="Password"
            className="
              w-full p-2 border rounded
              focus:outline-none focus:ring-2 focus:ring-blue-400
            "
          />

          <button className="
            w-full py-2
            bg-gray-200 rounded
            hover:bg-gray-300
            active:bg-gray-400
          ">
            Submit
          </button>
        </form>
      </section>

    </div>
  );
}

export default App;
