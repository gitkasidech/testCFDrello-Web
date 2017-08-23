import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable, Observer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gettoken',
  templateUrl: './gettoken.component.html',
  styleUrls: ['./gettoken.component.css'],
  
})
export class GettokenComponent implements OnInit {
  // @Output() token:EventEmitter<string> = new EventEmitter< string >();
  //           id:EventEmitter<string> = new EventEmitter< string >();
  id;
  token;
  
  
  constructor(public http: Http, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    
    this.token = this.route.snapshot.params['token'];
    this.id = this.route.snapshot.params['id'];
    console.log("token: ",this.token);
    console.log("id: ",this.id);
    localStorage.setItem("token",this.token);
    console.log(localStorage.getItem("token"));
    this.router.navigate(['/yourdashboard']);
    return this.id;
  }
  


  
}
