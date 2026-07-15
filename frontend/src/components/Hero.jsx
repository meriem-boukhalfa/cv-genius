function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center">


        <span
          className="
          inline-block
          bg-gradient-to-r from-cyan-100 to-blue-100
          text-blue-700
          px-5 py-2
          rounded-full
          text-sm
          font-bold
          "
        >
          ✨ ATS • LaTeX • AI Powered
        </span>



        <h1
          className="
          text-5xl md:text-7xl
          font-extrabold
          mt-8
          leading-tight
          text-gray-900
          "
        >

          Build a Professional

          <span
            className="
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            bg-clip-text
            text-transparent
            "
          >
            {" "}
            ATS Resume
          </span>

          <br />

          in Minutes.


        </h1>



        <p
          className="
          text-gray-500
          text-lg md:text-xl
          mt-7
          max-w-3xl
          mx-auto
          leading-relaxed
          "
        >
          CV Genius helps you create clean,
          ATS-compliant resumes powered by
          LaTeX and smart AI assistance with one click.
        </p>




        <div
          className="
          mt-10
          flex
          justify-center
          gap-5
          flex-wrap
          "
        >


          <button
            className="
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            hover:scale-105
            text-white
            px-9
            py-4
            rounded-2xl
            font-bold
            shadow-lg
            shadow-blue-200
            transition
            "
          >
            🚀 Create Resume
          </button>




          <button
            className="
            border
            border-gray-300
            hover:bg-gray-100
            px-9
            py-4
            rounded-2xl
            font-bold
            transition
            "
          >
            👀 View Template
          </button>



        </div>


      </div>

    </section>
  );
}

export default Hero;