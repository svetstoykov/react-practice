import { IoLocation } from "react-icons/io5";

function Card(props) {
    const isLastItem = props.index === props.count - 1;

    console.log(props)

    return (
        <div className="card-wrapper">
            <div className="card">
                <img src={props.imageUrl} />
                <div className="card-details">
                    <div className="card-location">
                        <span className="card-location-icon">
                            <IoLocation />
                        </span>
                        <span className="card-location-name">{props.location}</span>
                        <a href={props.googleMapsUrl} target="_blank">
                            View on Google Maps
                        </a>
                    </div>
                    <h2>{props.title}</h2>
                    <h3>
                        {props.startDate} - {props.endDate}
                    </h3>
                    <p>{props.description}</p>
                </div>
            </div>
            {!isLastItem && <hr/>}
        </div>
    );
}

export default Card;
