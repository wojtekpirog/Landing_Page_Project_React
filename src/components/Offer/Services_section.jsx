import ServiceTile from "../Offer/Tile/Service_tile";
import { services } from "../../data/services";

function ServicesSection() {
  return (
    <div className="services--container">
      <div className="container" id="offer">
        <div className="services_intro">Czym zajmuje się nasza firma?</div>
        <div className="services">
          {services.map(({ name, isNew }, index) => {
            return <ServiceTile key={index} name={name} isNew={isNew} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
