import { useNamedQuery } from '../src';

describe('useNamedQuery', () => {
    it('should return the correct parameter for a single parameter', () => {
        const result = useNamedQuery('/user/:id', 'id', '/user/123');
        expect(result).toEqual({ id: '123' });
    });

    it('should return the correct parameters for multiple parameters', () => {
        const result = useNamedQuery(
            '/user/:id/post/:postId',
            ['id', 'postId'],
            '/user/123/post/456',
        );
        expect(result).toEqual({ id: '123', postId: '456' });
    });

    it('should return an empty object if no parameters match', () => {
        const result = useNamedQuery('/user/:id', 'name', '/user/123');
        expect(result).toEqual({});
    });

    it('should ignore query parameters in the URL', () => {
        const result = useNamedQuery('/user/:id', 'id', '/user/123?query=param');
        expect(result).toEqual({ id: '123' });
    });

    it('should return an empty object if no parameters are provided', () => {
        const result = useNamedQuery('/user/:id', [], '/user/123');
        expect(result).toEqual({});
    });
});
