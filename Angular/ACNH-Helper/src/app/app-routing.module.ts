import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsComponent } from './bugs/bugs.component';
import { FishComponent } from './fish/fish.component';
import { PaintingsComponent } from './paintings/paintings.component'

const routes: Routes = [
  { path: 'bug', component: BugsComponent },
  { path: 'fish', component: FishComponent },
  { path: 'paint', component: PaintingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
