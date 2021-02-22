import React, { useState, useEffect } from "react"
import {set} from "mobx";

function Main() {
    const [emotion, setEmotion] = useState("happy")
    const [secondEmotion, setSecondEmotion] = useState("tired")

    useEffect(() => {
        console.log(`It's ${emotion} around here!`);
    }, [emotion])

    useEffect(()=> {
        console.log(`It's ${secondEmotion} around here!`);
    })


    return (
        <div>
            <h1>
                Current emotion is {emotion} and {secondEmotion}.
            </h1>

            <button onClick={() => setEmotion("happy")}>
                Make Happy
            </button>

            <button onClick={() => setSecondEmotion("crabby")}>
                Make Crabby
            </button>

            <button onClick={() => setEmotion("frustrated")}>
                Make frustrated
            </button>
        </div>

    )
}


export default Main