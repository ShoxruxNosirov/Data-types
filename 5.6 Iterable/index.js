let obj = {
    start: 1,
    end: 7,
    [Symbol.iterator]() {
        return {
            start: this.start,
            end: this.end,
            next() {
                if (this.start <= this.end) {
                    return { value: Math.pow(this.start++, 2)*2, done: false }
                }
                return { done: true }
            }
        }
    }
}
console.log([...obj]);

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(obj, num => 2 * num);
console.log(arr);   //  [ 4,  16,  36, 64, 100, 144, 196 ]