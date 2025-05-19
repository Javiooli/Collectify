export default class Item {
    constructor(name, description = '', category = '', image = '') {
      this.name = name;
      this.description = description;
      this.category = category;
      this.image = image;
    }
  }