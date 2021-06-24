import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Observable, Subscription } from 'rxjs'
import { People } from 'src/app/models/people';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public characterInput;
  public charactersArray: any;
  public loadedCharacter: Observable<People>;
  public landed = true;
  private dataFeedSub: Subscription;


  /* for view */
  public showLoader = false;
  constructor(public characterService: CharacterService) { }

  ngOnInit(): void {
    this.showLoader = true;
    this.dataFeedSub = this.characterService.loadDefaultFeed().subscribe(res => {
       console.log(res);
      this.charactersArray = res;
      this.showLoader = false;
     });
  }

  lookForCharacter() {
    this.landed = false;
    this.showLoader = true;
    this.loadedCharacter = this.characterService.loadSingleCharactor(this.characterInput);
    console.log('Characters ..');
  }

  inputValidator($event) {
    console.log(this.characterInput.replace(/[^0-9]*/g, ''));
    this.characterInput = this.characterInput.replace(/[^0-9]*/g, '');
  }
  destroyCharacter ($event) {
    console.log($event);
    this.landed = true;
    this.characterInput="";
  }
  ngOnDestroy() {
    // Unsubscribe when the component is destroyed
    this.dataFeedSub.unsubscribe();
  }

}
