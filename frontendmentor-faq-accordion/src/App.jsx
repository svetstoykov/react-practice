import star from "./assets/icon-star.svg";
import Question from "./components/Question";
import questionsData from "./questionsData";

function App() {
    const questions = questionsData.map((question, index) => {
        return (
            <Question
                key={index}
                isLast={index + 1 === questionsData.length}
                title={question.title}
                content={question.content}
            />
        );
    });

    return (
        <div className="container">
            <div className="faq-header">
                <img src={star} alt="" />
                <h1>FAQs</h1>
            </div>
            <div className="questions-list">{questions}</div>
        </div>
    );
}

export default App;
