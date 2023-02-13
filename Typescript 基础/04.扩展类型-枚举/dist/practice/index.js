const createCard = () => {
    let totalCard = [];
    for (let i = 1; i <= 13; i++) {
        totalCard.push({ color: "♠️", figure: i });
        totalCard.push({ color: "♣️", figure: i });
        totalCard.push({ color: "♥️", figure: i });
        totalCard.push({ color: "♦️", figure: i });
    }
    return totalCard;
};
const printCard = (card) => {
    let result = "";
    card.forEach((item, i) => {
        let cardColor = item.color;
        if (item.figure === 1) {
            cardColor += "A";
        }
        else if (item.figure >= 2 && item.figure <= 10) {
            cardColor += item.figure;
        }
        else if (item.figure === 11) {
            cardColor += "J";
        }
        else if (item.figure === 12) {
            cardColor += "Q";
        }
        else {
            cardColor += "K";
        }
        result += cardColor + "\t";
        if ((i + 1) % 4 === 0) {
            result += "\n";
        }
    });
    console.log(result);
};
const cards = createCard();
printCard(cards);
