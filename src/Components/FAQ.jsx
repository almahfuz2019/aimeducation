import { BsPlus, BsDash } from "react-icons/bs";
const FAQ = () => {
  return (
    <div className="  bg-gradient-to-br from-primary/70 via-primary to-primary/70 py-10 px-3">
      <p className="p-2 text-sm font-medium tracki text-center uppercase  text-white">
        How it works
      </p>
      <h2 className="mb-12  md:text-4xl font-extrabold leadi text-center text-3xl text-white uppercase">
        Frequently Asked Questions
      </h2>
      <details className="group rounded-md backdrop-blur bg-white/10 py-3 px-2 mb-2" open>
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
          <h2 className="text-lg underline font-medium underline-offset-2 px-2   rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <span className="relative h-6 w-6 shrink-0 bg-white btn-circle text-primary ">
            <BsDash className="absolute inset-0 h-6 w-6 opacity-100 group-open:opacity-0" />
            <BsPlus className="absolute inset-0 h-6 w-6 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>
      <details className="group rounded-md backdrop-blur bg-white/10 py-2 px-1 mb-2">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
          <h2 className="text-lg underline font-medium underline-offset-2 px-2   rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <span className="relative h-6 w-6 shrink-0 bg-white btn-circle text-primary ">
            <BsDash className="absolute inset-0 h-6 w-6 opacity-100 group-open:opacity-0" />
            <BsPlus className="absolute inset-0 h-6 w-6 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>
      <details className="group rounded-md backdrop-blur bg-white/10 py-2 px-1 mb-2">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
          <h2 className="text-lg underline font-medium underline-offset-2 px-2   rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <span className="relative h-6 w-6 shrink-0 bg-white btn-circle text-primary ">
            <BsDash className="absolute inset-0 h-6 w-6 opacity-100 group-open:opacity-0" />
            <BsPlus className="absolute inset-0 h-6 w-6 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details>
    </div>
  );
};

export default FAQ;
