// 将某个对象的name属性的每个单词的首字母大写，然后将对象返回

const obj = {
    name: "alan  a",
    age: 18
};

interface NameString {
    name: string;
}

const firstToUpperCase = <T extends NameString>(obj: T): T => {
    obj.name = obj.name.split(" ").map(item => {
        if (!item) {
            return;
        }
        return item[0].toUpperCase() + item.substring(1);
    }).join(" ");

    return obj;
};

const result1 = firstToUpperCase(obj);
console.log(result1);