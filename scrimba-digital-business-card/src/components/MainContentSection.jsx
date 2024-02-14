import PropTypes from "prop-types";

function MainContentSection({ title, content }) {
    return (
        <div className="main-section">
            <h2 className="main-section-title">{title}</h2>
            <p className="main-section-content">{content}</p>
        </div>
    );
}

MainContentSection.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default MainContentSection;
