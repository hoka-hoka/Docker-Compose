import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'docker';

  public textPassword: string = '';

  public textAggregate: string = '';



  public ngAfterViewInit(): void {
    const a = document.querySelector('test');
    if (!a) {
      return;
    }
  }

  public onInput(event: Event): void {
    this.textPassword =(event.target as HTMLInputElement).value;
  }
}
