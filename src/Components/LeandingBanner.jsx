const LeandingBanner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://static.independent.co.uk/2021/08/10/15/iStock-1271579758.jpg)",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:max-w-4xl">
          <h1 className="mb-5 text-4xl  md:text-6xl font-bold text-white uppercase">
            Provident cupiditate volup
          </h1>
          <p className="mb-5 text-lg text-white ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.In deleniti eaque aut repudiandae et a id nisi
          </p>
          <button className="btn btn-primary px-12 border-2 font-bold border-white text-white z-10 opacity-100">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default LeandingBanner;
