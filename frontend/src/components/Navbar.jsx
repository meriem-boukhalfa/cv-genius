function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            CV Genius
          </h1>

          <p className="text-sm text-gray-500">
            Professional ATS Resume Generator
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
          Generate Resume
        </button>
      </div>
    </header>
  );
}

export default Navbar;