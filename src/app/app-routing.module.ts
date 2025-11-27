import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqArticleComponent } from './pages/sq-article/sq-article.component';

const routes: Routes = [
  { path: '', component: SqArticleComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
