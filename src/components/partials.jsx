const initialBoard = Array(9).fill(null);

const winningMatches = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];

const isMatched = (props) => {
    let status = false;
    winningMatches.map(combo => {
        const [a, b, c] = combo;
        if (props.possibleMatch[a] &&
            props.possibleMatch[a] === props.possibleMatch[b] &&
            props.possibleMatch[a] === props.possibleMatch[c]) {
            alert(`=== Player ${props.possibleMatch[props.playerId]} Won ===`);
            status=true;
            return status;
        }   return status;
    });
    return status;
};

export default { initialBoard, isMatched };