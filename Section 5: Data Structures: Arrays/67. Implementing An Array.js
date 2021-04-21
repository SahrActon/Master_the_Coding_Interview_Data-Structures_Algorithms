class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) { // start at the index we want to delete from, go through the end
            // shifting the items to the left by 1 = e.g. [0,1,2,3] -> [1,2,3]
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1] // delete the last item
        this.length--; // decrease the length
    }
}


const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("!");
newArray.delete(0)
newArray.push("are");
newArray.push("nice");
newArray.delete(1)
console.log(newArray);