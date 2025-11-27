import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  template: `
    <div class="wrap" style="padding:32px 16px">
      <h2>Miembros</h2>
      <p>Listado de miembros que participaron en el boletín informativo.</p>
      <ul>
        <li>Barry Elad — Autor principal</li>
        <li>Equipo de Investigación — Contribuciones</li>
        <li>Editor — Revisión</li>
      </ul>
      <p>Puedes editar este contenido directamente en el componente.</p>
    </div>
  `,
  styles: []
})
export class MembersComponent {}
