interface type {
    sound: "嘎嘎嘎";
    swim(): boolean;
}

const types: type = {
    sound: "嘎嘎嘎",
    swim() {
        return true;
    }
};


interface Duck {
    sound: "嘎嘎嘎";
    swim(): void;
}

let person = {
    name: "伪装成鸭子的人",
    age: 11,
    sound: "嘎嘎嘎" as "嘎嘎嘎",
    swim() {
        console.log(this.name + "正在游泳，并发出了" + this.sound + "的声音");
    }
};

let duck: Duck = {
    sound: "嘎嘎嘎" as "嘎嘎嘎",
    swim() {
        console.log(this.name + "正在游泳，并发出了" + this.sound + "的声音");
    }
};

duck = person;

interface Condition {
    (n: number, i: number): boolean;
}

function sum(numbers: number[], callBack: Condition) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        const n = numbers[i];
        if (callBack(n, i)) {
            s += n;
        }
    }
    return s;
}

const result1 = sum([3, 4, 5, 7, 11], n => n % 2 !== 0);
console.log(result1);