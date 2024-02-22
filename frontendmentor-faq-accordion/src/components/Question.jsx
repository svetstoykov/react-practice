import { useState } from "react";
import minusButton from "../assets/icon-minus.svg";
import plusButton from "../assets/icon-plus.svg";

function Question({ title, content, isLast }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const button = isExpanded ? minusButton : plusButton;

    function handleExpand() {
        setIsExpanded((prev) => !prev);
    }

    return (
        <div className="question">
            <div className="question-title" onClick={handleExpand}>
                <h2>{title}</h2>
                <img src={button} />
            </div>
            <div className={`question-content ${isExpanded ? "expanded" : "collapsed"}`}>
                <p>{content}</p>
            </div>
            {!isLast && <hr className="line" />}
        </div>
    );
}

export default Question;
