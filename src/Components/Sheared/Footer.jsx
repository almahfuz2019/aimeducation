/* eslint-disable react/no-unknown-property */
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
const Footer = () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "About",
    },
    {
      href: "javascript:void()",
      name: "Blog",
    },
    {
      href: "javascript:void()",
      name: "",
    },
    {
      href: "javascript:void()",
      name: "Team",
    },
    {
      href: "javascript:void()",
      name: "Careers",
    },

    {
      href: "javascript:void()",
      name: "Suuport",
    },
  ];
  return (
    <div>
      <footer className="text-white bg-gradient-to-br from-primary/70 via-primary to-primary/70  px-4 py-5 z-50   md:px-8 mx-2 md:mx-4 mt-4 rounded-t-lg">
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <img
            src="https://www.floatui.com/logo.svg"
            className="w-32 sm:mx-auto text-white bg-white px-4"
          />
          <p className="leading-relaxed mt-2 text-[15px]">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li key="" className=" hover:text-gray-800">
              <a key={idx} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; 2022 Float UI All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
          <li className="w-10 h-10 border rounded-full flex items-center justify-center bg-white shadow shadow-white">
            <a href="javascript:void()">
              <AiFillTwitterCircle className="w-6 h-6 text-blue-400" />
            </a>
          </li>

          <li className="w-10 h-10 border rounded-full flex items-center justify-center bg-white shadow shadow-white">
            <a href="javascript:void()">
              <AiFillFacebook className="w-6 h-6 text-blue-700" />
            </a>
          </li>

          <li className="w-10 h-10 border rounded-full flex items-center justify-center bg-white shadow shadow-white">
            <a href="javascript:void()">
              <AiFillInstagram className="w-6 h-6 text-blue-500" />
            </a>
          </li>

          <li className="w-10 h-10 border rounded-full flex items-center justify-center bg-white shadow shadow-white">
            <a href="javascript:void()">
              <AiFillLinkedin className="w-6 h-6 text-red-600" />
            </a>
          </li>
        </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </footer>
    </div>
  );
};
export default Footer;
