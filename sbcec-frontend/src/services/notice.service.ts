import api from "@/lib/api";

export interface Notice {
    _id?: string;
    title: string;
    content: string;
    category: string;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    expiryDate?: string;
    isPinned: boolean;
    attachments?: string[];
    active?: boolean;
}

export const NoticeService = {
    getAll: async (params?: any) => {
        const response = await api.get("/notices", { params });
        return response.data;
    },

    getById: async (id: string) => {
        const response = await api.get(`/notices/${id}`);
        return response.data;
    },

    create: async (data: Notice) => {
        const response = await api.post("/notices", data);
        return response.data;
    },

    update: async (id: string, data: Notice) => {
        const response = await api.put(`/notices/${id}`, data);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/notices/${id}`);
        return response.data;
    },
};
