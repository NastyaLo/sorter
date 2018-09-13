class Sorter {
  constructor() {
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    if(!indices) {
        this.arr.sort(this.comparator);
    } else {
        let partOfArr = [];
        for (let i = 0; i < indices.length; i++) {
            partOfArr.push(this.arr[indices[i]]);
        }

        partOfArr.sort(this.comparator);
        indices.sort(this.defaultComparator);

        for (let i = 0; i < indices.length; i++) {
            this.arr[indices[i]] = partOfArr[i];
        }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }

  comparator(a, b) {
      return Number(a) - Number(b);
  }

  defaultComparator(a, b) {
      return Number(a) - Number(b);
  }
}

module.exports = Sorter;
