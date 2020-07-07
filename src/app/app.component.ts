import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Songs } from './Songs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private rs : RestService) { }
  columns = ["Favourite", "Listened", "Playlist"];
  index = ["artist", "artist", "artist"]
  songs : Songs[] = [];


  ngOnInit(): void {
    this.rs.getSongs().subscribe
    (
      (response)=>
      {
        this.songs = response;
      },
      (error) => console.log(error)
    )
  }
  title = 'interview-angular-ngrx';
}
