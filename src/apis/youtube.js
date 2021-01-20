//AIzaSyDkMNLj39IWF7lBqpbOu86tNdG7DbahiRc
//https://www.googleapis.com/youtube/v3/search

import axios from 'axios';

const KEY = `AIzaSyDkMNLj39IWF7lBqpbOu86tNdG7DbahiRc`;

export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResult:5,
    type:'video',
    key:KEY,
}
});
