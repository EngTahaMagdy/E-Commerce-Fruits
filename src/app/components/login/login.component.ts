import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msgError:boolean=false;
  constructor(private auth:AuthService,private router:Router,private title:Title) {
    this.title.setTitle('Login')
   }

  ngOnInit() {
  }
  login(form)
  {
    let result=form.value;
    this.auth.login(result.email,result.password)
    .then(()=>{
      this.router.navigate(['home'])
      })
      .catch(err=>this.msgError=true)
  }

}
