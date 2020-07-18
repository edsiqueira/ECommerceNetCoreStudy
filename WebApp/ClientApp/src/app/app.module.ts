import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './user/login/login.component';
import { RouteGuard } from './routes-guard/route.guard';
import { UserService } from './services/user/user.service';
import { RegisterComponent } from './user/register/register.component';
import { ProductService } from './services/product/product.service';
import { ProductSearchComponent } from './search/productSearch.component';
import { StoreSearchComponent } from './store/search/storeSearch.component';
import { StoreProductComponent } from './store/product/storeProduct.component';
import { StoreFinishComponent } from './store/finish/storeFinish.component';
import { OrderService } from './services/order/order.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CounterComponent,
        FetchDataComponent,
        ProductComponent,
        LoginComponent,
        RegisterComponent,
        ProductSearchComponent,
        StoreSearchComponent,
        StoreProductComponent,
        StoreFinishComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'product', component: ProductComponent, canActivate: [RouteGuard] },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'productSearch', component: ProductSearchComponent, canActivate: [RouteGuard] },
            { path: 'storeProduct', component: StoreProductComponent },
            { path: 'storeFinish', component: StoreFinishComponent, canActivate: [RouteGuard] }
        ])
    ],
    providers: [UserService, ProductService, OrderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
