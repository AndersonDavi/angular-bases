import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public removedHero?: string;

  public heroNames: string[] = [
    'Spiderman',
    'Iron man',
    'Saitama',
    'David Martinez',
  ];
  removeLastHero(): void {
    this.removedHero = this.heroNames.pop();
  }
}
