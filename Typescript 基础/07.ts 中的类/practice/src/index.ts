import { CreateCard } from "./class";

const cards = new CreateCard();

cards.shuffle();
console.log("=================洗牌之后=================");

console.log(cards.printCard());
const allPlayers = cards.publish();

console.log("=================第一个玩家=================");

console.log(allPlayers.player1.printCard());

console.log("=================第二个玩家=================");

console.log(allPlayers.player2.printCard());

console.log("=================第三个玩家=================");

console.log(allPlayers.player3.printCard());

console.log("=================桌面上的牌=================");

console.log(allPlayers.left.printCard());
