import { useEffect, useState } from "react";

function Form() {
    const [allMemes, setAllMemes] = useState([]);

    const [meme, setMeme] = useState({
        url: "",
        topText: "",
        bottomText: "",
    });

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((json) => {
                setAllMemes(json.data);

                console.log(json.data);
            });
    }, []);

    function handleTextChange(event) {
        const { value, name } = event.target;

        setMeme((meme) => {
            return { ...meme, [name]: value };
        });
    }

    function getRandomMeme() {
        const memes = allMemes.memes;
        const newMeme = memes[Math.floor(Math.random() * memes.length)];

        setMeme((meme) => ({
            ...meme,
            url: newMeme.url,
        }));
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    name="topText"
                    value={meme.topText}
                    disabled={!meme.url}
                    onChange={handleTextChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    name="bottomText"
                    disabled={!meme.url}
                    value={meme.bottomText}
                    onChange={handleTextChange}
                />
                <button className="form-button" onClick={getRandomMeme}>
                    Get a new meme image 🖼
                </button>
                <div className="meme">
                    <img src={meme.url} className="meme-image" />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    );
}

export default Form;
