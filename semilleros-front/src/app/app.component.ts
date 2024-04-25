import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenubarComponent } from './menubar/menubar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BlogFormComponent } from './blog-form/blog-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MenubarComponent, BreadcrumbComponent, BlogFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'semilleros';
}
