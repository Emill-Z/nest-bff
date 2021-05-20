import { UnauthorizedException } from '@nestjs/common';
import { Headers } from '../../models/headers';

/**
 * @param token
 * @returns default headers
 */
export function getHeaders(token: string): Headers {
    return {
        Authorization: `Bearer ${token}`,
    };
}

/**
 * @param authorizationField comes from Headers
 * @returns token string
 */
export function getBearerToken(authorizationField: string): string {
    const token = authorizationField?.replace('Bearer', '')?.trim();

    if (!token) {
        throw new UnauthorizedException();
    }

    return token;
}
