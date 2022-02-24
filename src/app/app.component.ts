import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'regform';

  citylist=[ 'Durgapur','kolkata','Burdwan','Lucknow','Delhi'];
  onSubmit(RefForm : NgForm){
    console.log(RefForm.value);
    if(RefForm.value == 'True')
     alert("The Data is stored oin server")
    else
    alert("Pls Enter the Data")
  }
  
}
