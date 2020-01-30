export const getScaleNotes = ({key, tonality, clef}) => {
 
    const notesToIds = {"C": 0, "D": 1, "E": 2, "F": 3, "G": 4, "A": 5, "B": 6};
    const idsToNotes = ["C", "D", "E", "F", "G", "A", "B"];
    
    const accidentalsToHalfSteps = {"𝄫": -2, "♭": -1, "♮": 0, "♯": 1, "𝄪": 2};
    const halfStepsToAccidentals = {"-2": "𝄫", "-1": "♭", "0": "♮", "1": "♯", "2": "𝄪"};

    // stores number of half steps to the next note (natural)
    const intervalToNextNoteNatural = {"C": 2, "D": 2, "E": 1, "F": 2, "G": 2, "A": 2, "B": 1};

    const scaleIntervals = {

        major: [2, 2, 1, 2, 2, 2, 1],
        minorNatural: [2, 1, 2, 2, 1, 2, 2],
        minorHarmonic: [2, 1, 2, 2, 1, 3, 1]

    }

    let scaleNotes = [];
    let octave = 4;
    let startingNote = key;
    let currentNoteAccidental = 0;

    // determine starting note of scale
    if (key.length === 2)
        {
            startingNote = key[0];
            currentNoteAccidental = key[1];
        }

    console.log(startingNote)

    let currentNoteId = notesToIds[startingNote];

    if (tonality === "minor")
        {
            tonality = "minorNatural";
        }

    // build scale
    for (let i = 0; i < 8; i++, currentNoteId += 1)
        {
            // if the note goes past C, start a new octave
            if (currentNoteId > 6)
                {
                    octave += 1;
                    currentNoteId %= 7;
                }
            
            let noteObject = {
                note: idsToNotes[currentNoteId],
                octave: octave,
                accidental: currentNoteAccidental,
                duration: 1
            }

            scaleNotes.push(noteObject);

            // calculate accidental for next note
            currentNoteAccidental

        }

    return scaleNotes;
}