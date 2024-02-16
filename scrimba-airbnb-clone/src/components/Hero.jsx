import photoGrid from "../../public/images/photo-grid.png";

function Hero() {
    return (
        <div className="navbar-content">
            <img src={photoGrid} alt="" />
            <h1>Online experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving
                home.
            </p>
        </div>
    );
}

export default Hero;
