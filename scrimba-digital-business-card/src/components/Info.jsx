import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

function Info() {
    return (
        <>
            <h1 className="main-name">Svetlozar Stoykov</h1>
            <h3 className="main-job">Software Developer</h3>
            <h4 className="main-email">svetlozar.stoykov@icloud.com</h4>
            <div className="main-contacts">
                <button className="email-btn">
                    <AiOutlineMail />
                    Email
                </button>
                <button className="linkedin-btn">
                    <AiFillLinkedin />
                    LinkedIn
                </button>
            </div>
        </>
    );
}

export default Info;
