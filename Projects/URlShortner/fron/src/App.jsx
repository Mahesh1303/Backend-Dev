import './App.css'
import Login from './components/Login'

function App() {

  return (
  <div className='flex justify-center my-auto h-screen w-full'>  
      <div className='content-center text-4xl text-gray-500'>
          <h1 >This is A URL Shortener WebSite</h1>

      </div>
      <div className='w-full content-center'>

        <Login/>

      </div>
  </div>
  )
}

export default App