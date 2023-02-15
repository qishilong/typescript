class PageTwo {
    readonly id: string;
    gender: "男" | "女" = "男";
    pid?: string;
    private publishNumber = 3;  // 每天可以发布的文章数量
    private currentNumber = 0;  // 当前可以发布的文章数量
    constructor(public name: string, private age: number) {
        this.id = Math.random().toString();
    }

    set _age(value: number) {
        if (value < 0) {
            this.age = 0;
        } else if (value > 200) {
            this.age = 200;
        } else {
            this.age = value;
        }
    }

    get _age() {
        return Math.floor(this.age);
    }

    publish(title: string) {
        if (this.currentNumber < this.publishNumber) {
            this.currentNumber++;
            console.log("发布了一篇文章" + title, this.currentNumber);
        } else {
            console.log("今天发布的文章数量达到上限");
        }
    }
}

const pagerTwo = new PageTwo("a", 18);
// pagerTwo.age = 19;
pagerTwo._age = 19;
console.log(pagerTwo._age);

pagerTwo.publish("文章1");
pagerTwo.publish("文章2");
pagerTwo.publish("文章3");
pagerTwo.publish("文章4");


