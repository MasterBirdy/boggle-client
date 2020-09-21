const MAX_HEIGHT = 4;
const MAX_WIDTH = 4;
const WORD_LENGTH_MIN = 3;

export default function boggleValidator(string, board) {
    if (string.length < WORD_LENGTH_MIN) return false;
    let valid = false;
    for (let i = 0; i < MAX_HEIGHT; i++) {
        for (let j = 0; j < MAX_WIDTH; j++) {
            if (board[i][j] === string[0]) {
                const currentY = i;
                const currentX = j;
                const setOfPositions = {};
                setOfPositions[currentY + "," + currentX] = 1;
                valid = helperFunction(1, currentX, currentY, setOfPositions);
                if (valid) break;
            }
        }
        if (valid) break;
    }
    return valid;

    function helperFunction(currentPos, currentX, currentY, set) {
        let valid = false;
        if (currentPos >= string.length) return true;
        const heightMin = currentY - 1 >= 0 ? currentY - 1 : 0;
        const heightMax = currentY + 1 < MAX_HEIGHT ? currentY + 1 : MAX_HEIGHT - 1;
        const widthMin = currentX - 1 >= 0 ? currentX - 1 : 0;
        const widthMax = currentX + 1 < MAX_WIDTH ? currentX + 1 : MAX_WIDTH - 1;
        for (let i = heightMin; i <= heightMax; i++) {
            for (let j = widthMin; j <= widthMax; j++) {
                if (board[i][j] === string[currentPos]) {
                    const newCurrentY = i;
                    const newCurrentX = j;
                    const positionToAdd = newCurrentY + "," + newCurrentX;
                    if (!set[positionToAdd]) {
                        const newSet = { ...set };
                        newSet[positionToAdd] = 1;
                        valid = helperFunction(currentPos + 1, newCurrentX, newCurrentY, newSet);
                    }
                    if (valid) break;
                }
            }
            if (valid) break;
        }
        return valid;
    }
}
