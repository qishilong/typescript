export enum ChessType {
    none,
    black,
    red
}

export enum GameStatus {
    // 正在游戏中
    gaming,

    // 红方胜利
    redWin,

    // 黑方胜利
    blackWin,

    // 平局
    equal
}