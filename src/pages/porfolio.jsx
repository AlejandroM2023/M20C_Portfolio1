import ProjectCard from '../components/card'


const cardInfo =[
    {
    repo: 'https://github.com/vmarorti/Team-Rocket-s-Warehouse',
    deployment : 'https://team-rocket-s-warehouse.onrender.com/',
    img: '#',
    description: 'An online platform where Pokémon card enthusiasts can trade, buy, and sell their cards. Users can create profiles, list their cards for trade or sale, browse other users collections, and initiate trades. The app also features a rating system to ensure safe and fair transactions',
    title: 'Team Rockets Warehouse'}
]
export default function Portfolio(){
    return<div className='row mx-5 my-3'>
            {cardInfo.map((info, i)=> <ProjectCard key={i}{...info}/>)}
        </div>

}