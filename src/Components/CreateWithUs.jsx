import { BsCheckCircle } from "react-icons/bs";

const CreateWithUs = () => {
  return (
    <section className="text-white bg-primary my-2">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div
          className="w-full lg:w-1/3"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/640x480')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <BsCheckCircle className="w-8 h-8 mb-8 " />
          <h2 className="text-3xl font-semibold leading-tight">
            WELCOME TO AIMS EDUCATION
          </h2>
          <p className="mt-4 mb-8 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            dolore sapiente. Rem expedita repellat iusto nisi dicta atque,
            dolorum cumque magni obcaecati. Saepe placeat culpa laboriosam ea
            quaerat alias doloribus praesentium aliquam velit. Numquam
            reiciendis unde dolorum! Facilis rerum repellendus iusto eum
            recusandae, fugiat deserunt. Obcaecati, laudantium magni neque est
            itaque, nostrum pariatur non placeat cumque eius similique sapiente
            tenetur accusantium rerum.
          </p>
          <button className="self-start px-10 py-2 text-lg font-medium  rounded-lg  border-2">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateWithUs;
