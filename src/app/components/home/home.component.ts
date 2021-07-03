import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
//import { Good } from 'src/app/interfaces/good.interface';
//import { CartService } from 'src/app/services/cart.service';
//import { GoodsService } from 'src/app/services/goods.service';
import { Good } from '../../interfaces/good.interface';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { GoodsService } from '../../services/goods.service';
import {SearchPipe} from '../../search.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  goods:Good[]=[]
  goodsObervable:Subscription;
  buyBtn:boolean=false;
  index=-1
  isUser:boolean=false;
  searchItem;
  constructor(private gs:GoodsService,private cs:CartService, private auth: AuthService,private title:Title) {
    this.title.setTitle('Home')

   }

  ngOnInit() {
    //this.gs.getAllGoods().subscribe(data=>this.goods=data); //can not access id 
      this.goodsObervable= this.gs.getAllGoods().subscribe(data=>{
        this.goods= data.map(element=>{
          return{
            id:element.payload.doc.id,
            name:element.payload.doc.data()['name'],
            price:element.payload.doc.data()['price'],
            photoUrl:element.payload.doc.data()['photoUrl']
            //...element.payload.doc.data()
          }
        })

      });


      this.auth.user.subscribe(user=>{
        if(user) this.isUser=true;
        else this.isUser=false;
      });
  }

  addToCart(indx)
  {
    this.index=indx;

  }
  buy(amount)
  {
    if(amount>=1)
    {
    let selectedGood=this.goods[this.index];
    let data={
      name:selectedGood.name,
      price:selectedGood.price,
      amount:+amount
    }
    this.cs.addToCart(data).then(()=> this.index=-1)
  }else{
    this.buyBtn=true;
  }
  }


  




  ngOnDestroy(){
    this.goodsObervable.unsubscribe();
  }

}
