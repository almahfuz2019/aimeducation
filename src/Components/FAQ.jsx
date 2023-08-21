
import { BsPlus, BsDash } from 'react-icons/bs';
const FAQ = () => {
  return (
    <div className="space-y-4 bg-primary py-10 px-3">
     <h1 className='text-white font-bold text-5xl text-center underline underline-offset-4'>FAQ</h1>
      <details
        className="group rounded-lg backdrop-blur bg-white/10 p-4"
        open
      >
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 text-white"
        >
          <h2 className="font-medium glass px-2  rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <span className="relative h-6 w-6 shrink-0 bg-white btn-circle text-primary ">
            <BsDash className="absolute inset-0 h-6 w-6 opacity-100 group-open:opacity-0" />
            <BsPlus className="absolute inset-0 h-6 w-6 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
          nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
          corporis earum similique!
        </p>
      </details>
      <details
        className="group rounded-lg backdrop-blur bg-white/10 p-4"
        
      >
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 text-white"
        >
          <h2 className="font-medium glass px-2  rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <span className="relative h-6 w-6 shrink-0 bg-white btn-circle text-primary ">
            <BsDash className="absolute inset-0 h-6 w-6 opacity-100 group-open:opacity-0" />
            <BsPlus className="absolute inset-0 h-6 w-6 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
          nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
          corporis earum similique!
        </p>
      </details>
      <details
        className="group rounded-lg backdrop-blur bg-white/10 p-4"
        
      >
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 text-white"
        >
          <h2 className="font-medium glass px-2  rounded-md">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <span className="relative h-6 w-6 shrink-0 bg-white btn-circle text-primary ">
            <BsDash className="absolute inset-0 h-6 w-6 opacity-100 group-open:opacity-0" />
            <BsPlus className="absolute inset-0 h-6 w-6 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
          nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
          corporis earum similique!
        </p>
      </details>


    </div>
  );
};

export default FAQ;
