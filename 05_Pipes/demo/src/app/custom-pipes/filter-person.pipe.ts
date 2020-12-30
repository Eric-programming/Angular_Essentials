import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interface/Person';

@Pipe({
  name: 'filterPerson',
  pure: false,
})
//When pipe is created, pipe is by default pure
/**
 * pure pipe is only executed when primitive input value
 * or changed object reference to the input value change
 *
 * but a pure pipe is not going to executed if the input
 * to the pipe is only changing the object property values but
 * not the reference
 */
export class FilterPersonPipe implements PipeTransform {
  transform(persons: Person[], searchTerm: string): Person[] {
    console.log('This pipe is executed');
    if (!persons || !searchTerm) return persons;
    return persons.filter(
      (person) =>
        person.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
