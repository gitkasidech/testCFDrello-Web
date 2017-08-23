import { Component, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule, } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

// import { Popup } from 'ng2-opd-popup';


import { YourdashboardComponent } from '../yourdashboard/yourdashboard.component';
declare var Trello: any;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [Modal]
})
export class CreateComponent implements OnInit {

      boards = ['Internship', 'Msebooks','ยินดีต้อนรับบอร์ดนี่'];
       
   
    constructor(public http: Http, private router: Router, public modal: Modal) { }
    ngOnInit() {
        
    }
    
    completeCards(event){
      this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('Completed cards')
      .body(`
          <h4>Cards in lists with these names</h4>
          <form class="w3-container w3-card-4">
              <h2>Checkboxes</h2>
              <p>
              <input class="w3-check" type="checkbox" checked="checked">
              <label>Milk</label></p>
              <p>
              <input class="w3-check" type="checkbox">
              <label> Sugar</label></p>
              <p>
              <input class="w3-check" type="checkbox" disabled>
              <label>Lemon (Disabled)</label></p>
          </form>
           `)
      .open();
  }

 inprogressCards(){
    this.modal.alert()
    .size('lg')
    .showClose(true)
    .title('Inprogress cards')
    .body(`
        <h4>Cards in lists with these names</h4>
        
        `)
    .open();
}
backlogCards(){
  this.modal.alert()
  .size('lg')
  .showClose(true)
  .title('Backlog cards')
  .body(`
      <h4>Cards in lists with these names</h4>
      `)
  .open();
}

  //  this.http.get(' http://date.jsontest.com') 
  //         .map((res: Response) => res.json())
  //         .subscribe(res => {
  //           // this.result = res;
  //           console.log(res);
            
  //           // this.router.navigate(['/create']);
            
  //       });
}
