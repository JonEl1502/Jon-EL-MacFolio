import {ExternalLink} from 'lucide-react'

const ProjectApp = ({data}) => {
    if (!data) return null
    const {name, url, screenshots = [], description = []} = data

    return (
        <article className="aos-project">
            {screenshots[0] && (
                <div className="aos-project-hero">
                    <img src={screenshots[0]} alt={name} loading="eager"/>
                </div>
            )}

            <div className="aos-project-info">
                <h2>{name}</h2>
                {url && (
                    <a className="aos-cta" href={url} target="_blank" rel="noreferrer">
                        Visit live site <ExternalLink size={14}/>
                    </a>
                )}
                {description.map((p, i) => <p key={i}>{p}</p>)}

                {screenshots.length > 1 && (
                    <>
                        <h3>Screenshots</h3>
                        <div className="aos-project-shots">
                            {screenshots.slice(1).map((src) => (
                                <img key={src} src={src} alt="" loading="lazy"/>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </article>
    )
}

export default ProjectApp
