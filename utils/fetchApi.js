import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi =async (url) => {
    const { data } = await axios.get((url), {
     headers: {
        'X-RapidAPI-Key': 'e7b3e525a9msh2479819d418486dp101478jsnae665d99148f',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    })
    return data;
}

