import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { handleResponseErrors } from 'src/common/services/handle-response-errors';
import { getHeaders } from 'src/common/utils/headers/headers-tools';
import { catchError, map } from 'rxjs/operators';
import { Campaign } from '../models/campaign.model';
import * as DataCampaigns from '../../../common/mocks/data-campaigns.json';
import { of } from 'rxjs';

@Injectable()
export class CampaignService {

    // Just for example
    private readonly URL: string = 'https://jsonplaceholder.typicode.com';

    constructor(
        private http: HttpService,
    ) { }

    public findAll(token: string): Promise<Campaign[]> {
        const data = JSON.parse(JSON.stringify(DataCampaigns));

        return of(data.result.indexedPage.items).toPromise();

        // const config: AxiosRequestConfig = {
        //     headers: { ...getHeaders(token) }
        // };

        // return this.http.get(`${this.URL}/posts`, config).pipe(
        //     catchError(handleResponseErrors),
        //     map((resp: AxiosResponse<Campaign[]>) => resp.data)
        // ).toPromise();
    }

    public findOne(token: string): Promise<Campaign> {
        const data = JSON.parse(JSON.stringify(DataCampaigns));

        return of(data.result.indexedPage.items[0]).toPromise();
    }

    public queryWithParams(params: { postId: string }, token: string): Promise<unknown[]> {
        const config: AxiosRequestConfig = {
            params,
            headers: { ...getHeaders(token) }
        };

        return this.http.get(`${this.URL}/comments`, config).pipe(
            catchError(handleResponseErrors),
            map((resp: AxiosResponse<Campaign[]>) => resp.data)
        ).toPromise();
    }
}

