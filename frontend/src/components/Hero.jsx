function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center">

        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
          ATS • LaTeX • Professional
        </span>

        <h1 className="text-6xl font-extrabold mt-6 leading-tight">
          Build a Professional
          <span className="text-blue-600"> ATS Resume</span>
          <br />
          in Minutes.
        </h1>

        <p className="text-gray-500 text-xl mt-6 max-w-2xl mx-auto">
          CV Genius helps you create clean, ATS-compliant resumes
          powered by LaTeX with one click.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition">
            Create Resume
          </button>

          <button className="border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition">
            View Template
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;