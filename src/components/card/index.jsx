


export default function Card({repo,deployment,img,description,title}){
    return <div className='col-12 col-lg-5  card mx-2 my-2' >
    <img src={img} className='card-img-top' height='200px'/>
    <div className='card-body'>
      <h5 className='card-title'>{title}</h5>
      <p className='card-text'>{description}</p>
      <a href={deployment}  target="_blank" className='btn btn-primary mx-1'>View Deployment</a>
      <a href={repo}  target="_blank" className='btn btn-primary mx-1'>View Repository</a>
    </div>
  </div>
}