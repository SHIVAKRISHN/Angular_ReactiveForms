import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router'

import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
      path: 'nameEditor',
      component : NameEditorComponent
      },
      {
        path: 'profile',
        component : ProfileComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
