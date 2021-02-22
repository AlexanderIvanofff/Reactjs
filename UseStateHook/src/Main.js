import React, { useState } from "react"
import {set} from "mobx";

function Main() {
    const [emotion, setEmotion] = useState("happy")

    return (
        <div>
            <h1>Current emotion is {emotion}</h1>
            <button onClick={() => setEmotion("frustrated")}
            >Frustrate
            </button>

            <button onClick={() => setEmotion("enthusiastic")}>
                Enthuse
            </button>
            <button onClick={() => setEmotion("Happy")}>
                Happy
            </button>
        </div>


    )
}


export default Main
