import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Forms';

  defaultCountry:string = 'India'

  firstName:string = ''
  lastName:string = ''
  emailName:string = ''
  dob:string = ''
  gender: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  userName: string = '';
  IsAgreed: boolean = false;

  @ViewChild('registrationField') form!:NgForm

 onFormSubmitted(form:NgForm){
    console.log(form);
    // console.log(form.value.firstname);
    // console.log(form.value.lastname);
    // console.log(form.value.gender);
    // console.log(form.value.city);


     this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.emailName = this.form.value.email;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postal;
    this.userName = this.form.value.username;
    this.dob = this.form.value.dob;
    this.IsAgreed = this.form.value.agreement;

    // this.form.reset()

    this.form.form.patchValue({
       gender:'male',
       address:{
          country:'India'
       }
    })
 }

 genders = [
    {id: 'check-male', value : 'male', display : 'Male'},
    {id: 'check-female', value : 'female', display : 'Female'},
    {id: 'check-other', value : 'other', display : 'Other'}
 ]

 GenrateUsername(){
  let username = ''
    if(this.firstName.length >= 3){
        username += this.firstName.slice(0, 3)
    } else {
        username += this.firstName
    }

     if(this.lastName.length >= 3){
        username += this.lastName.slice(0, 3)
    } else {
        username += this.lastName
    }

    let dataTime = new Date(this.dob)
     username += dataTime.getFullYear()
    username = username.toLowerCase()

    console.log(username);

    // this.form.controls['username'].value = username

    // this.form.setValue({
    //    firstname: this.form.value.firstname,
    //    lastname : this.form.value.lastname,
    //    email: this.form.value.email,
    //    phone:this.form.value.phone,
    //    dob:this.form.value.dob,
    //    username: username,
    //    gender:this.form.value.gender,
    //    address:{
    //       str1 : this.form.value.address.str1,
    //       str2 : this.form.value.address.str2,
    //       country:this.form.value.address.country,
    //       city: this.form.value.address.city,
    //       region:this.form.value.address.region,
    //       postal:this.form.value.address.postal
    //    }

    // })

    this.form.form.patchValue({
       username : username,
       address:{
         country : 'Japan'
       }
    })

 }
}
