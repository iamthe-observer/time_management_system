export class User {
  // readonly name: string;
  // public age: number;
  // private dob: Date;

  constructor(readonly name: string, public age: number, private dob: Date) {}

  format() {
    return `your name is ${this.name} and your age is ${this.age}||${this.dob}`;
  }
}
