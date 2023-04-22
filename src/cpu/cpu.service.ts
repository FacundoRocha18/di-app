import { Injectable } from '@nestjs/common';
import { PsuService } from 'src/psu/psu.service';

@Injectable()
export class CpuService {
  constructor(private psuService: PsuService) {}

  compute(a: number, b: number) {
    console.log('CPU: Drawing 10 watts of power from psu');
    this.psuService.suppplyPower(10);
    return a + b;
  }
}
