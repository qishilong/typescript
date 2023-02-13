import { Card } from "./type";
import { Color, Figure } from "./enum";

export const createCard = (): Card => {
    let totalCard: Card = [];
    const color = Object.values(Color);
    const figure = Object.values(Figure);
    for (const figureValue of figure) {
        for (const colorValue of color) {
            totalCard.push({
                color: colorValue,
                figure: figureValue
            });
        }
    }
    return totalCard;
};

export const printCard = (card: Card) => {
    let result = "";
    card.forEach((item, i) => {
        let cardColor = item.color + item.figure;
        result += cardColor + "\t";
        if ((i + 1) % 4 === 0) {
            result += "\n";
        }
    });
    return result;
};