
const Contact = () => {
     return (
          <div>
                 <div className="mt-12 mb-5 ">
                 <h2 className="text-3xl font-bold text-primary tracki text-center md:text-4xl mt-7 uppercase  mb-3">
              Our Location
            </h2>
            <p className="max-w-3xl mx-auto  text-center ">
              Quando cetero his ne, eum admodum sapientem ut sdfsd.sfa dsf asfds fasdf
            </p>
          </div>
       <section className="text-white body-font relative ">
  <div className="absolute inset-0 border-t-4 border-primary">
    <iframe  marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d238350.24003385997!2d91.80934815528343!3d24.925214354262504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d24.8962036!2d91.8745886!4m5!1s0x3750552bc71c899d%3A0x804e438bcc32b390!2smetropolitan%20university%20google%20map!3m2!1d24.9301381!2d91.9730172!5e0!3m2!1sbn!2sbd!4v1684763292015!5m2!1sbn!2sbd" width="100%" height="100%" frameBorder="0"></iframe>
  
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 glass bg-gradient-to-br from-primary/70 via-primary to-primary/70 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-white text-lg mb-1 font-semibold title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem.</p>
      <form onSubmit="">
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
        <input required  placeholder="Your Email" type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
        <textarea placeholder="Your Comment" required id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <input className="text-primary bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg cursor-pointer font-bold" type="submit" value="Submit"/>
      </form>
      <p className="text-xs text-white mt-3">It is very important. So,be careful.</p>
    </div>
  </div>
</section> 
          </div>
     );
};
export default Contact;