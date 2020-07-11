import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-my-Value',
  templateUrl: './my-Value.component.html',
  styleUrls: ['./my-Value.component.css']
})
export class MyValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getValues();
  }

  // tslint:disable-next-line:typedef
  getValues()
  {
    this.http.get('http://localhost:5000/api/Values').subscribe(response => {
    this.values  = response;
    }, error => {
      console.log(error);
    }
    );
  }

}
