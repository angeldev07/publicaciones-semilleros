import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    BreadcrumbModule
  ],
  template: `

    <section class="px-3">
      <p-breadcrumb class="max-w-full" [model]="items" [home]="home"></p-breadcrumb>
    </section>
  
  
  
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
      this.items = [{ label: 'Publicaciones' }, { label: 'Crear Blog' }];

      this.home = { icon: 'pi pi-home', };
  }


}
