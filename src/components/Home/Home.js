import React from 'react';
import { useEffect, useState } from 'react';
import News from '../News/News';

const Home = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b093438169e44148aa7051053a7a930e`
        fetch(url)
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])
    return (
        <div>
            <h1>Breaking News : {news.length} </h1>
            {
                news.map(news => <News news={news}></News>)

            }
        </div>
    );
};

export default Home;