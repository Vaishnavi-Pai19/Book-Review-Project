import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = async () => axios.get(url);
export const createPost = async (newPost) => axios.post(url, newPost);

//export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const updatePost = (id, updatedPost) => {
    console.log(`Updating post with ID: ${id}`);
    console.log(`URL: ${url}/${id}`);

    return axios.patch(`${url}/${id}`, updatedPost);
};

export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
