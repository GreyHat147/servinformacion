import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  getData: any;
  postData: any;
  dataPost: any;
  updateData: any;
  dataUpdate: any;
  deleteData: any;
  dataDelete: any;
  constructor(public apiService: ApiService) {}

  ngOnInit() {
  }

  get() {
    this.apiService.get()
    .subscribe((data) => {
      console.log(data);
      this.getData = data;
    });
  }

  post() {
    this.apiService.post(this.dataPost)
    .subscribe((data) => {
      this.postData = data;
    });
  }

  update() {
    this.apiService.update(this.dataUpdate)
    .subscribe((data) => {
      this.updateData = data;
    });
  }

  delete() {
    this.apiService.delete(this.dataDelete)
    .subscribe((data) => {
      this.deleteData = data;
    });
  }

}
