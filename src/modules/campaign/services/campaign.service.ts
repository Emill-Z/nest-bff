import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { getHeaders } from 'src/common/utils/headers-tools';
import { catchError, map } from 'rxjs/operators';
import { handleResponseErrors } from 'src/common/services/handle-response-errors';
import { Campaign } from '../models/campaign.model';

@Injectable()
export class CampaignService {

    // Just for example
    private readonly URL: string = 'https://jsonplaceholder.typicode.com';

    constructor(
        private http: HttpService,
    ) { }

    public getAll(token: string): Promise<Campaign[]> {
        const config: AxiosRequestConfig = {
            headers: {
                ...getHeaders(token),
            }
        };

        return this.http.get(`${this.URL}/posts`, config).pipe(
            catchError(handleResponseErrors),
            map((resp: AxiosResponse<Campaign[]>) => resp.data)
        ).toPromise();
    }

    public queryWithParams(params: { postId: string }, token: string): Promise<unknown[]> {
        const config: AxiosRequestConfig = {
            params,
            headers: {
                ...getHeaders(token),
            }
        };

        return this.http.get(`${this.URL}/comments`, config).pipe(
            catchError(handleResponseErrors),
            map((resp: AxiosResponse<Campaign[]>) => resp.data)
        ).toPromise();
    }
}

