import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  id;
  
  constructor(private fs:AngularFirestore,private as:AuthService) { }

  addToCart(data)
  {
    this.id=this.as.userId
    return this.fs.collection(`users/${this.id}/cart`).add(data)
  }
  getCart()
  {
    return this.fs.collection(`users/${this.id}/cart`).snapshotChanges()
  }



  delete(index)
  {
    return this.fs.doc(`users/${this.as.userId}/cart/${index}`).delete();
  } 
  save(index,amount)
  {
    return this.fs.doc(`users/${this.as.userId}/cart/${index}`).update({
      amount
    });
  }

  getNameUser()
  {
   // return this.fs.collection(`users/${this.as.userId}/userData`).snapshotChanges()
      return this.fs.collection(`users/${this.as.userId}/userData`).valueChanges();

  }

  addOrder(data)
  {
    return this.fs.collection(`orders`).add(data)
  }
}
