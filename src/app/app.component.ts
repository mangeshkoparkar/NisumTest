import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:String="this is first component program.";
  isChecked:boolean=true;
  onClickMe(){
    this.isChecked=!this.isChecked;
  }
}
