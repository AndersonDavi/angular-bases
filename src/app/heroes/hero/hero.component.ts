import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'saitama';
  public age: number = 23;
  public pic: string = '././assetsOIG.jpeg';

  resetForm(): void {
    this.name = 'saitama';
    this.age = 23;
  }

  changeName(value: string): void {
    //TODO:
    this.name = value;
  }
  birthDay(value: number): void {
    this.age += value;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
}
