export function useNamedQuery(routeFormat: string, params: string[] | string, url: string) {
    const paramList = Array.isArray(params) ? params : [params];

    const [path] = url.split('?');
    const routeSegments = path.split('/').filter(Boolean);
    const formatSegments = routeFormat.split('/').filter(Boolean);
    const result: { [key: string]: string } = {};

    formatSegments.forEach((segment, index) => {
        if (segment.startsWith(':')) {
            const paramName = segment.slice(1);
            if (paramList.includes(paramName)) {
                result[paramName] = routeSegments[index] || '';
            }
        }
    });

    return result;
}

export default useNamedQuery;
