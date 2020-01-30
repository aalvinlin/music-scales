import React, { useState } from "react";

const Score = ({ scaleNotes }) => {

    return (
        <div className="score">
            <div className="scaleLetters">
                {
                    scaleNotes.map((noteData, id) => {

                        return (

                        <div key={"note" + id} className="scaleLetter">
                            {noteData.note}
                            {noteData.accidental !== "♮" ? noteData.accidental : ""}
                        </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Score;