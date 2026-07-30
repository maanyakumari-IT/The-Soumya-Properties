import api from "./api";
export const getProperties = async (params = {}) => {
    const response = await api.get("properties/", {
        params,
    });
    return response.data;
};

export const getProperty = async (id) => {
    const response = await api.get(
        `properties/${id}/`
    );
    return response.data;
};

export const createProperty = async (formData) => {
    const response = await api.post(
        "properties/create/",
        formData,
        {
            headers:{
                "Content-Type":"multipart/form-data",
                Authorization:
                `Bearer ${localStorage.getItem("access")}`
            }
        }
    );
    return response.data;
};

export const updateProperty = async (id, formData) => {
    const response = await api.put(
        `properties/update/${id}/`,
        formData,
        {
            headers:{
                "Content-Type":"multipart/form-data",
                Authorization:
                `Bearer ${localStorage.getItem("access")}`
            }
        }
    );
    return response.data;
};

export const deleteProperty = async (id) => {
    const response = await api.delete(
        `properties/delete/${id}/`,
        {
            headers:{
                Authorization:
                `Bearer ${localStorage.getItem("access")}`
            }
        }
    );
    return response.data;
};