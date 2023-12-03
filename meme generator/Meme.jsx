import React from "react";
import memesData from "./memesData";
export default function Meme() {
    const [memes, setMemes] = React.useState({
        topText:"",
        bottomText:'',
        randomImage:"http://i.imgflip.com/1bij.jpg"

    })
    const [meme2,setMeme2]=React.useState([])
    React.useEffect(()=>{
        console.log("trt")
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setMeme2(data.data.memes))
    },[])


    function pointerClick() {
        const randomNumber = Math.floor(Math.random() * meme2.length)
        const random = meme2[randomNumber]
        const url = random.url
        console.log(url)
        setMemes((prevMeme)=>{
            return{...prevMeme,randomImage:url}})
    }
    function handleChange(event){
        const {name,value}=event.target
        setMemes(prevMeme=>({
            ...prevMeme,[name]:value
        }))
    }
    return (
        <main className="main">
            <div className="form">

                <div className="form-input">
                    <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={memes.topText}
                    onChange={handleChange}
                />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="bottomText"
                        value={memes.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className="button-class">
                    <button
                    className="form--button"
                    onClick={pointerClick}
                >
                    Get a new meme image 🖼
                    </button>
                    </div>
                    <div className="meme">
                    <img className="image-meme" src={memes.randomImage} alt="" />
                    <h2 className="topMeme">{memes.topText}</h2>
                    <h2 className="bottomMeme">{memes.bottomText}</h2>
                    </div>
            </div>
        </main>
    )
}