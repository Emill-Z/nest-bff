import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Campaign } from 'src/common/models/campaign';
import { AxiosResponse } from 'axios';
import { getHeaders } from 'src/common/utils/headers-tools';

@Injectable()
export class CampaignService {

    // Just for example
    private readonly URL: string = 'https://jsonplaceholder.typicode.com';

    constructor(
        private http: HttpService,
    ) { }

    public getAll(token: string): Observable<AxiosResponse<Campaign[]>> {
        return this.http.get(`${this.URL}/posts`, {
            headers: {
                ...getHeaders(token),
            }
        });
    }

    public queryWithParams(params: { postId: string }, token: string): Observable<AxiosResponse<unknown[]>> {
        return this.http.get(`${this.URL}/comments`, {
            params,
            headers: {
                ...getHeaders(token),
            }
        });
    }
}
