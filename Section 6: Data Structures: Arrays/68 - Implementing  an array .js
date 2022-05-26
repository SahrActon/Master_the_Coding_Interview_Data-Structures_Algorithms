class MyArray2 {
    constructor() {
        this.length = 0;
        this.data = {} // this is an object which we can use to build adn store our datasets
    }

    // the index is used to see which position we want to go to.
    get(index) {
        return this.data[index]
    }

    // Push an element to the array dataset
    // Item - this will be the item that we want to push as the element within the array dataset
    push(item) {
        this.data[this.length] = item // we are adding our item the last index of the array
        this.length++; // everytime we add to the array we have to increase the size by 1
        return this.length; // todo - why do we need to return this item
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        console.log("This is the last item " + lastItem); // this is the last item

        delete this.data[this.length - 1];
        this.length--;
        return lastItem; // todo - why do we need to return this item
    }

    // this index will be the position(item) that we want to delete
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;  // todo - why do we need to return this item
    }

    shiftItems(index) {

        // we are starting from the specified index,
        // so that we can shift the items from where the index starts from
        // then loop to the end
        // shifting the items to the left by 1 = e.g. [0,1,2,3] -> [1,2,3]

        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this - 1]; // delete the last item
        this.length--; // we decrease the length by 1
    }


}

const newArray = new MyArray2();
// adding elements to the array
newArray.push("hi");
newArray.push("!");
newArray.push("how");
newArray.push("are");
newArray.push("you");
newArray.push("you");

// deleting elements to the array
newArray.pop();
newArray.delete(1)


console.log(newArray)
