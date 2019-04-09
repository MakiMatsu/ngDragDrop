import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AppComponent} from './app.component';
import {DragDropComponent} from './drag-drop/drag-drop.component';

@NgModule({
  declarations: [AppComponent, DragDropComponent],
  imports: [BrowserModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent, DragDropComponent],
})
export class AppModule {}
