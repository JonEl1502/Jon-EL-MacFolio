import {techStack} from '#constants'

const SkillsApp = () => (
    <div className="aos-skills">
        {techStack.map((cat) => (
            <section key={cat.category}>
                <h3>{cat.category}</h3>
                <ul>
                    {cat.items.map((s) => <li key={s}>{s}</li>)}
                </ul>
            </section>
        ))}
    </div>
)

export default SkillsApp
