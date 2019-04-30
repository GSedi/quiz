import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { IPostShort } from '../shared/models';
import { Location } from '@angular/common';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.sass']
})
export class PostsListComponent implements OnInit {



  constructor(private provider: ProviderService) { }

  ngOnInit() {
  }


}
