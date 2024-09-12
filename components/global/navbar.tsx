import clsx from 'clsx';

import { Logo } from '../interface';

const Navbar = () => {
  return (
    <nav className="side-pad fixed top-0 left-0 right-0 bottom-0 w-full h-20 md:h-24 lg:h-28">
      <div className="w-full h-full flex items-center justify-between">
        <Logo />
        <div className="cursor-pointer">
          {
            Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className={clsx("my-2 bg-white h-0.5 bg transition-all ease-in-out duration-300", {
                  "w-8 md:w-9 lg:w-10": idx === 1,
                  "w-6 md:w-7 lg:w-8": idx !== 1,
                })}
              ></div>
            ))
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;