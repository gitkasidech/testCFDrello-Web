import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Observable, Observer } from 'rxjs';
import { AuthGuard } from '../guards/index';



declare var Trello: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthGuard]

})
export class LoginComponent implements OnInit {
  // router: any;
  // [x: string]: any;
  // routes: any;

  constructor(public http: Http, private router: Router) {}

  ngOnInit() { }

  login() {

    return new Promise(function (resolve) {
      Trello.authorize({
        type: 'redirect',
        name: 'CFDrello Dashboard',
        scope: {
          read: 'true',
          write: 'true'
        },
        expiration: 'never',
        success: function () {
          console.log("Trello" + Trello.token());
          resolve(Trello.token());
        }
      });
    }).then((token) => {
      console.log("Trello2" + token);
      return new Promise((resolver, reject) => {
        Trello.get('members/me',
          { fields: 'id,username,fullName,token' },
          (user, err) => {
            console.log('1', user, err);
            if (!err) {
              reject(err);
            }
            user['token'] = token; //add token in user
            console.log('2', user);
            resolver(user);
          }, (user, err) => {
            console.log('3', user, err);
          });
      }).catch((err) => {
        console.log(err);
      });
    }).then((user) => {
      console.log('Pass');
      console.log(user);
      console.log(JSON.stringify(user));
      const headers = new Headers();
      localStorage.setItem("token",'token')
      console.log(localStorage.getItem("token"))
      headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:7777/authenuser',
        JSON.stringify(user), { headers: headers })
        .map(response => response.json())
        .subscribe(response => {
          if (response.json) {
            console.log("new user");
            this.router.navigate(['/yourdashboard']);
            // this.routes.navigate(['/yourdashboard']);
          } else {
            console.log("have done");
            this.router.navigate(['/yourdashboard']);
          }
        })
      //  .subscribe(err => console.log(err));

    });

  }
}
