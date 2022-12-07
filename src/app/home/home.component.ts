import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
 title = 'formula';
 submitted:boolean =false;
 topics =['angular','react','vue'];
 userModel = new User('vishal','robot@g.com', 9749835934,'default','morning',true);
 topicHasError:boolean=true;

 constructor(private enrol:EnrollmentService ){}
    onSubmit(userForm:any){
    console.log(userForm)
    this.submitted=true;
    this.enrol.enroll(this.userModel).subscribe(
      data =>console.log("success",data),
      error =>console.error('ERROR',error)
    )
  }
  validateTopic(value:any){
    if( value ==='default'){
     this.topicHasError= true;
        }
        else{
         this.topicHasError=false;
        }
   }
}
