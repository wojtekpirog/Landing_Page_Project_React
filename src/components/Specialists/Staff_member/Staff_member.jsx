function StaffMember({ id, name, surname, position, description }) {
  return (
    <div className="employee-container">
      <div className={id % 2 === 0 ? "employee-image img-first" : "employee-image img-second"}></div>
      <div className="portfolio-description">
        <h4 className="username">
          {name} {surname} [{position}]
        </h4>
        <p className="description">
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
}

export default StaffMember;