import { Component, OnInit } from '@angular/core';
import { FeedDataService } from "src/app/services/feed-data.service";
import { HttpClientModule } from '@angular/common/http';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  loadCards: string[] = ['name', 'avatar', 'discription', 'image'];
  dataSource;

  constructor(private feedDataService: FeedDataService,
    private http: HttpClientModule) { }

    displayData(){
      this.feedDataService.getFeedData()
      .subscribe((data:any)=>{
        this.dataSource = data
      });
    }

  ngOnInit() {
    this.displayData();
  }

}
