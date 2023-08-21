const LeandingBanner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7235907/pexels-photo-7235907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
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
          <button className="btn btn-white px-8 border-4 font-bold border-primary text-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default LeandingBanner;
