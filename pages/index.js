export default function Home() {
  return (
    <>
    <button  
    onClick={()=>{analytics.identify('f4ca124298', {
    name: 'Michael Brown',
    email: 'mbrown@example.com'
    });}}>
     click me 1 
  </button>

  <button onClick={()=>{console.log('hello')}}> click me 2</button>
  <button onClick={()=>{console.log('button 3 clicked')}}> click me 3</button>
  <button onClick={()=>{console.log('button 4 clicked')}}> click me 4</button>
  </>
  )
}
