import { HttpException, HttpStatus } from "@nestjs/common";
import { Observable, throwError } from "rxjs";

interface ResponseError {
    response: {
        status: number;
        statusText: string;
    }
}

export function handleResponseErrors(error: ResponseError): Observable<never> {
    if (!(error?.response)) {
        return throwError(new HttpException({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'Internal server error',
        }, HttpStatus.INTERNAL_SERVER_ERROR));
    }

    switch (error.response.status) {
    case HttpStatus.INTERNAL_SERVER_ERROR:
    case HttpStatus.BAD_GATEWAY:
        return throwError(new HttpException({
            status: HttpStatus.BAD_GATEWAY,
            error: 'External server error',
        }, HttpStatus.BAD_GATEWAY));

    default:
        return throwError(new HttpException({
            status: error.response.status,
            error: error.response.statusText,
        }, error.response.status));
    }
}
