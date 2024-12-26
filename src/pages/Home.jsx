import { CountryDetails } from "../Components/CountryDetails"

export const Home = () => {
  return (
    <div>
    <div className="my-10 mx-auto flex flex-col md:flex-row justify-between items-center w-10/12 w-max-[1200px] ">
    {/* left section */}
    <div className="w-full md:w-[40%] flex flex-col gap-5">
      <h1 className="text-3xl md:text-4xl text-white">Discover Your Next Adventure</h1>
      <h2 className="text-xl md:text-2xl text-slate-200">Unforgettable experiences in breathtaking destination worldwide</h2>
      <p className="text-ms md:text-lg text-slate-300">Highlight the unique and memorable travel experiences they&apos;II gain, adding a hint of the website&apos;s offerings (e.g.., luxury, budget-friendly, adventurous).</p>
    </div>
    <img className="w-full md:w-[60%]" src="/images/world.png"/>
    </div>
    <CountryDetails/>
    </div>
  )
}
