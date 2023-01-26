function Service_tile({ name, isNew }) {
  if (isNew === true) {
    return (
      <div className="service--tile">
        <div className="new--circle">
          <span></span>
        </div>
        <div className="service-heading">{name}</div>
        <div className="info--small">(Nowość)</div>
      </div>
    );
  }
  return (
    <div className="service--tile">
      <div className="service-heading">{name}</div>
    </div>
  );
}

export default Service_tile;
