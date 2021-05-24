import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { handleResponseError } from 'src/common/services/handle-response-errors';
import { catchError, map } from 'rxjs/operators';
import { Campaign } from '../models/campaign.model';

@Injectable()
export class CampaignService {

    private readonly URL: string = 'DOMAIN/campaigns';

    constructor(
        private http: HttpService,
    ) { }

    public findAll(params: Record<string, unknown>, auth: string): Promise<Campaign[]> {
        const config: AxiosRequestConfig = {
            params,
            headers: { Authorization: auth }
        };

        return this.http.get(this.URL, config).pipe(
            catchError(handleResponseError),
            map((resp: AxiosResponse<Campaign[]>) => resp.data)
        ).toPromise();
    }

    public findOne(id: number, auth: string): Promise<Campaign> {
        const config: AxiosRequestConfig = {
            headers: { Authorization: auth }
        };

        return this.http.get(`${this.URL}/${id}`, config).pipe(
            catchError(handleResponseError),
            map((resp: AxiosResponse<Campaign>) => resp.data)
        ).toPromise();
    }
}

