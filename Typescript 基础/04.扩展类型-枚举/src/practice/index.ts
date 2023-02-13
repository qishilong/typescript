enum Color {
    hearts = "♥️",
    diamond = "♦️",
    spade = "♠️",
    winterSweet = "♣️"
}

enum Figure {
    one = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    eleven = "J",
    twelve = "Q",
    thirteen = "K",

}

type NormalCard = {
    color: Color;
    figure: Figure;
};
type Card = NormalCard[];


/**
 * the first method
 * 
const createCard = (): string[] => {
    let totalCard: string[] = [];
    const color = Object.values(Color);
    const figure = Object.values(Figure);
    // 也可以通过使用Object.keys()获取Color,Figure的对应的属性名，然后根据属性值得到属性值，不过稍微麻烦了点
    // const color = Object.keys(Color);
    // const figure = Object.keys(Figure);
    for (const colorValue of color) {
        for (const figureValue of figure) {
            totalCard.push(`${colorValue}${figureValue} `);
            // totalCard.push(`${Color[colorValue]}${Figure[figureValue]} `);
        }
    }
    return totalCard;
};
const cards = createCard();
console.log(cards);
*/

/**
 * the second method
 *
const createCard = (): Card => {
    let totalCard: Card = [];
    const color = Object.values(Color);
    const figure = Object.values(Figure);
    for (const colorValue of color) {
        for (const figureValue of figure) {
            totalCard.push({
                color: colorValue,
                figure: figureValue
            });
        }
    }
    return totalCard;
};

const printCard = (card: Card) => {
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

const cards = createCard();
console.log(printCard(cards))
 */

