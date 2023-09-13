import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public OnNewCharacter: EventEmitter<Character> = new EventEmitter();
  public errorMessage: string = '';

  public character: Character = {
    name: '',
    power: 0,
  };

  createCharacter(): void {
    if (
      this.character.name.length > 0 &&
      this.character.power.toString.length > 0
    ) {
      this.OnNewCharacter.emit({ ...this.character });
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Debe rellenar todos los campos';
      console.log(this.errorMessage);
    }

    //Reset values
    this.character.name = '';
    this.character.power = 0;
  }
}
