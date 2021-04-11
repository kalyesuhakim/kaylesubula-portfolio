import React,{ useState} from 'react'
import projectData from '../data/projects'
const Projects = () => {
    const [items, setitems] = useState(projectData);
    if(!items){
        return(
            <h1>Loading ......................</h1>
        )
    }
    return (
        <>
            <section className="py-20 px-5 bg-green-800  grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:pt-32">
                {items.map(item => {
                    // const {id, image, path, description} = item;
                    return (
                        <div key={item.id}>
                            <h1 className="text-green-300 text-2xl text-semibold py-3">{item.name}</h1>
                            <img className="p-5 bg-green-500 rounded" src={item.image} alt={item.path} />
                            <a className="block text-center text-white font-semibold text-md p-3" href={item.path}>view project</a>
                            <ul className=" bg-green-200 p-5 md:flex justify-evenly">
                                {item.description.map((tag,index) => (
                                    <li key={index} className="text-green-700 text-1xl text-semibold">{tag}</li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default Projects
