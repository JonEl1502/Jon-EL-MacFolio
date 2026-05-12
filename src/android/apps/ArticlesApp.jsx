import {ExternalLink} from 'lucide-react'
import {blogPosts} from '#constants'

const ArticlesApp = () => (
    <ul className="aos-articles">
        {blogPosts.map((post) => (
            <li key={post.id} className="aos-article">
                <a
                    href={post.link.startsWith('http') ? post.link : `https://${post.link}`}
                    target="_blank" rel="noreferrer">
                    <img src={post.image} alt="" loading="lazy"/>
                    <div>
                        <span className="aos-article-date">{post.date}</span>
                        <h3>{post.title}</h3>
                        <span className="aos-article-cta">Read on web <ExternalLink size={12}/></span>
                    </div>
                </a>
            </li>
        ))}
    </ul>
)

export default ArticlesApp
