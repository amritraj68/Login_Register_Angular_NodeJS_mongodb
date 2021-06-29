import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../services/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {

  username = '';
  constructor(private myService:MyserviceService,
  private _router: Router) { 
    this.myService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
      error => this._router.navigate(['/main/login'])
    )
  }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/main/login']);
  }
}

