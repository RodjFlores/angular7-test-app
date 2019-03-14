import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { TaurixAPIService } from '../taurix-api.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title = "Details"
  FirstName;LastName;email;ID;
  validateForm: FormGroup;

  constructor(private router: ActivatedRoute,
              private taurixapiservice: TaurixAPIService,
              private fb: FormBuilder,
              private route:Router) { }

  ngOnInit() {
    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.ID = id;
    this.fillData(this.ID);

    this.validateForm = this.fb.group({
      FirstName         : [ '', [ Validators.required, Validators.minLength(3) ] ],
      LastName         : [ '', [ Validators.required, Validators.minLength(3) ] ],
      email            : [ '', [ Validators.email, Validators.required ] ]
    });

    console.log(this.validateForm.controls.FirstName)
    console.log(this.validateForm.controls.LastName)
    console.log(this.validateForm.controls.email);

    console.log(this.validateForm.status);


  }

  update(){
    this.taurixapiservice.update(this.FirstName,this.LastName,this.email,this.ID)
    .then(res => this.route.navigate(['/passengers']))
  }

  fillData(id){
    this.taurixapiservice.getPassenger(id)
    .then(res => {
      this.FirstName = res["passenger"].FirstName
      this.LastName = res["passenger"].LastName
      this.email = res["passenger"].EmailAddress

      console.log(res["passenger"].PassengerID)
      console.log(res["passenger"].FirstName)
      console.log(res["passenger"].LastName)
      console.log(res["passenger"].EmailAddress)
    }) 
  }

  submitForm(): void {
    console.log(this.FirstName)
    console.log(this.LastName)
    console.log(this.email)
    this.update();
  }
}
