import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.scss']
})
export class ConsultancyComponent implements OnInit {

  public isPhonePortrait: boolean = false;
  
  constructor(private readonly responsive: BreakpointObserver) {}

  ngOnInit() {
  
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        this.isPhonePortrait = false; 

        if (result.matches) {
          this.isPhonePortrait = true;
        }

      }
    );
  }

}

// app-modules
//     modules
//         consultancy
//         layout
//         shared
//             components
//             service
//             utils
//             pages
//             types
//             directives