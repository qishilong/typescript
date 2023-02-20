import { Dictionary } from "./dictionary";

const dictionary = new Dictionary<string, number>();

dictionary.set("a", 1);
dictionary.set("b", 2);
dictionary.set("c", 3);
dictionary.set("d", 4);

dictionary.forEach((key, value) => {
    console.log(`${key}${value}`);
});

console.log("当前键值对的数量", dictionary.size);

dictionary.set("e", 5);

dictionary.forEach((key, value) => {
    console.log(`${key}${value}`);
});

console.log("当前键值对的数量", dictionary.size);

dictionary.delete("e");

dictionary.forEach((key, value) => {
    console.log(`${key}${value}`);
});

console.log("当前键值对的数量", dictionary.size);

console.log(dictionary.has("a"), dictionary.has("e"));
