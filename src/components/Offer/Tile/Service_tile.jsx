function Service_tile({ name, isNew }) {
  if (isNew) {
    return (
      <div className="service-tile new-item">
        <div className="new-item-badge">New</div>
        <div className="service-heading">{name}</div>
        <div>(New)</div>
      </div>
    );
  }
  return (
    <div className="service-tile">
      <div className="service-heading">{name}</div>
    </div>
  );
}

export default Service_tile;