import { Injectable } from '@nestjs/common';
import { PsuService } from 'src/psu/psu.service';

@Injectable()
export class DiskService {
  constructor(private psuService: PsuService) {}

  getData() {
    console.log('Disk: Drawing 5 watts of power from psu');
    this.psuService.suppplyPower(5);
    return 'data';
  }
}
