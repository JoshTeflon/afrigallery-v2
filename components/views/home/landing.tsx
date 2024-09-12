import Image from 'next/image';
import clsx from 'clsx';

interface LandingProps {
  className?: string
}

const Landing: React.FC<LandingProps> = ({ className }) => {
  return (
    <div className={clsx(className, "h-screen w-full")}>
      <Image
        className="-z-10 absolute inset-0 w-full h-full object-cover"
        src="/images/bg-img.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        priority
      />
      <div className="relative w-full h-full"></div>
    </div>
  );
};

export default Landing;