import {Component} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-component',
  templateUrl: 'drag-drop.component.html',
  styleUrls: ['drag-drop.component.scss'],
})
export class DragDropComponent {
  todo = ['いか', 'たこ', 'にら', 'たまご'];

  done = ['豚肉', 'とまと', 'キャベツ', 'しお', 'コーン'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
