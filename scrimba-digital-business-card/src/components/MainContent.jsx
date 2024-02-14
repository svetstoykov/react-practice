import Info from "./Info";
import MainContentSection from "./MainContentSection";

function MainContent() {
    return (
        <div className="main">
            <Info />
            <MainContentSection
                title="About"
                content=" One morning, when Gregor Samsa woke from troubled dreams, he found himself
                    transformed in his bed into a horrible vermin."
            />
            <MainContentSection
                title="Interests"
                content="     It showed a lady fitted out with a fur hat and fur boa who sat upright, raising
                    a heavy fur muff that covered the whole of her lower arm towards the viewer."
            />
        </div>
    );
}

export default MainContent;
