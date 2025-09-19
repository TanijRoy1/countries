
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries'

function App() {

  const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
    .then(res => res.json());
  return (
    <>
      {/* <h1 className='text-center bg-amber-200'>Countries</h1> */}
      <Suspense fallback={<Loading></Loading>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App


const Loading = () => {
  return (
    <div className='py-12'>
      <h1 className='text-center text-2xl font-bold'>Countries are loading...</h1>
    </div>
  );
};

