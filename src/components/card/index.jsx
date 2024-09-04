import user from '../../assets/user.png'


export default function Card({repo,deployment,img,description,title}){
    return <div className='col card mx-2 my-2' >
    <img src={img} className='card-img-top'  />
    <div className='card-body'>
      <h5 className='card-title'>{title}</h5>
      <p className='card-text'>{description}</p>
      <a href={deployment} className='btn btn-primary mx-1'>View Deployment</a>
      <a href={repo} className='btn btn-primary mx-1'>View Repository</a>
    </div>
  </div>
}