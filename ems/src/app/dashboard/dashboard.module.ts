import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { LeaveComponent } from './components/leave/leave.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AttendanceComponent,
    LeaveComponent,
    TimesheetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
