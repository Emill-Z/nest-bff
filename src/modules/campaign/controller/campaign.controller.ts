import { Controller, Get } from '@nestjs/common';
import { Campaign } from 'src/common/models/campaign';
import { CampaignService } from '../services/campaign.service';
import { map } from 'rxjs/operators';
import { Headers, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { QueryEntity } from 'src/common/models/query';
import { getBearerToken } from 'src/common/utils/headers-tools';

@Controller('campaigns')
export class CampaignController {

    constructor(
        private readonly campaignService: CampaignService,
    ) { }

    @Get()
    public getAll(@Headers('Authorization') auth: string): Observable<Campaign[]> {
        return this.campaignService.getAll(getBearerToken(auth)).pipe(map((resp: AxiosResponse<Campaign[]>) => resp.data));
    }

    @Get('/test')
    public test(
        @Headers('Authorization') auth: string,
        @Query() query: QueryEntity,
    ): Observable<unknown[]> { // @TODO: replace unknown into correct interface
        return this.campaignService.queryWithParams(query, getBearerToken(auth)).pipe(map((resp: AxiosResponse<Campaign[]>) => resp.data));
    }
}