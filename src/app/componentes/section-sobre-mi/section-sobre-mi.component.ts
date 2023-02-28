import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { SobreMi } from 'src/assets/models/sobreMi';

@Component({
  selector: 'app-section-sobre-mi',
  templateUrl: './section-sobre-mi.component.html',
  styleUrls: ['./section-sobre-mi.component.css']
})
export class SectionSobreMiComponent implements OnInit {
  

  sobreMi: SobreMi[]=[];

  constructor(private porfolioService: PorfolioService){}
  
  ngOnInit(): void {
    this.porfolioService.getAllSobreMi().subscribe(data => {
      this.sobreMi = data
    });
  }

}
