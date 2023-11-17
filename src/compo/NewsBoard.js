import React, { useEffect, useState } from 'react'
import Sn from './Sn'

const NewsBoard = ({category}) => {
    const [articles,seAms]=useState([])
    useEffect(()=>{

        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=74a4851c98164875b9711a30f7effdc3`
        fetch(url).then(resp=>resp.json()).then(data=>seAms(data.articles))
    },[category])
  return (
    <div>
        <h2 className='text-center'>All <span className='badge bg-primary'>News</span></h2>
        {
            articles.map((news,index)=>{
                return <Sn key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>            
            })
        }
    </div>
  )
}

export default NewsBoard