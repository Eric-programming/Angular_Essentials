import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isPalindrome',
})
export class IsPalindromePipe implements PipeTransform {
  transform(value: string, args?: string): string {
    const res = this.isPalindrome(value);
    switch (args) {
      case 'yesOrNo':
        return res ? 'yes' : 'no';
      case 'yOrN':
        return res ? 'Y' : 'N';
      default:
        return res.toString();
    }
  }
  private isPalindrome(s: string): boolean {
    if (s.length == 0) {
      return true;
    }
    const regex = /\W/gm;
    const cleaned = [...s.toLowerCase().replace(regex, '')];
    let i = 0;
    let j = cleaned.length - 1;
    while (i < j) {
      if (cleaned[i] != cleaned[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
}
