import api from "./api";

export const getProperties = async (params = {}) => {
    const response = await api.get("properties/", {
        params,
    });

    return response.data;
};

export const getProperty = async (id) => {
    const response = await api.get(`properties/${id}/`);

    return response.data;
};