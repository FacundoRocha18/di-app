import { Injectable } from '@nestjs/common';

@Injectable()
export class PsuService {
  suppplyPower(watts: number) {
    console.log(`PSU: Supplying ${watts} worth of power.`);
  }
}
