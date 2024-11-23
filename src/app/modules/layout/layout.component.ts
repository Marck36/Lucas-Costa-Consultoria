import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public isPhonePortrait: boolean = false;
  
  constructor(private readonly responsive: BreakpointObserver) {}

  ngOnInit() {
    this.mobileWatcher();
  }

  public mobileWatcher(): boolean {

    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        this.isPhonePortrait = false; 

        if (result.matches) {
          this.isPhonePortrait = true;
        }

      }
    );

    console.log("Phone portrait", this.isPhonePortrait);

    return this.isPhonePortrait;
  }
}
