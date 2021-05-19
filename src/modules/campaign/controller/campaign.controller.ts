import { Controller, Get } from '@nestjs/common';
import { CampaignService } from '../services/campaign.service';
import { Headers, Query } from '@nestjs/common';
import { getBearerToken } from 'src/common/utils/headers-tools';
import { Campaign } from '../models/campaign.model';

@Controller('campaigns')
export class CampaignController {

    constructor(
        private readonly campaignService: CampaignService,
    ) { }

    @Get()
    public async getAll(@Headers('Authorization') auth: string): Promise<Campaign[]> {
        const token = getBearerToken(auth);
        return this.campaignService.getAll(token);
    }

    @Get('/test')
    public async test(
        @Headers('Authorization') auth: string,
        @Query() query: { postId: string },
    ): Promise<unknown[]> { // @TODO: replace unknown into correct interface
        const token = getBearerToken(auth);
        return this.campaignService.queryWithParams(query, token);
    }
}