import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from 'src/app/services/splash-screen/splash-screen-state.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass']
})
export class MainContentComponent implements OnInit {

  constructor(private splashScreenStateService: SplashScreenStateService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.splashScreenStateService.stop();
   }, 3000);
  }

}
