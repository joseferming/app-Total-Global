import {Injectable} from '@angular/core';
import { Http,Headers,RequestMethod, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShareService{
    url:string="http://localhost:49474/";
    constructor(private http:Http){

    }
    login(user,pass){
        var _url="http://localhost:49474/api/APILogin";
        var _body={"name":user,"pass":pass};
        var _header= new Headers({'Content-Type':'Application/json'});
        var _option=new RequestOptions({method:RequestMethod.Post,headers:_header});
        return this.http.post(_url,_body,_option).map(res=>res.json());

    }
    getAll(){
        return this.http.get(this.url).map(res=>res.json());
    }
    Create(Nombre,Descripcion,precio,id){
        var body={"Nombre":Nombre,"Descripcion":Descripcion,"precio":precio,"id":id};
        var header=new Headers({'Content-Type':'application/json'});
        var option=new RequestOptions({method:RequestMethod.Post,headers:header});
        return this.http.post(this.url,body,option).map(res=>res.json());
    }
}
