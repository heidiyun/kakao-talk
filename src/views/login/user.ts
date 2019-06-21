export default class User {
  private name: string;
  private email: string;
  private photoURL: string;

  constructor(name: string, email: string, photoURL: string) {
    this.name = name;
    this.email = email;
    this.photoURL = photoURL;
  }
}
