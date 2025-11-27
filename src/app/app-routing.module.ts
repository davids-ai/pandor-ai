import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqArticleComponent } from './pages/sq-article/sq-article.component';

const routes: Routes = [
  { path: '', redirectTo: 'sq-article', pathMatch: 'full' },
  { path: 'sq-article', component: SqArticleComponent },
  { path: '**', redirectTo: 'sq-article' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
