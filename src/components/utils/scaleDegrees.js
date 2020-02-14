export const getScaleDegrees = ({key, tonality, clef}) => {
 
    const notesToIds = {"C": 0, "D": 1, "E": 2, "F": 3, "G": 4, "A": 5, "B": 6};
    const idsToNotes = ["C", "D", "E", "F", "G", "A", "B"];
    
    const accidentalsToHalfSteps = {"𝄫": -2, "♭": -1, "♮": 0, "♯": 1, "𝄪": 2};
    const halfStepsToAccidentals = {"-2": "𝄫", "-1": "♭", "0": "♮", "1": "♯", "2": "𝄪"};

    // stores number of half steps to the next note (natural)
    const intervalToNextNoteNatural = {"C": 2, "D": 2, "E": 1, "F": 2, "G": 2, "A": 2, "B": 1};

    const scaleDegreeIntervals = {

        major: [2, 2, 1, 2, 2, 2, 1],
        minor: [2, 1, 2, 2, 1, 2, 2],
    }

    // array index 0 will be unused so that scale degrees correspond to array indices
    let scaleDegrees = [0];
    let startingNote = key;
    let currentNoteAccidental = 0;

    // determine starting note of scale
    if (key.length === 2)
        {
            startingNote = key[0];
            currentNoteAccidental = accidentalsToHalfSteps[key[1]];
        }

    console.log(startingNote)

    let currentNoteId = notesToIds[startingNote];

    // build scale
    for (let i = 0; i < 7; i++, currentNoteId += 1)
        {
            // if the note goes past C, start from B
            if (currentNoteId > 6)
                { currentNoteId %= 7; }
            
            let noteObject = {
                note: idsToNotes[currentNoteId],
                accidentalValue: currentNoteAccidental,
                accidental: halfStepsToAccidentals[currentNoteAccidental],
                duration: 1
            }

            scaleDegrees.push(noteObject);

            // calculate accidental for next note
            let currentHalfSteps = intervalToNextNoteNatural[idsToNotes[currentNoteId]] - currentNoteAccidental;
            let halfStepsNeededForScale = scaleDegreeIntervals[tonality][i];
            
            let halfStepsNeeded = halfStepsNeededForScale - currentHalfSteps;
            currentNoteAccidental = halfStepsNeeded;

        }

    return scaleDegrees;
}