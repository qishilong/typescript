class Page {
    readonly id: string;
    gender: "男" | "女" = "男";
    pid?: string;
    private publishNumber = 3;  // 每天可以发布的文章数量
    private currentNumber = 0;  // 当前可以发布的文章数量
    constructor(public name: string, public age: number) {
        this.id = Math.random().toString();
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

const pager = new Page("a", 18);
pager.age = 19;

pager.publish("文章1");
pager.publish("文章2");
pager.publish("文章3");
pager.publish("文章4");


