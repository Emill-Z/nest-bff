import { Controller, Get } from '@nestjs/common';
import { Campaign } from 'src/common/models/campaign';
import { CampaignService } from '../services/campaign.service';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('campaign')
export class CampaignController {

    constructor(
        private readonly campaignService: CampaignService,
    ) { }

    @Get()
    getAll(): Observable<Campaign[]> {
        return this.campaignService.getAll().pipe(map((resp: AxiosResponse<Campaign[]>) => resp.data));
    }
}