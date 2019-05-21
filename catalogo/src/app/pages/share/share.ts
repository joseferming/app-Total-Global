import {Injectable} from '@angular/core';
import { Http,Headers,RequestMethod, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShareService{
    constructor(private http:Http){

    }
    login(user,pass){
        var _url="http://localhost:49474/api/API";
        var _body={"name":user,"pass":pass};
        var _header= new Headers({'Content-Type':'Application/json'});
        var _option=new RequestOptions({method:RequestMethod.Post,headers:_header});
        return this.http.post(_url,_body,_option).map(res=>res.json());

    }
}
