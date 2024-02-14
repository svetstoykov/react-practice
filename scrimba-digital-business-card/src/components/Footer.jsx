import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
    return (
        <ul className="footer">
            <li>{<AiFillTwitterCircle />}</li>
            <li>{<AiFillFacebook />}</li>
            <li>{<AiFillInstagram />}</li>
            <li>{<AiFillGithub />}</li>
        </ul>
    );
}

export default Footer;
