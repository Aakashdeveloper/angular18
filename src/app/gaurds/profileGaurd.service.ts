import { Injectable } from "@angular/core";
import { CanActivate,Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})

export class ProfileGaurdeService implements CanActivate{
    token:string|null = "12345";
    constructor(private router:Router){}

    canActivate():boolean{
        if(this.token === "12345"){
            this.router.navigate(['about']);
            return false
        }else{
            return true
        }
    }
}


