import axios from 'axios';
export const CREATE_POST='create_post';
export const FETCH_POSTS='fetch_posts';
const ROOT_URL='https://reduxblog.herokuapp.com/api';
const API_KEY='?key=qweey6t437t783';
export function fetch_posts(){
  const request=axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return{
    type:FETCH_POSTS,
    payload:request
  };
}
export function createPost(values){
  console.log(values);
  const request=axios.post(`${ROOT_URL}/posts${API_KEY}`, values);
  return{
    type:CREATE_POST,
    payload:request
  };
}
