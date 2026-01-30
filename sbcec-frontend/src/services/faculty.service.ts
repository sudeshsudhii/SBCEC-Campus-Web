import api from "@/lib/api";

export interface Faculty {
    _id?: string;
    name: string; // This might be in 'user' object in real backend, but flat for form
    designation: string;
    department: string; // ID
    qualification: string;
    specialization?: string[]; // Array of strings
    experience: number;
    email: string;
    phone?: string;
    bio?: string;
}

export const FacultyService = {
    getAll: async (params?: any) => {
        const response = await api.get("/faculty", { params });
        return response.data;
    },

    getById: async (id: string) => {
        const response = await api.get(`/faculty/${id}`);
        return response.data;
    },

    create: async (data: Faculty) => {
        const response = await api.post("/faculty", data);
        return response.data;
    },

    update: async (id: string, data: Faculty) => {
        const response = await api.put(`/faculty/${id}`, data);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/faculty/${id}`);
        return response.data;
    },
};
