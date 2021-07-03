import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireStorageModule,BUCKET} from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
//import { AngularFireStorageModule} from '@angular/fire/storage';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule, Routes} from '@angular/router';
import { CartGuardGuard } from './cart-guard.guard';
import { SearchPipe } from './search.pipe';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart',component:CartComponent,
  canActivate: [CartGuardGuard]},
  {path:'goods',component:GoodsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    GoodsComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(
      {
      apiKey: "AIzaSyCmb7eR58NDEyJ1fLaqwPiss-jPA4nc_2Q",
      authDomain: "market-e5fe1.firebaseapp.com",
      projectId: "market-e5fe1",
      storageBucket: "market-e5fe1.appspot.com",
      messagingSenderId: "666012097994",
      appId: "1:666012097994:web:3876b23f9640fcbfdb4333",
      measurementId: "G-6MF5PEPJS0"
    }
    ),
    
    AngularFirestoreModule,
    
    AngularFireStorageModule,
    AngularFireAuthModule ,
    RouterModule.forRoot(routes),
    FormsModule,
    //FontAwesomeModule

  ],
  providers: [
    //{
      //provide: BUCKET, useValue: 'gs://angular-firebase-rxjs.appspot.com'
    //}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


