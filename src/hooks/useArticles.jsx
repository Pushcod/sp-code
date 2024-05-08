import React, { useEffect, useState } from 'react'
import { axiosClient } from '../utils/GlobalApi';

//Отображение всех постов
const getAllPosts = () => {
    const [postsData, setPostsData]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        const fetchPosts = async () => {
            try {
                const resp = await axiosClient.get('/stati-zapisis?populate=*');
                setPostsData(resp.data.data);
                setLoading(false);
            }catch (error){
                console.log('Ошибка в получении записи', error);
                setLoading(false);
            }
        }
        fetchPosts();
    }, [])
    return { postsData, loading }
}

//Функция  отображениях популярных постов
const getPopularPosts = () => {
    const [postsData, setPostsData]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        const fetchPopularPosts = async () => {
            try{
                const resp = await axiosClient.get('http://localhost:1337/api/stati-zapisis?filters[isPopulate][$in]=false&populate=*');
                setPostsData(resp.data.data);
                setLoading(false);
            } catch (error){
                console.log('Ошибка в получении записи', error);
                setLoading(false);
            }
        }
        fetchPopularPosts();
    }, [])

    return{ postsData, loading };
}

export { getAllPosts, getPopularPosts };