import { Component, OnInit } from '@angular/core';
import { Bio, BioService } from './bio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  bio: Bio = {}

  constructor(private readonly bioSerivce: BioService) {
  }

  ngOnInit(): void {
    this.bioSerivce.bio$.subscribe(bio => {
      this.bio = bio
    })

    this.bioSerivce.loadUserBio();
  }

  navigateToLink(url: string) {
    window.location.href = url
  }
}
