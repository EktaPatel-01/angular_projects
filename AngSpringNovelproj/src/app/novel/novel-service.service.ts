import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Novel } from './Novel';

@Injectable({
  providedIn: 'root'
})
export class NovelServiceService {

  constructor(private httpclient:HttpClient) { }

  baseUrl="http://localhost:8080/Novel";

  addNovel(novel:Novel){
    return this.httpclient.post(this.baseUrl+"/addNovel",novel, {responseType: 'text'});
  }
  findNovel(novelId:number){
    return this.httpclient.get<Novel>(this.baseUrl+"/getNovel/"+novelId);
  }
  findAllNovel(){
    return this.httpclient.get<Novel[]>(this.baseUrl+"/getAllNovels");
  }
  updateNovel(novel:Novel){
    return this.httpclient.put(this.baseUrl+"/modifyNovel",novel);
  }
  deleteNovel(novelId:number){
    return this.httpclient.delete(this.baseUrl+"/deleteNovel/"+novelId);
  }
}
