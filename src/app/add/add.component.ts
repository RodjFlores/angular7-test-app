import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Passenger } from '../passenger';
import { TaurixAPIService } from '../taurix-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  validateForm: FormGroup;
  FirstName; LastName; email;
  title = "Add a Passenger"

  submitForm(): void {
    console.log(this.FirstName)
    console.log(this.LastName)
    console.log(this.email)
    this.taurixapieservice.create(this.FirstName,this.LastName,this.email)
    .then(res => {
      this.onSelect(res["passenger"].PassengerID)
    });
  }


  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder,private taurixapieservice:TaurixAPIService,private router:Router) {
  }

  onSelect(id){
    this.router.navigate(['/passengers',id])
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      FirstName         : [ null, [ Validators.required, Validators.minLength(3) ] ],
      LastName         : [ null, [ Validators.required, Validators.minLength(3) ] ],
      email            : [ null, [ Validators.email, Validators.required ] ]
    });
    console.log(this.validateForm);
  }

}
