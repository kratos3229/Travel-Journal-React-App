export default function Entry(props) {
  return (
    <>
      <article className="journal-entry">
        <div className="main-image-container">
          <img src={props.img.src} alt={props.img.alt} className="main-image" />
        </div>

        <div className="info-container">
          <div className="marker-container">
            <img src="src\assets\marker.png" className="marker-icon" />
            <span className="location">{props.country}</span>
            <a className="map-link" href={props.googleMapsLink} target="_blank">
              View on Google Maps
            </a>
          </div>
          <h2 className="title">{props.title}</h2>
          <p className="date">{props.date}</p>
          <p className="text">{props.text}</p>
        </div>
      </article>
    </>
  );
}
