import CountryData from '../countryData.json'
export const CountryDetails = () => {
  return (
    <div className='w-10/12 my-20 max-w-[1200px] mx-auto gap-8 justify-center flex  flex-wrap'>
        {
            CountryData.map((item)=>(
            <div key={item.id} className='p-4 w-[350px] flex flex-col gap-2 border border-gray-500 rounded-lg mygradient1'>
                <h1 className='text-white'>Name : {item.countryName}</h1>
                <h2 className=' text-slate-200'>Capital : {item.capital}</h2>
                <p className=' text-slate-300'>Population : {item.population}</p>
                <p className='text-slate-400'>InterestingFact : {item.interestingFact}</p>
            </div>
            )
        )
        }
    </div>
  )
}
