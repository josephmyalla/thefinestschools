import { loading } from "../assets";

const Generating = ({ className,title }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4 animate-spin" src={loading} alt="Loading"/>
      <span className="text-gray-400">{title}</span>
    </div>
  );
};

export default Generating;
