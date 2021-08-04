import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdsComponent } from './add-ads/add-ads.component';
import { CardComponent } from './card/card.component';
import { CreateAdsComponent } from './create-ads/create-ads.component';
import { PromoteAdsComponent } from './promote-ads/promote-ads.component';

const routes: Routes = [
  { path: "", component: CreateAdsComponent},
  { path: "promote", component: PromoteAdsComponent},
  { path: "add-ad", component: AddAdsComponent},
  { path: "promote-ad", component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
