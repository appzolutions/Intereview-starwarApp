import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadCharacterPicturePipe } from '../../pipes/load-character-picture.pipe';



@NgModule({
  declarations: [
    LoadCharacterPicturePipe
  ],
  imports: [
    CommonModule,
  ]
})
export class LandingPageModule { }
