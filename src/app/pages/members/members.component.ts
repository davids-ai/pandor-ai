import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  template: `
    <div style="padding:32px">
      <h2>Miembros (deshabilitado)</h2>
      <p>Esta sección ha sido deshabilitada. Ir al <a routerLink="/sq-article">boletín</a>.</p>
    </div>
  `
})
export class MembersComponent {}
