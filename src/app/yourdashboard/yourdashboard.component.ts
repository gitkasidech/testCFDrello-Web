import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-yourdashboard',
  templateUrl: './yourdashboard.component.html'
  
})
export class YourdashboardComponent implements OnInit {


  constructor(public http: Http, private router: Router) {}
  ngOnInit() {
    
  }
  LinkCreate(){
    this.router.navigate(['/create']);
  }

}
