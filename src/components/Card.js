
export default function Card (props) {
    return (
        <section className="section-card">
            <div>
            <img src={process.env.PUBLIC_URL + '/images/' + props.item.imageURL} className="card-image"></img>
            </div>
            <div className="card-text-container">
                <div className="card-title-row">
                    <img src={process.env.PUBLIC_URL + '/images/pin-icon.svg'} alt="Pin Icon" type="images/svg+xml" className="icon-pin"></img>
                    <span>{props.item.location.toUpperCase()}</span>
                    <a href={props.item.mapLink} target="_blank" className="card-maps-link">View on Google Maps</a>
                </div>                
                <h2 className="card-h2-title">{props.item.title}</h2>
                <span style={{"fontWeight": 700}}>{props.item.startDate} - {props.item.endDate}</span>
                <p>{props.item.description}</p>
            </div>            
        </section>
    )
}