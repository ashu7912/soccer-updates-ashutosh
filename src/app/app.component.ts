import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'soccer-updates';

  ngOnInit(): void {
    console.log('Execute OnInit')
    localStorage.clear()
  }

  ngOnDestroy(): void {
    console.log('Execute')
    localStorage.clear()
  }
}
