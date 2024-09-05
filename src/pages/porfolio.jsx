import ProjectCard from '../components/card';
import postData from '../../projectData';

export default function Portfolio(){
    return<div className='row vw-100 mx-auto my-3'>
            {postData.map((info, i)=> <ProjectCard key={info.title}{...info}/>)}
        </div>

}