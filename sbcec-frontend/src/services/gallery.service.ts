import api from "@/lib/api";

export interface Gallery {
    _id?: string;
    title: string;
    description?: string;
    category: string;
    eventDate?: string;
    images: {
        url: string;
        caption?: string;
        publicId?: string;
    }[];
    active?: boolean;
}

export const GalleryService = {
    getAll: async (params?: any) => {
        const response = await api.get("/gallery", { params });
        return response.data;
    },

    getById: async (id: string) => {
        const response = await api.get(`/gallery/${id}`);
        return response.data;
    },

    create: async (data: Gallery) => {
        const response = await api.post("/gallery", data);
        return response.data;
    },

    update: async (id: string, data: Gallery) => {
        const response = await api.put(`/gallery/${id}`, data);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/gallery/${id}`);
        return response.data;
    },
};
