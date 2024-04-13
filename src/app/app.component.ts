import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MEMO';
  said : string = "";
  speech : Array<string> = new Array<string>
  say() {
    if(this.said != '') {
      this.speech.push(this.said)
      this.said = ''
    }
    else {
      alert('u have to share something')
    }
  }
  
}
