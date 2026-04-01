import { useEffect, useState } from 'react'

function News() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiKey = '2a315c4af6b446999efcb1e78e9f91e3'
    const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=${apiKey}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || [])
        setLoading(false)
      })
      .catch(() => {
        setArticles([])
        setLoading(false)
      })
  }, [])
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', background: '#668abd', minHeight: '100vh' }}>
      <h2>Top News</h2>
      <div style={{ display: 'grid', gap: '12px' }}>
        {articles.map((item, index) => (
          <div
            key={index}
            style={{ border: '1px solid #cfe0ff', borderRadius: '8px', padding: '12px', background: '#ffcccc' }}
          >
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
