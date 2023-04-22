import { Module } from '@nestjs/common';
import { PsuModule } from 'src/psu/psu.module';
import { CpuService } from './cpu.service';

@Module({
  providers: [CpuService],
  imports: [PsuModule],
  exports: [CpuService],
})
export class CpuModule {}
