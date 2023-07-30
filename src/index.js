export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((item) => {
      if (JSON.stringify(item) === JSON.stringify(character)) {
        throw new Error('The character has already been added');
      }
    });
    return this.members.add(character);
  }

  addAll(...arr) {
    arr.forEach((item) => {
      this.members.add(item);
    });
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
