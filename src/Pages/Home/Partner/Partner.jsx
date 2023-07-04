import { partner1 } from "./../../../assets/partner/partner-1.jpg";
import { partner2 } from "./../../../assets/partner/partner-2.jpg";
import { partner3 } from "./../../../assets/partner/partner-3.jpg";
import { partner4 } from "./../../../assets/partner/partner-4.jpg";

const Partner = () => {
  return (
    <section className="p-section">
      <div className="p-container">
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
      </div>
    </section>
  );
};

export default Partner;
