
export default function Card (props) {
    return (
        <section className="section-card">
            <div>
            <img src={process.env.PUBLIC_URL + '/images/' + props.item.imageURL} className="card-image"></img>
            </div>
            <div className="card-text-container">
                <div className="card-title-row">
                    <img src={process.env.PUBLIC_URL + '/images/pin-icon.svg'} alt="Pin Icon" type="images/svg+xml" className="icon-pin"></img>
                    <p>{props.item.location.toUpperCase()}</p>
                    <a src={props.item.mapLink} className="card-maps-link">View on Google Maps</a>
                </div>                
                <h2 className="card-h2-title">{props.item.title}</h2>
                <span>{props.item.startDate} - {props.item.endDate}</span>
                <p>{props.item.description}</p>
            </div>            
        </section>
    )
}