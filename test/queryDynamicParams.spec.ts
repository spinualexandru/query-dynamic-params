import { queryDynamicParams } from '../src';

describe('queryDynamicParams', () => {
    it('should return the correct parameter for a single parameter', () => {
        const result = queryDynamicParams('/user/:id', 'id', '/user/123');
        expect(result).toEqual({ id: '123' });
    });

    it('should return the correct parameters for multiple parameters', () => {
        const result = queryDynamicParams(
            '/user/:id/post/:postId',
            ['id', 'postId'],
            '/user/123/post/456',
        );
        expect(result).toEqual({ id: '123', postId: '456' });
    });

    it('should return an empty object if no parameters match', () => {
        const result = queryDynamicParams('/user/:id', 'name', '/user/123');
        expect(result).toEqual({});
    });

    it('should ignore query parameters in the URL', () => {
        const result = queryDynamicParams('/user/:id', 'id', '/user/123?query=param');
        expect(result).toEqual({ id: '123' });
    });

    it('should return an empty object if no parameters are provided', () => {
        const result = queryDynamicParams('/user/:id', [], '/user/123');
        expect(result).toEqual({});
    });
});
