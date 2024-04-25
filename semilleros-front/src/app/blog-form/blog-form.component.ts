
import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    EditorModule,
    NgClass
  ],
  template: `
  
  <form [formGroup]="form" class="formgrid grid">
    <div class="field col-12 p-fluid">
      <label for=""> Titulo </label>
      <input type="text" formControlName="title" pInputText placeholder="Title" />
      <div class="text-sm p-2">
        <p class="font-bold  inline">Link: </p>
        <span>http://semilleros/blog</span>
      </div>
    </div>

    <div class="field col-12 ">
      <div class="mb-3">
        <p-button label="Agregar imagen" icon="pi pi-upload" iconPos="right" (onClick)=" media.click() " ></p-button>
        <input type="file" #media class="hidden" (input)="selectImg($event)" accept="image/*" />
      </div>
      <!-- contenedor para ver las imagenes que se van seleccionando  -->
      <div class="border border-dashed h-15rem border-round flex align-items-center justify-content-center ">
        @if (mediaContent.length === 0) {
          <p class="text-center">No hay imagenes seleccionadas</p>
        }
        @for (media of mediaContent; track $index) {
          <img [src]="createImg(media)" alt="media" class="w-10rem h-10rem" />
        }
      </div>
    </div>

    
  </form>
  <div class="field col-12 p-fluid">
      <h2 class="mb-3">Contenido</h2>
      <p-editor [style]="{ height: '320px' }" ></p-editor>
    </div>
  
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogFormComponent {


  form = this.fb.group({
    title: [''],
    content: [''],
    media: [],
    layout: [],
  });

  mediaContent: File[] = []

  constructor(private fb: FormBuilder){ }


  selectImg(event: any) {
    const file = event.target.files[0]
    if (file) {
      this.mediaContent.push(file)
    }
  } 

  createImg(media: File){
    return URL.createObjectURL(media)
  }

}
