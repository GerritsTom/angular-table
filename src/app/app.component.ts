import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [
      {id: '1', firstName: 'Foo', lastName: 'Bar'},
      {id: '2', firstName: 'SomeOne', lastName: 'Youknow'},
      {id: '3', firstName: 'Lamout', lastName: 'Ofinspiration'},
      {id: '4', firstName: 'Foo', lastName: 'Bar'},
      {id: '5', firstName: 'Foo', lastName: 'Bar'},
      {id: '6', firstName: 'Foo', lastName: 'Bar'},
      {id: '7', firstName: 'Foo', lastName: 'Bar'},
      {id: '8', firstName: 'Foo', lastName: 'Bar'},
      {id: '9', firstName: 'Foo', lastName: 'Bar'},
      {id: '10', firstName: 'Foo', lastName: 'Bar'},
      {id: '11', firstName: 'Foo', lastName: 'Bar'},
      {id: '12', firstName: 'Foo', lastName: 'Bar'},
      {id: '13', firstName: 'Foo', lastName: 'Bar'},
      {id: '14', firstName: 'Foo', lastName: 'Bar'}
    ];
  title = 'angular-table';
  dtTrigger: Subject<{}> = new Subject<{}>();

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  onTippEdit(p: Person) {
    console.log(p);
  }
}
