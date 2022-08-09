import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SearchComponent } from './Components/search/recom-hotels.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rechotel', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
