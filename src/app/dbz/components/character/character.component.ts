import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent{

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  public emitCharacter():void {
    console.log('Character Component')
    console.log(this.character);

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }

}
