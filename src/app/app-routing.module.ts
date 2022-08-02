import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RecomHotelsComponent } from './Components/recom-hotels/recom-hotels.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rechotel', component: RecomHotelsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
