import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular Toastr';
  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!', {
      timeOut: 200000
    });
  }
  showError() {
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000
    });
  }
  showWarning() {
    this.toastr.warning('everything is broken', 'Major Error', {
      timeOut: 3000
    });
  }
  showInfo() {
    this.toastr.info('everything is broken', 'Major Error', {
      timeOut: 3000
    });
  }
}
