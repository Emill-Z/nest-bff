import { Headers } from '../models/headers';

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
    return authorizationField.replace('Bearer ', '');
}
