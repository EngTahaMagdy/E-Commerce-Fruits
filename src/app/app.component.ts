import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app200';

  constructor(private db: AngularFirestore) {
    const things = db.collection('goods').valueChanges();
    things.subscribe(console.log);

}




}
