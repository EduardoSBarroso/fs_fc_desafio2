const API_BASE = 'http://localhost:3000';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    let json = req.json();
    return json;
}

export default {
    getRouteList: async () => {
        return [
            {
                routes: await basicFetch(`/routes`)
            },
        ]
    },
}