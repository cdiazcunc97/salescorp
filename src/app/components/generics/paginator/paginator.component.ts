import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() urlBase: string;
  @Input() pageInit: number;
  @Input() currentPage: number;
  @Input() lastPage: number;
  @Input() isLoading: boolean;
  @Input() itemsPerPage: number;

  constructor() { }

  ngOnInit() {
  }

}
