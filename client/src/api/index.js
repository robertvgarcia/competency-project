import axios from 'axios'
// Use axios to connect client-side(front-end) to server-side(back-end)
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})
// export route methods for use on client-side
export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)
export const insertChild = payload => api.post(`/child`, payload)
export const getAllChildren = () => api.get(`/children`)
export const updateChildById = (id, payload) => api.put(`/child/${id}`, payload)
export const deleteChildById = id => api.delete(`/child/${id}`)
export const getChildById = id => api.get(`/child/${id}`)
export const getAllCities = () => api.get(`/cities`)

const apis = {
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
    insertChild,
    getAllChildren,
    updateChildById,
    deleteChildById,
    getChildById,
    getAllCities,
}

export default apis