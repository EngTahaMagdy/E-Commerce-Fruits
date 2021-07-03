import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GoodsService } from '../../services/goods.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

@ViewChild('image', {static: false}) img:ElementRef
goodsItem;
  constructor( private good:GoodsService,private router:Router,private title:Title) {
    this.title.setTitle('Dashboard')

   }

  ngOnInit() {


/*Get All Data From Goods*/ 
this.good.getGoods().subscribe(goods=>{
  this.goodsItem=goods.map(shopping=>{
    return {
      id:shopping.payload.doc.id,
      name:shopping.payload.doc.data()['name'],
      price:shopping.payload.doc.data()['price'],
      photoUrl:shopping.payload.doc.data()['photoUrl']

    
    }
  })

})

/*End */

  }
  addNewGood(form)
  {
    let name=form.value.name,
      price=form.value.price,
      image=this.img.nativeElement.files[0];

    //console.log(this.img.nativeElement.files)
    this.good.addNewGood(name,price,image);
  }
  goHome()
  {
    this.router.navigate(['/home'])
  }

  delete(index)
  {
    this.good.delete(this.goodsItem[index].id);
  }
  save(index)
  {
    this.good.save(this.goodsItem[index].id,this.goodsItem[index].price)
  }
  
}
