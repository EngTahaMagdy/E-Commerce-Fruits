import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import{ AngularFireStorage} from '@angular/fire/storage'
@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore , private storage:AngularFireStorage) {   }

  getAllGoods(){
        //return this.fs.collection('goods').valueChanges();//can not access id 
        return this.fs.collection('goods').snapshotChanges();
  }

  addNewGood(name:string,price:number,image:File)
  {
    let ref=this.storage.ref('goods/' + image.name);
    ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(photoUrl=>{
        this.fs.collection('goods').add({
          name,
          price,
          photoUrl
        })
      })
    })

  }

  getGoods()
  {
    return this.fs.collection(`goods`).snapshotChanges()
  }

  delete(index)
  {
    return this.fs.doc(`goods/${index}`).delete();
  } 
  save(index,price)
  {
    return this.fs.doc(`goods/${index}`).update({
      price
    });
  }
}
