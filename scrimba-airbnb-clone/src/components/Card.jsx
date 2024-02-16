import star from "../../public/images/star.png";

function Card(props) {
    return (
        <div className="card">
            {!props.openSpots && <div className="card-badge">SOLD OUT</div>}
            <img src={`../../public/images/${props.coverImg}`} className="card-image" />
            <div className="card-stats">
                <img src={star} className="card-star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p>
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    );
}

export default Card;
