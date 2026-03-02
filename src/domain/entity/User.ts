export class User {
    private _id: number
    private _name: string
    private _email: string
    private _password: string

  constructor(
    id: number,
    name: string,
    email: string,
    password: string
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this.validate();
  }

    get id(): number {
        return this._id;
    } 

    get name(): string {
        return this._name;
    }

    
    private validate(): void {
      if (!this._name) {
        throw new Error("Name is required");
      }
      if (!this._email) {
        throw new Error("Email is required");
      }
      if (!this._password) {
        throw new Error("Password is required");
      }
    }
}