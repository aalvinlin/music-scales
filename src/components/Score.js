import React, { useState } from "react";

const Score = ({ scaleNotes }) => {

    return (
        <div className="score">
            { scaleNotes.map((note, id) => <span key={"note" + id}>{note}</span>) }
        </div>
    )
}

export default Score;