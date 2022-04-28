import Notiflix from 'notiflix';
import axios from "axios";

const refs = {
    submitBtn: document.querySelector('button'),
    input: document.querySelector('input'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
}

export default class FlowerApi {
    constructor(){
        this.options = {
            parameters: {
                key:"27071563-5b07d064bfcc73e0836dcf2af",
                q: "yellow+flower",
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
            }
        }
    }
}

async function getPics() {
    try {
      const response = await axios.get('https://pixabay.com/api/' , this.options);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

