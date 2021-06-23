import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public characterInput;
  public charactersArray = [];

  /* for view */
  public showLoader = false;
  constructor(public characterServe: CharacterService) { }

  ngOnInit(): void {
    this.charactersArray = this.characterServe.loadDefaultFeed();
  }

  lookForCharacter() {
    this.showLoader = true;
    console.log('Characters ..');
  }


}
