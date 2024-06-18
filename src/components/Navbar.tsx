interface IProps {
  setpage: (val: "HomePage" | "ProductsPage" | "AboutPage"| "UseEffectPage") => void;
}

const Navbar = ({ setpage }: IProps) => {
  return (
    <>
      <ul className="flex justify-around mt-5 ">
        <li
          className="hover:text-indigo-500 text-xl  duration-300"
          onClick={() => setpage("HomePage")}
        >
          Home
        </li>
        <li
          className="hover:text-indigo-500 text-xl  duration-300"
          onClick={() => setpage("ProductsPage")}
        >
          Products
        </li>
        <li
          className="hover:text-indigo-500 text-xl  duration-300"
          onClick={() => setpage("AboutPage")}
        >
          AboutUs
        </li>
        <li
          className="hover:text-indigo-500 text-xl  duration-300"
          onClick={() => setpage("UseEffectPage")}
        >
          UseEffetHooks
        </li>
      </ul>
    </>
  );
};

export default Navbar;
