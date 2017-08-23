import { Component, OnInit, Input, Output, EventEmitter, Attribute } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable, Observer } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { GettokenComponent } from '../gettoken/gettoken.component';



declare var Trello: any;
@Component({
  selector: 'app-yourdashboard',
  templateUrl: './yourdashboard.component.html',
  providers: []
  
  
})
export class YourdashboardComponent implements OnInit {
  key: string;
  
  
  constructor(public http: Http, private router: Router) {}
  ngOnInit() {
    
  }

    LinkCreate(){
      console.log("data");
        //  console.log(this.key);
        // console.log(this.id);
        this.http.get('http://localhost:7777/boards/'+this.key).subscribe(data => {
          // Read the result field from the JSON response.
          console.log(data);
          
    });
        
    }
    

  
  
}