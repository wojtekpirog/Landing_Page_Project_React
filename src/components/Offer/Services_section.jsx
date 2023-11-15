import ServiceTile from "./Tile/Service_tile";
import { services } from "../../data/services";

function ServicesSection() {
  return (
    <div className="services-container">
      <div className="container" id="offer">
        <div className="services-intro">What does our company do?</div>
        <div className="grid">
          {services.map(({ name, isNew }, index) => {
            return <ServiceTile key={index} name={name} isNew={isNew} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;