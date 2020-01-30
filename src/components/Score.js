import React, { useState } from "react";

const Score = ({ scaleNotes }) => {

    return (
        <div className="score">
            <div className="scaleLetters">
                {
                    scaleNotes.map((noteData, id) => <div key={"note" + id} className="scaleLetter">{noteData.note}</div>)
                }
            </div>
        </div>
    )
}

export default Score;