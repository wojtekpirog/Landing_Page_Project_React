import StaffMember from "./Staff_member/Staff_member";
import { specialists } from "../../data/staff.js";

function Specialists() {
  return (
    <div className="specialists--container" id="about">
      <div className="container">
        <div className="company-staff_intro">Our Specialists</div>
        <div className="specialists">
          {specialists.map((element, index) => {
            return (
              <StaffMember
                id={index}
                key={index}
                name={element.name}
                surname={element.surname}
                position={element.position}
                description={element.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Specialists;
