import img from "../assets/face.png";

function Header() {
    return (
        <div className="header">
            <div className="header-title">
                <img src={img} />
                <h2>Meme Generator</h2>
            </div>
            <div className="header-description">React Course - Project 3</div>
        </div>
    );
}

export default Header;
