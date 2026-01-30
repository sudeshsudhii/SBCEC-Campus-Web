import api from "@/lib/api";

export interface Course {
    _id?: string;
    name: string;
    code: string;
    department: string; // ID
    level: 'UG' | 'PG';
    degree: string;
    duration: number;
    intake: number;
    eligibility?: string;
    syllabus?: string;
    description?: string;
}

export const CourseService = {
    getAll: async (params?: any) => {
        const response = await api.get("/courses", { params });
        return response.data;
    },

    getById: async (id: string) => {
        const response = await api.get(`/courses/${id}`);
        return response.data;
    },

    create: async (data: Course) => {
        const response = await api.post("/courses", data);
        return response.data;
    },

    update: async (id: string, data: Course) => {
        const response = await api.put(`/courses/${id}`, data);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/courses/${id}`);
        return response.data;
    },
};
