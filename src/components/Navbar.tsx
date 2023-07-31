import clsx from "clsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className={clsx(
        "sticky z-10 top-0 bg-black",
        "h-14",
        "flex items-center"
      )}
    >
      <nav
        className={clsx(
          "flex items-center justify-end space-x-5",
          "container mx-auto px-5",
          "font-semibold text-lg"
        )}
      >
        <Link
          to="/"
          className={clsx(
            "block transition",
            "text-white/70",
            "hover:text-white"
          )}
        >
          Shop
        </Link>
        <Link
          to="/cart"
          className={clsx(
            "block transition",
            "text-white/70",
            "hover:text-white"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
