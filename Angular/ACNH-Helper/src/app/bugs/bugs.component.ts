import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss'],
})

export class BugsComponent implements OnInit {
  
  @Input()
  result$: Observable<any>;

  constructor(private itemsService: ItemsService) {
    this.result$ = itemsService.resolveItems();
  }

  ngOnInit() {}

}
