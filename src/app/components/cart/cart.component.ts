import { Component, OnInit } from '@angular/core';
//import { CartService } from 'src/app/services/cart.service';
//import { Shopping } from 'src/app/interfaces/shopping.interface';
import { CartService} from '../../services/cart.service';
import {Shopping} from '../../interfaces/shopping.interface'
import { UserData } from '../../interfaces/userData.interface';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCart:Shopping[]
  disableBtn=false;
  orderBtn=false;
  x:UserData[];
  USER
  sumTotal=0;

  constructor(private cs:CartService, private router:Router ,private title:Title) {
    this.title.setTitle('My Cart')

  
    this.cs.getNameUser().subscribe(data=> this.x =data);

    
    setTimeout(() => {
      this.USER=this.x[0].name;
      console.log("Outer Observable:"+ this.x[0].name);
    }, 2000);







  }
  ngOnInit() {
    
    this.cs.getCart().subscribe(cart=>{
      this.shoppingCart=cart.map(shopping=>{
        return {
          id:shopping.payload.doc.id,
          name:shopping.payload.doc.data()['name'],
          price:shopping.payload.doc.data()['price'],
          amount:shopping.payload.doc.data()['amount']

         // ...shopping.payload.doc.data()
        }
      })

    })





  }

  delete(index)
  {
    this.cs.delete(this.shoppingCart[index].id);
  }
  save(index)
  {
    this.cs.save(this.shoppingCart[index].id,this.shoppingCart[index].amount)
  }

  totalGood()
  {
  
    for(let i=0;i<this.shoppingCart.length;i++)
    {
       this.sumTotal +=this.shoppingCart[i].amount * this.shoppingCart[i].price;

    }
   // alert('sum ='+this.sumTotal);
    this.disableBtn=true;

  }

  


 /*
    this.cs.getNameUser().subscribe(data=> {    
      this.x= data.map(shopping=>{
        return {
          id:shopping.payload.doc.id,
          name:shopping.payload.doc.data()['name'],
          address:shopping.payload.doc.data()['address']
        }
      })
      alert("INner Observable"+ this.x['id']);
    })
   */


  order()
  { 

    let dataOrdered:Object=[];
    for(let i=0;i<this.shoppingCart.length;i++)
    {
      dataOrdered ={
        name:this.shoppingCart[i].name,
        amount:this.shoppingCart[i].amount,
        price:this.shoppingCart[i].price,
       // user:x.name,
       // addressUser:x.address
      }
      this.cs.addOrder(dataOrdered).then()
      this.orderBtn=true;
    }
  

    
  }
  goHome()
  {
    this.router.navigate(['/home']);
  }


}




