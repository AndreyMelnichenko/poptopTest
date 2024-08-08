export class User {
  private userName: string;
  
  constructor(userName: string){
    this.userName = userName;
    this.newName(userName);
  }

  private newName(userName: string): void {
    console.log(this.userName);
    console.log(userName);
  }

  private getName(): void {
    this.newName(this.userName);
  }
}
