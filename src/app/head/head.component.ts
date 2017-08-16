import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
// import Trello from 'Trello';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logout(){
    localStorage.clear();
  }

}



