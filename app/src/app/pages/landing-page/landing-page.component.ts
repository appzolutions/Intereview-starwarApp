import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public characterInput;
  public charactersArray: any;
  public loadedCharacter;

  /* for view */
  public showLoader = false;
  constructor(public characterService: CharacterService) { }

  ngOnInit(): void {
    this.showLoader = true;
     this.characterService.loadDefaultFeed().subscribe(res => {
       console.log(res);
      this.charactersArray = res;
      this.showLoader = false;
     });
  }

  lookForCharacter() {
    this.showLoader = true;
    this.loadedCharacter = this.characterService.loadSingleCharactor(this.characterInput);
    console.log('Characters ..');
  }


}
