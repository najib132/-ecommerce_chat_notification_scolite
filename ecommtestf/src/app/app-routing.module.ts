import { IndexTinghirComponent } from './components/tinghir/index-tinghir/index-tinghir.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTinghirComponent } from './components/tinghir/show-tinghir/show-tinghir.component';
import { AddTinghirComponent } from './components/tinghir/add-tinghir/add-tinghir.component';
import { EditTinghirComponent } from './components/tinghir/edit-tinghir/edit-tinghir.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/acceuil/page-not-found/page-not-found.component';
import { AfterAuthGuard } from './guard/after-auth.guard';
import { AuthGuard } from './guard/auth.guard';
import { ShowAnnonceComponent } from './components/annonces/show-annonce/show-annonce.component';
import { AddAnnonceComponent } from './components/annonces/add-annonce/add-annonce.component';
import { EditAnnonceComponent } from './components/annonces/edit-annonce/edit-annonce.component';
import { IndexAnnonceComponent } from './components/annonces/index-annonce/index-annonce.component';
import { LandingPageComponent } from './components/annonces/landing-page/landing-page.component';
import { ChatComponent } from './components/chat/chat.component';
import { ShowUserComponent } from './components/users/show-user/show-user.component';
import { CartComponent } from './components/cart/cart/cart.component';

const routes: Routes = [

  {path:"", component:LandingPageComponent            }, 
  { path:"annonces",  children:[ 
    { path:"", component:IndexAnnonceComponent              },
    { path:"show/:slug", component:ShowAnnonceComponent  },
    { path:"add", component:AddAnnonceComponent          },
    { path:"edit/:slug", component:EditAnnonceComponent  }, 
    { path:"profil", component:ShowUserComponent  }, 
    { path:"chat", component:ChatComponent  }, 
    { path:"cart", component:CartComponent  }, 
    ], canActivate:[AuthGuard]
  },

  { path:"tinghirs",  children:[
    { path:"", component:IndexTinghirComponent                  },
    { path:"show/:slug", component:ShowTinghirComponent    },
    { path:"add", component:AddTinghirComponent             },
    { path:"edit/:slug", component:EditTinghirComponent     }, 
    ]
  },

  { path:"login",component:LoginComponent,canActivate:[AfterAuthGuard] },
  { path:"register",component:RegisterComponent                        },
  { path: "**", component:PageNotFoundComponent                        } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
