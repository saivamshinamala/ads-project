import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CreateAdsComponent } from './create-ads/create-ads.component';
import { PromoteAdsComponent } from './promote-ads/promote-ads.component';

const routes: Routes = [
  {path: "", component: CreateAdsComponent},
  {path: "promote-ad", component: PromoteAdsComponent},
  {path:"card", component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
