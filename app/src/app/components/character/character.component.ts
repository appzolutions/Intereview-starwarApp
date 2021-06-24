import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { People } from 'src/app/models/people';

@Component({
  selector: 'character-component',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input()  character: People;
  @Output() clearCharacter = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
   
  }
  back() {
    this.character = null;
      this.clearCharacter.emit(true);

  }

}
