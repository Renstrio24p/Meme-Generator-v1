import React from "react";
// import memeData from "./meme-data";

export default function MemeHero(){

    const [Memes, setMemes] = React.useState({
        toptext: "",
        bottomtext: "",
        randomImage: "https://i.imgflip.com/1bhw.jpg"
    })

    const [AllMemes,setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1bhw.jpg")
    function getImage(){
        const RandomNum = Math.floor(Math.random() * AllMemes.length)
        const url = AllMemes[RandomNum].url
        setMemes(prevMemes =>({
            ...prevMemes,
            randomImage: url
        }))
    } 

    function HandlerChanger(event){
        const {name, value} = event.target
        setMemes(prevMemes =>({
            ...prevMemes,
            [name] : value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type='text' 
                    className="form-input" 
                    placeholder="top text" 
                    name="toptext" 
                    value={Memes.toptext}
                    onChange={HandlerChanger} 
                    />
                <input 
                    type='text' 
                    className="form-input" 
                    placeholder="bottom text" 
                    name="bottomtext" 
                    value={Memes.bottomtext}
                    onChange={HandlerChanger}
                    />
                <button type="submit" className="form-btn" onClick={getImage}>Get a new meme image 🖼</button>
                <div>
                    <p className="version">Meme Generator v.1</p>
                </div>
            </div>
            <div className="image">
                        <img src={Memes.randomImage} alt="meme" /> 
                    <div className="meme-overlay">
                        <h2 className="meme--text top">{Memes.toptext}</h2>
                        <h2 className="meme--text bottom">{Memes.bottomtext}</h2>
                    </div>
            </div>
        </main>
    )
}