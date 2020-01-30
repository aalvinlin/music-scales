import React, { useState } from "react";

const ScaleChooserForm = () => {

    const initialScale = {
        key: "C",
        tonality: "major",
        clef: "treble"
    }
    
    const [userScale, setUserScale] = useState(initialScale);

    const handleChange = (event) => {
        setUserScale({...userScale, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <div className="scaleChooserForm">
            <form name="scaleChooser">

                <div className="formKeyDiv">
                    <h2>Key</h2>
                    <div className="formKeyOptions">
                        
                        <div className="keySignatureOptions">
                            <div className="formKeyRadioOption">
                                <label><input name="key" type="radio" value="C" checked={userScale.key === "C"} onChange={handleChange}/>C</label>
                            </div>

                            <div className="keySignatureOptionsWithKeySignatures">

                                <div className="keySignatureOptionsSharps">
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="G" checked={userScale.key === "G"} onChange={handleChange}/>G</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="D" checked={userScale.key === "D"} onChange={handleChange}/>D</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="A" checked={userScale.key === "A"} onChange={handleChange}/>A</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="E" checked={userScale.key === "E"} onChange={handleChange}/>E</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="B" checked={userScale.key === "B"} onChange={handleChange}/>B</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="C#" checked={userScale.key === "C#"} onChange={handleChange}/>C#</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="F#" checked={userScale.key === "F#"} onChange={handleChange}/>F#</label>
                                    </div>
                                </div>

                                <div className="keySignatureOptionsFlats">
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="F" checked={userScale.key === "F"} onChange={handleChange}/>F</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="Bb" checked={userScale.key === "Bb"} onChange={handleChange}/>Bb</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="Eb" checked={userScale.key === "Eb"} onChange={handleChange}/>Eb</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="Ab" checked={userScale.key === "Ab"} onChange={handleChange}/>Ab</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="Db" checked={userScale.key === "Db"} onChange={handleChange}/>Db</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="Gb" checked={userScale.key === "Gb"} onChange={handleChange}/>Gb</label>
                                    </div>
                                    <div className="formKeyRadioOption">
                                        <label><input name="key" type="radio" value="Cb" checked={userScale.key === "Cb"} onChange={handleChange}/>Cb</label>
                                    </div>
                                </div>
                                
                            </div>

                        </div>             
                    </div>
                </div>
                
                <div className="formTonalityDiv">
                    <h2>Tonality</h2>
                    <div className="formTonalityOptions">
                        <div className="formTonalityRadioOption">
                            <label><input name="tonality" type="radio" value="major" checked={userScale.tonality === "major"} onChange={handleChange}/>major</label>
                        </div>
                        <div className="formTonalityRadioOption">
                            <label><input name="tonality" type="radio" value="minor" checked={userScale.tonality === "minor"} onChange={handleChange}/>minor</label>
                        </div>
                    </div>
                </div>

                <div className="formClefDiv">
                    <h2>Clef</h2>
                    <div className="formClefOptions">
                        <div className="formClefRadioOption">
                            <label><input name="clef" type="radio" value="treble" checked={userScale.clef === "treble"} onChange={handleChange}/>treble</label>
                        </div>
                        <div className="formClefRadioOption">
                            <label><input name="clef" type="radio" value="alto" checked={userScale.clef === "alto"} onChange={handleChange}/>alto</label>
                        </div>
                        <div className="formClefRadioOption">
                            <label><input name="clef" type="radio" value="bass" checked={userScale.clef === "bass"} onChange={handleChange}/>bass</label>
                        </div>
                    </div>
                </div>
                
                <button name="submit" onClick={handleSubmit}>Display Scale</button>
            </form>
        </div>
    )
}

export default ScaleChooserForm;