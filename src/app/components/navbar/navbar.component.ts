import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
import { AuthService } from '../../services/auth.service';

import{Router} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUser:boolean=false;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.auth.user.subscribe(user=>
      {
        if(user)//contain data
        {
          this.isUser=true;
          this.auth.userId=user.uid
        }
        else//not contain data equel null
        {
          this.isUser=false
          this.auth.userId=''
        }
      })
  }
  logout()
  {
    this.auth.logout()
    .then(()=>this.router.navigate['home'])
  }

}
