import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myupper',
  standalone: true
})
export class MyupperPipe implements PipeTransform {

  transform(value:string,param1:string): string {
    if(param1 == 'Upper'){
      value = value.toUpperCase()
    }else{
      value = value.toLowerCase()
    }
    
    return value;
  }

}
