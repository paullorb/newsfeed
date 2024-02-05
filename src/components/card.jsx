export default function Card () {

  const styles = {
    alignItems: 'stretch',
    border: '3px solid red',
    display: 'flex',
    flexDirection: 'column',
    margin: '1%',
    maxWidth: '30%',
  }

  const styleh1 = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '1.5rem',
    borderRadius: '10%',
    padding: '0% 10% 0%'
  }

  const styleimg = {
    width: '100%',
    backgroundImage: 'url(https://placehold.co/600x400',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '0% 0% 30%',
  }
  return (
    <div style={styles}>
      <div style={styleh1}><h1>Card</h1></div>
      <div style={styleimg}><img /></div>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione eveniet pariatur. Aspernatur, eaque. Culpa obcaecati eius consequatur et alias ipsum unde voluptatem animi assumenda. Sequi vitae reiciendis autem quod?</p></div>
      <div><h2>source website</h2></div>
      <div><h6>comments</h6></div>
    </div>
  )
}