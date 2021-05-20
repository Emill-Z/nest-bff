import { UnauthorizedException } from '@nestjs/common';
import { getBearerToken } from './headers-tools';

const TOKEN_MOCK = 'WjwdwWpkdMlbGGjh';

describe('utils/headers', () => {
    describe('test function getBearerToken', () => {
        it('should extract token', () => {
            const token = getBearerToken(`Bearer ${TOKEN_MOCK}`);
            expect(token).toBe(TOKEN_MOCK);
        });

        it('should throw UnauthorizedException', () => {
            expect(() => getBearerToken('Bearer ')).toThrow(UnauthorizedException);
            expect(() => getBearerToken(undefined)).toThrow(UnauthorizedException);
            expect(() => getBearerToken(null)).toThrow(UnauthorizedException);
            expect(() => getBearerToken(' ')).toThrow(UnauthorizedException);
        });
    });
});
