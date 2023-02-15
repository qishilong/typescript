import { Card, Joker, FuncCard } from "./type";
import { Color, Figure } from "./enum";

interface PublishResult {
    player1: CreateCard;
    player2: CreateCard;
    player3: CreateCard;
    left: CreateCard;
}

export class CreateCard {
    private totalCard: Card = [];

    constructor(cards?: Card) {
        if (cards) {
            this.totalCard = cards;
        } else {
            this.init();
        }
    }

    private init() {
        const color = Object.values(Color);
        const figure = Object.values(Figure);
        for (const figureValue of figure) {
            for (const colorValue of color) {
                this.totalCard.push({
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
        this.totalCard.push(king, wang);
    }

    printCard = () => {
        let result = "";
        this.totalCard.forEach((item, i) => {
            result += item.getString() + "\t";
            if ((i + 1) % 4 === 0) {
                result += "\n";
            }
        });
        return result;
    };

    // 工具函数
    tools = {
        // 获取随机数
        getRandom(min: number, max: number) {
            return Math.floor(Math.random() * (max - min) + min);
        }
    };
    // 分发牌
    deal(num: number): CreateCard {
        const playerCards: Card = [];
        for (let i = 0; i < num; i++) {
            playerCards.push(this.totalCard.shift() as FuncCard);
        }
        return new CreateCard(playerCards);
    }


    // 洗牌
    shuffle() {
        for (let i = 0; i < this.totalCard.length; i++) {
            const itemIndex = this.tools.getRandom(0, this.totalCard.length);
            const temp = this.totalCard[i];
            this.totalCard[i] = this.totalCard[itemIndex];
            this.totalCard[itemIndex] = temp;
        }
    }

    // 发牌结果
    publish(): PublishResult {
        let player1: CreateCard, player2: CreateCard, player3: CreateCard, player4: CreateCard, left: CreateCard;
        player1 = this.deal(17);
        player2 = this.deal(17);
        player3 = this.deal(17);
        left = new CreateCard(this.totalCard);

        return {
            player1,
            player2,
            player3,
            left
        };
    }
};