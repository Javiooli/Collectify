export default class Collection {
    constructor(name, image = '') {
      this.name = name;
      this.image = image;
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
    }
  }