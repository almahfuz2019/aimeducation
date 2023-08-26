const About = () => {
  return (
    <div className="py-10 mx-2 md:mx-4">
      <nav aria-label="Breadcrumb ">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <a href="#" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </a>
          </li>
          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-700">
              {" "}
              About Us{" "}
            </a>
          </li>
        </ol>
      </nav>

      <div className="mx-auto p-6 bg-gradient-to-r from-primary/10 via-primary/10 to-primary/10 rounded-lg glass shadow-lg my-3">
        <h1 className="text-4xl font-bold text-primary uppercase mb-4 text-center">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our website! We are a dynamic and passionate team of
          developers who thrive on crafting exceptional web applications using
          cutting-edge technologies. Our journey is fueled by a shared
          enthusiasm for innovation and a commitment to delivering outstanding
          digital experiences to our users. With an unwavering dedication to
          excellence, we embark on each project with creativity and precision.
          Our mission extends beyond just writing code; it is about crafting
          intuitive and engaging solutions that leave a lasting impact. We
          firmly believe that technology has the power to transform and enhance
          the way we interact with the digital world, and we are determined to
          be at the forefront of that transformation. **What Sets Us Apart:** -
          *Expertise:* Our team consists of experts skilled in a diverse range
          of technologies and frameworks, allowing us to tailor solutions that
          align with your unique needs. - *User-Centric Approach:* Every line of
          code we write is driven by the goal of enhancing user experiences. We
          prioritize user feedback and iterate tirelessly to create intuitive
          and user-friendly interfaces. - *Innovation:* We thrive on challenges
          and approach every project as an opportunity to innovate. We are not
          afraid to push boundaries and explore new avenues. - *Collaboration:*
          We value collaboration and open communication. We work closely with
          our clients to understand their vision, ensuring that every project is
          a true reflection of their goals. **Our Commitment:** Our commitment
          extends beyond project completion. We believe in building lasting
          relationships with our clients, offering ongoing support and updates
          to ensure your web application remains relevant and effective in the
          ever-evolving digital landscape. Thank you for considering us as your
          technology partners. We look forward to the opportunity of bringing
          your ideas to life and crafting exceptional digital experiences that
          resonate with your audience. Get ready to embark on a journey of
          innovation, creativity, and unparalleled dedication with us!
        </p>
      </div>
    </div>
  );
};

export default About;
