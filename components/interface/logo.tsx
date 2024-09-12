import clsx from 'clsx';

import { Eblem } from '../icons';

interface LogoProps {
  eblem?: boolean
  className?: string
}

const Logo: React.FC<LogoProps> = ({ eblem = true, className }) => {
  return (
    <div
      className={clsx(className, "relative flex items-center cursor-pointer")}
    >
      {eblem && <Eblem className="absolute inset-0 m-auto w-8 md:w-10 lg:w-12 opacity-50" />}
      <span
        className="relative font-jelani text-white text-xl md:text-2xl lg:text-3xl tracking-[0.1rem] hover:tracking-[0.125rem] hover:scale-[1.025] transition-all ease-in-out duration-300"
      >
        AfriGallery
      </span>
    </div>
  )
};

export default Logo;