import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public username: string = ''
  public password: string = ''

  constructor(private provider: ProviderService) { }

  ngOnInit() {
  }

  login(){
    if(this.username != '' && this.password != ''){
      this.provider.login(this.username, this.password)
    }
  }
}
