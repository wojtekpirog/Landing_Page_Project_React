function StaffMember({ id, name, surname, position, description }) {
  return (
    <div className="staff-member--container">
      <div
        className={
          id % 2 === 0
            ? "staff-member--image image-first"
            : "staff-member--image image-second"
        }
      ></div>
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
