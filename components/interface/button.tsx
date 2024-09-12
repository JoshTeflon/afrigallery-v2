import clsx from 'clsx';

interface ButtonProps {
  className?: string
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button className={clsx(className, "")}>
      {children}
    </button>
  );
};

export default Button;