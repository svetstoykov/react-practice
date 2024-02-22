import qr from "./assets/image-qr-code.png";

function App() {
    return (
        <div className="container">
            <img src={qr} alt="" />
            <h2>Improve your front-end skills by building projects</h2>
            <p>
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next
                level
            </p>
        </div>
    );
}

export default App;
