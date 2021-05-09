import { Controller, Get } from '@nestjs/common';
import { CampaignI } from 'src/common/models/campaigns';
import { CampaignsService } from '../services/campaigns.service';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('campaigns')
export class CampaignsController {

    constructor(
        private readonly campaignsService: CampaignsService,
    ) { }

    @Get()
    getAll(): Observable<CampaignI[]> {
        return this.campaignsService.getAll().pipe(map((resp: AxiosResponse<CampaignI[]>) => resp.data));
    }
}