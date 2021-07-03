import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(all,item): any {
    if(item=="" || item == undefined)
    {

      return all;
    }else
    {
      return all.filter(dt=>{
        return dt.name.includes(item)
      })
    }
  }

}
