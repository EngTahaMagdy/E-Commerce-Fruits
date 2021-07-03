import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
//import { AuthService } from 'src/app/services/auth.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService ,private fs:AngularFirestore, private router:Router,private title:Title) {
    this.title.setTitle('Sign up')

  }

  ngOnInit() {
  }
signup(form)
{
  let result=form.value

  this.authService.signup(result.email,result.password)
  .then(data=>{
    
    this.addNewUser(data.user.uid,result.name,result.address)
    .then(()=>{
      this.router.navigate(['home'])
    })

  })
  .catch(err=>console.log(err));
  
}


addNewUser(id,name,address)
{
  return this.fs.doc('users/'+id+'/userData/'+id).set({
    name:name,
    address:address
  })
}


}

