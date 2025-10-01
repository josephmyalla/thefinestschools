import ButtonSvg from "../assets/svg/ButtonSvg";

type ButtonProps = {
  className?:string
  href?:string
  onClick?:any
  children?:any
  px?:string
  white?:any
}

const Button = ({ className, children, px, white,href }:ButtonProps) => {
  const classes = `button relative cursor-pointer inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} >
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
