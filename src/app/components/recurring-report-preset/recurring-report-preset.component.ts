import { Component, OnInit } from '@angular/core';
import { RecurrenceItem } from 'src/app/models/recurrence-item.model';

@Component({
  selector: 'app-recurring-report-preset',
  templateUrl: './recurring-report-preset.component.html',
  styleUrls: ['./recurring-report-preset.component.scss'],
})
export class RecurringReportPresetComponent implements OnInit {
  recurrenceList: RecurrenceItem[] = [];
  constructor() {}

  ngOnInit(): void {
    this.recurrenceList = [
      {
        title: 'Recurrence list 0001',
        author_name: 'Max Mustermann',
        date: '27.04.2021',
        print_size: 'A3 Portait',
        print_type: 'Standard',
        recurrence_type: 'Weekly',
        days: ['Monday', 'Tuesday', 'Wednesday'],
        date_start: '27.04.2021',
        date_end: '26.04.2022',
      },
      {
        title: 'Recurrence list 0022',
        author_name: 'Max Mustermann',
        date: '27.04.2021',
        print_size: 'A3 Portait',
        print_type: 'Standard',
        recurrence_type: 'Weekly',
        days: ['Monday', 'Tuesday', 'Wednesday'],
        date_start: '27.04.2021',
        date_end: '26.04.2022',
      },
      {
        title: 'Recurrence list 0022',
        author_name: 'Max Mustermann',
        date: '27.04.2021',
        print_size: 'A3 Portait',
        print_type: 'Standard',
        recurrence_type: 'Weekly',
        days: ['Monday', 'Tuesday', 'Wednesday'],
        date_start: '27.04.2021',
        date_end: '26.04.2022',
      },
    ];
  }
}
