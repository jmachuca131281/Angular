import { Component, OnInit } from '@angular/core';
import { RandomService } from 'src/app/services/random.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  randomList: string[] = [];
  randomSelected: string;
  randomImages: any[] = [];

  constructor(public randomService: RandomService) { }

  ngOnInit(): void { 
  }

  loadImages(){
    this.randomService.getImages(this.randomSelected).subscribe(
      (data) => {
        this.randomImages = data['message'];
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

