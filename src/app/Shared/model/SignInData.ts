export class SignInData {
  private username: string;
  private password: string;

  constructor(login: string, password: string) {
    this.username = login;
    this.password = password;
  }

  getLogin(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }
}
