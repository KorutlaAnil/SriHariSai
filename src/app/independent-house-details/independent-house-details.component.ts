import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-independent-house-details',
  templateUrl: './independent-house-details.component.html',
  styleUrls: ['./independent-house-details.component.scss']
})
export class IndependentHouseDetailsComponent implements OnInit {

  constructor() { }
   apiLoaded = false;

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

}
