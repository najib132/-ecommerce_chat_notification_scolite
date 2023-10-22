import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FlashMessagesModule } from 'flash-messages-angular';
import { FooterComponent } from './components/acceuil/footer/footer.component';
import { MenuComponent } from './components/acceuil/menu/menu.component';
import { PageNotFoundComponent } from './components/acceuil/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/acceuil/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IndexTinghirComponent } from './components/tinghir/index-tinghir/index-tinghir.component';
import { AddTinghirComponent } from './components/tinghir/add-tinghir/add-tinghir.component';
import { ShowTinghirComponent } from './components/tinghir/show-tinghir/show-tinghir.component';
import { EditTinghirComponent } from './components/tinghir/edit-tinghir/edit-tinghir.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddAnnonceComponent } from './components/annonces/add-annonce/add-annonce.component';
import { EditAnnonceComponent } from './components/annonces/edit-annonce/edit-annonce.component';
import { ShowAnnonceComponent } from './components/annonces/show-annonce/show-annonce.component';
import { IndexAnnonceComponent } from './components/annonces/index-annonce/index-annonce.component';
import { LandingPageComponent } from './components/annonces/landing-page/landing-page.component';
import { CategoryComponent } from './components/category/category.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { ChatComponent } from './components/chat/chat.component';
import { UsersComponent } from './components/users/users.component';
import { ShowUserComponent } from './components/users/show-user/show-user.component';
import { ListUsersComponent } from './components/chat/list-users/list-users.component';
import { ChatBodyGroupComponent } from './components/chat/chat-body-group/chat-body-group.component';
import { ChatBodyPrivateComponent } from './components/chat/chat-body-private/chat-body-private.component';
import { CartComponent } from './components/cart/cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    MenuComponent,
    PageNotFoundComponent,
    NavbarComponent,
    IndexTinghirComponent,
    AddTinghirComponent,
    ShowTinghirComponent,
    EditTinghirComponent,
    RegisterComponent,
    LoginComponent,
    AddAnnonceComponent,
    EditAnnonceComponent,
    ShowAnnonceComponent,
    IndexAnnonceComponent,
    LandingPageComponent,
    CategoryComponent,
    ChatComponent,
    UsersComponent,
    ShowUserComponent,
    ListUsersComponent,
    ChatBodyGroupComponent,
    ChatBodyPrivateComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    ReactiveFormsModule

  ],
  providers: [{ 
    provide : HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
