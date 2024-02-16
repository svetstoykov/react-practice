import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import cardData from "./data";

function App() {
    const cards = cardData.map((data) => (
        <Card
            key={crypto.randomUUID()}
            {...data}
        />
    ));

    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section className="card-list">{cards}</section>
        </div>
    );
}

export default App;
