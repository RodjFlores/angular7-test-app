import { Component, OnInit } from '@angular/core';
import { TaurixAPIService } from '../taurix-api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';




@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {
  title = 'Passengers';
  public passengerList = {};

  constructor(private taurixapieservice:TaurixAPIService,
              private nzMessageService: NzMessageService,
              private router: Router){
      
  }

  ngOnInit() {
    this.fillTable();
  }

  cancel(): void {
  }

  confirm(id): void {
    this.nzMessageService.info('Deleted: ' + id);
    /*let promise = new Promise((res,rej) => {
      this.taurixapieservice.delete(id);
    }).then(res => {
      this.fillTable()
      console.log("finished on client side")
    });*/

    this.taurixapieservice.delete(id)
    .then(res => console.log(res))
    .then(res => this.fillTable())
  
  }

  fillTable(){
    this.taurixapieservice.getAll()
    .then(result => this.passengerList = result)
    .then(res => console.log(this.passengerList))
  } 

  onSelect(id){
    this.router.navigate(['/passengers',id])
  }
}
