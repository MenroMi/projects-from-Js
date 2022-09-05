let chessBoard = "", numberWhichYougive = 10 ** 2;
let counterLoopBackspace = 0;
let counterLoopCross = 0;

// numberWhichYougive = numberWhichYougive - 1;

do {
    do {
        if (chessBoard.length % 2 == 1) {
            chessBoard += ".";
            counterLoopBackspace++;
        } else if (chessBoard.length % 2 == 0) {
            chessBoard += "#";
            counterLoopCross++;
        }
    } while (chessBoard.length <= numberWhichYougive);

    if ( chessBoard.length == 10) {
        chessBoard += '\n';
    }
} while (chessBoard.length == numberWhichYougive);


console.log(chessBoard);