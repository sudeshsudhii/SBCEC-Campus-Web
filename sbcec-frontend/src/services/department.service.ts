import api from "@/lib/api";

export interface Department {
    _id?: string;
    name: string;
    code: string;
    description?: string;
    vision?: string;
    mission?: string;
    headOfDepartment?: string; // ID or Name depending on backend
    hodName?: string; // For display/form if not strictly linked yet
    establishedYear?: number;
    image?: string;
}

export const DepartmentService = {
    getAll: async () => {
        const response = await api.get("/departments");
        return response.data;
    },

    getById: async (id: string) => {
        const response = await api.get(`/departments/${id}`);
        return response.data;
    },

    create: async (data: Department) => {
        const response = await api.post("/departments", data);
        return response.data;
    },

    update: async (id: string, data: Department) => {
        const response = await api.put(`/departments/${id}`, data);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/departments/${id}`);
        return response.data;
    },
};
