import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
    const cards = data.map((element, index) => (
        <Card key={crypto.randomUUID()} index={index} count={data.length} {...element} />
    ));

    return (
        <div className="container">
            <Navbar />
            <section className="card-list">{cards}</section>
            <Footer />
        </div>
    );
}

export default App;
