import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
        
    }

    return []
}

export const getPostBySlug = async (id) => {


    const {data} = await api.get(`/posts?id=eq.${id}`)
    console.log(data)
    if(data){
        return data;
        
    }
    return {}
}