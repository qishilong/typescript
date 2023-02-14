import { Card, Joker, FuncCard, NormalCard } from "./type";
import { Color, Figure } from "./enum";

export const createCard = (): Card => {
    let totalCard: Card = [];
    const color = Object.values(Color);
    const figure = Object.values(Figure);
    for (const figureValue of figure) {
        for (const colorValue of color) {
            totalCard.push({
                color: colorValue,
                figure: figureValue,
                getString() {
                    return this.color + this.figure;
                }
            } as FuncCard);
        }
    }

    const king: Joker = {
        type: "big",
        getString() {
            return "king";
        }
    };

    const wang: Joker = {
        type: "small",
        getString() {
            return "wang";
        }
    };

    totalCard.push(king, wang);

    return totalCard;
};

export const printCard = (card: Card) => {
    let result = "";
    card.forEach((item, i) => {
        result += item.getString() + "\t";
        if ((i + 1) % 4 === 0) {
            result += "\n";
        }
    });
    return result;
};