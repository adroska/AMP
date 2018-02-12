import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(durationText: string): string {
    const duration: number = parseInt(durationText === '' ? '0' : durationText),
      hours = Math.floor(duration / 60),
      minutes = duration % 60;

    return ((hours) ? `${hours}h ` : '') + `${minutes}min`;
  }

}
