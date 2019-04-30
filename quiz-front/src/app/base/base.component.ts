import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.sass']
})
export class BaseComponent implements OnInit {

  constructor(private provider: ProviderService) { }

  ngOnInit() {
  }

  logout(){
    this.provider.logout()
  }
}
