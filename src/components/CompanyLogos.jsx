import { LogoTicker } from "./LogoTicker";
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
      Authories behind our success
      </h5>
      <LogoTicker />
    </div>
  );
};

export default CompanyLogos;
