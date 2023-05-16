import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      }
    }
    return resultPosts;
  }
}
