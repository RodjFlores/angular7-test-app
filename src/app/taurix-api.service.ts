import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from './passenger';
import { resolve } from 'dns';


@Injectable({
  providedIn: 'root'
})
export class TaurixAPIService {

  apiURL: string = 'https://www.taurix.com/api';

  constructor(private httpClient: HttpClient) { }

  public create(firstName,lastName,email){
    let newPassenger = new FormData();
    newPassenger.append('FirstName', firstName);
    newPassenger.append('LastName', lastName);
    newPassenger.append("EmailAddress",email);

    return new Promise((resolve) =>{
      this.httpClient.post(this.apiURL+"/passengers",newPassenger)
      .subscribe(res =>{
        console.log(res)
        resolve(res)
      })
    })
  }

  public update(firstName,lastName,email,id){
    let newPassenger = new FormData();
    newPassenger.append('FirstName', firstName);
    newPassenger.append('LastName', lastName);
    newPassenger.append("EmailAddress",email);
    
    return new Promise((resolve) => {
      this.httpClient.post(this.apiURL+"/passengers/"+id,newPassenger)
      .subscribe(res => {
        resolve(res)
      })
    })
  }

  public delete(id){
    return new Promise((resolve) => {
      this.httpClient.delete(this.apiURL+"/passengers/"+id)
      .subscribe(res => {
        resolve(res)
      })
    })
  }
  public getPassenger(id){
    return new Promise((resolve) => {
      this.httpClient.get(this.apiURL+"/passengers/"+id)
        .subscribe(res => {
          resolve(res)
        })
    })
  }
  public getAll(){
    //return this.httpClient.get('https://www.taurix.com/api/passengers')

    return new Promise((resolve) => {
      this.httpClient.get(this.apiURL+'/passengers')
      .subscribe(res => {
        let passengerArray = []
        for(let passengerData of res["passengers"]){
          passengerArray.push(passengerData);
        }
        resolve(passengerArray);
      })
    })
  }
}
