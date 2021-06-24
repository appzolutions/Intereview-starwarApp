import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/models/people';

@Component({
  selector: 'character-component',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: People;
  showLoader = true;
  constructor() { }

  ngOnInit(): void {
    if (this.character)
     this.showLoader = false;
    console.log('gogo:: ', this.character)
  }

}
