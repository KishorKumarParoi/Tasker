import frame from './assets/frame.png';
import logo from './assets/lws-logo-en.svg';

function Footer() {
  return (
    <>
      <footer className="py-6 md:py-8">
        <div className="container mx-auto">
          <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
            Copyright ©2024 | All rights reserved by Learn with Sumit
          </p>
        </div>
      </footer>
    </>
  )
}

function SearchBox() {
  return (
    <>
      <div className="p-2 flex justify-end">
        <form>
          <div className="flex">
            <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
              <input type="search" id="search-dropdown"
                className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                placeholder="Search Task" required />
              <button type="submit"
                className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4">
                <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

function Tasklist({ data }) {
  return (
    <>
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star"
              width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={data[0].isFavorite ? "yellow" : "white"}
              fill={data[0].isFavorite ? "yellow" : ""} strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg></td>
            <td>{data[0].Title}</td>
            <td>
              <div>
                {data[0].Description}
              </div>
            </td>
            <td>
              <ul className="flex justify-center gap-1.5 flex-wrap">
                {data[0].Tags.map((tag, index) => (
                  <li key={index} >
                    <span
                      className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 ${data[0].Colors[index]} text-sm capitalize text-[#F4F5F6]`}>{tag}</span>
                  </li>
                ))
                }
              </ul>
            </td>
            <td className="text-center">{data[0].Priority}</td>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <button className="text-red-500">{data[0].Options[0]}</button>
                <button className="text-blue-500">{data[0].Options[1]}</button>
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star"
              width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg></td>
            <td>API Data Synchronization with Python</td>
            <td>
              <div>
                Implement a Python solution to synchronize data between an
                API and a third-party database securely, optimizing data
                exchange.
              </div>
            </td>
            <td>
              <ul className="flex justify-center gap-1.5 flex-wrap">
                <li>
                  <span
                    className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">Python</span>
                </li>
                <li>
                  <span
                    className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#FE1A1AB5] px-2.5 text-sm capitalize text-[#F4F5F6]">API</span>
                </li>
                <li>
                  <span
                    className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#BD560BB2] px-2.5 text-sm capitalize text-[#F4F5F6]">Data
                    Synchronization</span>
                </li>
              </ul>
            </td>
            <td className="text-center">High</td>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <button className="text-red-500">Delete</button>
                <button className="text-blue-500">Edit</button>
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star"
              width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg></td>
            <td>Efficient Web API Connectivity in Python</td>
            <td>
              <div>
                Develop a Python-based solution for connecting an API to a
                third-party database securely, focusing on efficient data
                handling and exchange.
              </div>
            </td>
            <td>
              <ul className="flex justify-center gap-1.5 flex-wrap">
                <li>
                  <span
                    className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00B2D9CC] px-2.5 text-sm capitalize text-[#F4F5F6]">Web</span>
                </li>
                <li>
                  <span
                    className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#8407E6A8] px-2.5 text-sm capitalize text-[#F4F5F6]">Python</span>
                </li>
                <li>
                  <span
                    className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#07AC67D6] px-2.5 text-sm capitalize text-[#F4F5F6]">API</span>
                </li>
              </ul>
            </td>
            <td className="text-center">High</td>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <button className="text-red-500">Delete</button>
                <button className="text-blue-500">Edit</button>
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star"
              width="24" height="24" viewBox="0 0 24 24" strokeWidth="2"
              stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg></td>
            <td>Data Handling</td>
            <td>
              <div>
                Integrate a web API with a third-party database using
                secure methods, focusing on seamless data exchange and
                data integrity.
              </div>
            </td>
            <td>
              <ul className="flex justify-center gap-1.5 flex-wrap">
                <li>
                  <span
                    className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#2F43F8BF] px-2.5 text-sm capitalize text-[#F4F5F6]">Web</span>
                </li>
                <li>
                  <span
                    className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#AE6D0BDB] px-2.5 text-sm capitalize text-[#F4F5F6]">Python</span>
                </li>
                <li>
                  <span
                    className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#10FBEDB2] px-2.5 text-sm capitalize text-[#F4F5F6]">Security</span>
                </li>
              </ul>
            </td>
            <td className="text-center">High</td>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <button className="text-red-500">Delete</button>
                <button className="text-blue-500">Edit</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function TaskBoard() {
  const data = [
    {
      "Title": "Integration API",
      "Description": "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
      "isFavorite": true,
      "Tags": ["Web",
        "Python",
        "API"],
      "Priority": "High",
      "Options": ["Delete", "Edit"],
      'Colors': ["bg-[#00D991A1]", "bg-[#FE1A1AB5]", "bg-[#BD560BB2]", "bg-[#2F43F8BF]", "bg-[#10FBEDB2]", "bg-[#AE6D0BDB]"]
    }
  ];
  return (
    <>
      <section className="mb-20" id="tasks">

        <div className="container">
          <SearchBox />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <div className="mb-14 items-center justify-between sm:flex">
              <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
              <div className="flex items-center space-x-5">
                <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">Add Task</button>
                <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">Delete All</button>
              </div>
            </div>
            <div className="overflow-auto">
              <Tasklist data={data} />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}
function Hero() {
  return (
    <>
      <section className="pb-[114px] pt-20 md:mt-[100px]">
        <div className="container lg:px-20">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="flex justify-center md:order-2">
              <img className="max-md:w-full" src={frame} width="326" height="290" alt="frame" />
            </div>
            <div>
              <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
                Tasker
              </h1>
              <p className="text-lg my-2 opacity-60">
                Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your Personal Productivity
                Ally for
                Seamless Goal Achievement and Stress-Free Task Management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
function Header() {
  return (
    <>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* <!-- Logo --> */}
          <a href="/">
            <img className="h-[45px]" src={logo} alt="Lws" />
          </a>
          {/* <!-- Logo Ends --> */}
        </div>
      </nav>
    </>
  )
}

export default function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <h1 className="text-5xl font-semibold bg-yellow-600">Kishor Kumar Paroi</h1>
      <Header />
      <Hero />
      <TaskBoard />
      <Footer />
    </div>
  )
}