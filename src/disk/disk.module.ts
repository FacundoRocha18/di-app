import { Module } from '@nestjs/common';
import { PsuModule } from 'src/psu/psu.module';
import { DiskService } from './disk.service';

@Module({
  providers: [DiskService],
  imports: [PsuModule],
  exports: [DiskService],
})
export class DiskModule {}
