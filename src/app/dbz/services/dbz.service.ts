import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Saitama', power: Infinity },
    { id: uuid(), name: 'Genos', power: 52000 },
    { id: uuid(), name: 'Silver Fang', power: 45000 },
    { id: uuid(), name: 'Tornado', power: 48000 },
    { id: uuid(), name: 'Bang', power: 49000 },
    { id: uuid(), name: 'Atomic Samurai', power: 47000 },
    { id: uuid(), name: 'Child Emperor', power: 42000 },
    { id: uuid(), name: 'Metal Knight', power: 51000 },
    { id: uuid(), name: 'King', power: 10 },
    { id: uuid(), name: 'Zombieman', power: 40000 },
    { id: uuid(), name: 'Drive Knight', power: 43000 },
    { id: uuid(), name: 'Pig God', power: 44000 },
    { id: uuid(), name: 'Superalloy Darkshine', power: 46000 },
    { id: uuid(), name: 'Watchdog Man', power: 41000 },
    { id: uuid(), name: 'Flashy Flash', power: 50000 },
    { id: uuid(), name: 'Tanktop Master', power: 47000 },
    { id: uuid(), name: 'Metal Bat', power: 49000 },
    { id: uuid(), name: 'Puri-Puri Prisoner', power: 42000 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  //   this.characters.sort((a, b) => b.power - a.power);
  // }
  deleteCharacterById(id: string): void {
    console.log({id})
    this.characters = this.characters.filter(
      character => character.id !== id
    );
  }
}
