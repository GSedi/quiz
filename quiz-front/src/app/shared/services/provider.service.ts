import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import {HttpClient} from '@angular/common/http';
import { IPostShort, IPostLong } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) { super(http);}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token')
  }

  login(username: string, password: string): void {
    this.post('http://localhost:8000/api/login/', {
      username: username,
      password: password
    })
    .then(res => {
      localStorage.setItem('token', res.token)
    })
  }

  logout(): void {
    this.post('http://localhost:8000/api/logout/', {}).then(() => {
      localStorage.clear();
    });
  }

  getPosts(): Promise<IPostShort[]> {
    return this.get('http://localhost:8000/api/posts/', {})
  }

  createPost(title: string, body:string): Promise<IPostShort> {
    return this.post('http://localhost:8000/api/posts/', {
      title: title,
      body: body,
      like_count: 0
    })
  }

  getPost(id: number): Promise<IPostLong> {
    return this.get(`http://localhost:8000/api/posts/${id}/`, {})
  }

  updatePost(post: IPostLong): Promise<IPostShort> {
    return this.put(`http://localhost:8000/api/posts/${post.id}/`, {
      title: post.title,
      body: post.body,
      like_count: post.like_count
    })
  }

  deletePost(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/posts/${id}/`, {})
  }

  addLike(id: number): Promise<any> {
    return this.post(`http://localhost:8000/api/posts/${id}/like/`, {})
  }
} 
