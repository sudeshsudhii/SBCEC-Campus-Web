import api from "@/lib/api";

export interface Event {
    _id?: string;
    title: string;
    description?: string;
    eventDate: string; // ISO Date string
    endDate?: string;
    venue?: string;
    organizer?: string;
    category: string;
    image?: string;
    active?: boolean;
    status: 'draft' | 'published' | 'archived';
}

export const EventService = {
    getAll: async (params?: any) => {
        const response = await api.get("/events", { params });
        return response.data;
    },

    getById: async (id: string) => {
        const response = await api.get(`/events/${id}`);
        return response.data;
    },

    create: async (data: Event) => {
        const response = await api.post("/events", data);
        return response.data;
    },

    update: async (id: string, data: Event) => {
        const response = await api.put(`/events/${id}`, data);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/events/${id}`);
        return response.data;
    },
};
