import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user
  userId
  constructor(private _AngularFireAuth:AngularFireAuth) {

    this.user=this._AngularFireAuth.user
  }
  signup(email,password)
  {
    return this._AngularFireAuth.createUserWithEmailAndPassword(email,password)
  }

  login(email,password){
    return this._AngularFireAuth.signInWithEmailAndPassword(email,password);
  }
  logout()
  {
    return this._AngularFireAuth.signOut()
  }
}
