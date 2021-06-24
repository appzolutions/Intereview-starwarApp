import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'loadCharacterPicture'
})
export class LoadCharacterPicturePipe implements PipeTransform {
  private pictureList = [
    {name: "Luke Skywalker", src: "luke-skywalker.jpeg"},
    {name: "C-3PO",  src: "C-3PO.png"},
    {name: "R2-D2", src: "R2-D2.jpg"},
    {name: "Darth Vader", src: "Darth-Vader.jpg"},
    {name: "Owen Lars", src: "OWEN-LARS.jpeg"},
    {name: "LEIA ORGANA", src: "LEIA-ORGANA.jpg"},
    
  ];
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log("Soso: " + value);
    
    var obj = this.pictureList.find(function(character, index) {
      if(character.name == value)
        return true;
    });
    if (obj)
      return obj.src;
    return 'placeholder.jpg';  
  }

}
