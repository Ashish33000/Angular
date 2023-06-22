import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class MasaiUserService{
  url:string="http://localhost:8088/";

  constructor(private http:HttpClient){

  }
  //read
  getAllUser(){
    return this.http.get(this.url+"data")
  }
  //add
  addUser(user:any){
    return this.http.post(this.url+"add",user)
  }
  //readtoUpdate
  getUserToUpdate(userid:any){
    return this.http.get(this.url+"edit/"+userid)
  }

  //Update
  updateUser(user:any){
    return this.http.put(this.url+"edit/"+user.id,user)
  }

  //delete
  deleteUser(userid:any){
    return this.http.delete(this.url+"delete/"+userid);
  }


}
