import React from "react";
import { motion } from "motion/react";
import { BrowserRouter } from "react-router";

const App = () => {

  return (
    <>
      <div className="main min-w-screen min-h-screen bg-black">
        <main className="bg-black min-h-screen min-w-screen justify-between flex">
          <nav className="min-w-screen h-14 justify-between flex md:flex-row flex-col fixed z-10">
            <div className="left h-12 text-amber-50 flex align-middle text-center gap-2">
              <div className="logo text-4xl ">
                <i class="fa-brands fa-spotify m-3 mx-5"></i>
              </div>
              <motion.div whileHover={{scale:1.05}} className="home text-xl">
              <a href="">  <i class="fa-solid fa-house mt-2 p-3 bg-neutral-800 rounded-full"></i></a>
              </motion.div>
              <div className="searchbar">
              <a href="#">  <i class="fa-solid fa-magnifying-glass absolute z-10 text-xl  bg-neutral-800 p-3 mt-1.5 rounded-s-3xl font-extralight "></i></a>
                <input
                  className=" bg-neutral-800  ps-9 pe-36 py-2.5 rounded-3xl mt-1.5 absolute"
                  type="search"
                  placeholder="  Do you want to play?"
                />
              </div>
             <a href="#"> <motion.i whileHover={{scale:1.1}} class="fa-solid fa-box-open z-10 absolute top-4.5 md:left-[450px] border border-neutral-500 border-e-0 border-b-0 border-t-0 px-0.5 ps-2 py-1"></motion.i></a>
            </div>

            <div className="right text-neutral-400 flex min-w-xl h-12  justify-between">
              <div className="primium flex border border-s-0 border-t-0 border-b-0 mt-5 h-8 pe-3 gap-2 font-bold">
                <motion.h1 whileHover={{scale:1.1}} className="hover:text-white"><a href="#">Primiun</a></motion.h1>
                <motion.h1 whileHover={{scale:1.1}} className="hover:text-white"><a href="#">Downloads</a></motion.h1>
                <motion.h1 whileHover={{scale:1.1}} className="hover:text-white"><a href="#">Support</a></motion.h1>
              </div>

              <div className="clik gap-2 flex font-bold text-neutral-600 mt-1 h-12 me-3">
                <motion.button whileHover={{scale:1.05}} className="px-3 text-sm hover:text-white">
                  <i class="fa-solid fa-download"></i> <a href="#">Install App</a>
                </motion.button>
                <motion.button  whileHover={{scale:1.05}}className="text-sm hover:text-white pe-1.5">
                 <a href="#"> Sign up</a>
                </motion.button>
                <motion.button whileHover={{scale:1.05}} className="px-8 py-2 rounded-3xl bg-white text-black">
                <a href="#">  log in</a>
                </motion.button>
              </div>
            </div>
          </nav>
          <div className="part flex absolute md:top-16 z-0 md:flex-row top-24 flex-col">
            <div className="partition1 min-h-[640px] min-w-10  md:min-w-[200px] lg:min-w-[220px] xl:min-w-[300px] 2xl:min-w-[420px] ms-3 mb-6 rounded-xl bg-neutral-900">
              <div className="1 w-96 h-18 border-t-0 border-s-0 border-e-0 border-white mt-4 ms-5 text-neutral-400 font-bold flex text-[16px] justify-between "><h1 className=" hover:text-white"><i class="fa-brands fa-stack-overflow text-3xl px-2"></i>Your Library</h1><i class="fa-solid fa-plus  font-extralight me-2 mt-2  hover:text-white p-2 hover:bg-neutral-800 rounded-full h-8"></i></div>
             
              <div className="2 ms-4 me-0.5 h-80 w-96  overflow-scroll overflow-x-hidden scroll-auto  [&::-webkit-scrollbar]:w-2">
              <div className="cn1 w-92 bg-neutral-800 h-46 rounded-xl mt-1 mb-2.5">
                <h1 className="text-white ms-4 pt-8 font-bold text-xl">Create your first playlist</h1>
                <h2 className="text-white ms-4 font-bold text-sm mt-3.5">It's easy, we'll help you</h2>
                <motion.button whileHover={{scale:1.05}} className="ms-4 mt-7 text-[13px] bg-white px-3 py-1.5 text-black font-bold  rounded-3xl cursor-pointer">Create playlist</motion.button>
              </div>

              <div className="cn2 w-92 h-46 rounded-xl bg-neutral-800 mb-2.5">

              <h1 className="text-white ms-4 pt-8 font-bold text-xl">Let's find some podcasts to follow</h1>
              <h2 className="text-white ms-4 font-bold text-sm mt-3.5">We'll keep you updated on new episodes </h2>
              <motion.button whileHover={{scale:1.05}} className="ms-4 mt-7 text-[13px] bg-white px-3 py-1.5 text-black font-bold  rounded-3xl cursor-pointer">Browese podcasts</motion.button>
              </div>
              <div className="cn3 w-92 h-48 rounded-xl bg-neutral-800 mb-2.5">
                <h1 className="text-white ms-4 pt-4 font-bold text-xl">Popular albums</h1>
            <div className=" flex flex-row w-92 h-36 mt-5">
               <div className="playlist1  h-22 w-22 m-1 rounded-[4px] img flex-col"><motion.i initial={{opacity:0}} whileHover={{opacity:1}} class="fa-solid fa-play px-4 py-3.5 mt-10   text-black hover:bg-green-700 rounded-full ms-10"></motion.i> <h1 className="text-[12px] text-white font-bold">Lock</h1> <p className="text-[10px] text-white font-extralight">Sidhu moose bala</p></div>
               <div className="playlist2 h-22 w-22 m-1 rounded-[4px] img2 flex-col"><motion.i initial={{opacity:0}} whileHover={{opacity:1}} class="fa-solid fa-play px-4 py-3.5 mt-10  text-black hover:bg-green-700 rounded-full ms-10"></motion.i> <h1 className="text-[12px] text-white font-bold">Way maker</h1> <p className="text-[10px] text-white font-extralight">Navaan Sandhu</p></div>
               <div className="playlist3 h-22 w-22 m-1 rounded-[4px] img3 flex-col "><motion.i initial={{opacity:0}} whileHover={{opacity:1}} class="fa-solid fa-play px-4 py-3.5 mt-10  text-black hover:bg-green-700 rounded-full ms-10"></motion.i> <h1 className="text-[11px] text-white font-bold mt-0.5">Make memories</h1> <p className="text-[10px] text-white font-extralight">Karan aujla,ikky</p></div>
               <div className="playlist4 h-22 w-22 m-1 rounded-[4px] img4 flex-col "><motion.i initial={{opacity:0}} whileHover={{opacity:1}} class="fa-solid fa-play px-4 py-3.5 mt-10  text-black hover:bg-green-700 rounded-full ms-10"></motion.i><h1 className="text-[12px] text-white font-bold">The Finest</h1> <p className="text-[10px] text-white font-extralight">Navaan Sandhu</p></div>
              
            </div>
              </div>
              </div>
              
              <div className="3">
                <div className="footer">
                    <p className="flex gap-4 ms-5 mt-12">
                    <a className="text-[12px] font-extralight hover:underline text-white" href="#">Legal</a>
                    <a className="text-[12px] font-extralight hover:underline text-white" href="#">Safty&Privacy Center</a>
                    <a className="text-[12px] font-extralight hover:underline text-white" href="#">Private Policy</a>
                    <a className="text-[12px] font-extralight hover:underline text-white" href="#">Cookies</a>
                    </p>

                    <p className="flex gap-4 mt-3 ms-5">
                      <a className="text-[12px] font-extralight hover:underline text-white" href="#">About Ads</a>
                      <a className="text-[12px] font-extralight hover:underline text-white" href="#">Accesibility</a>
                    </p>
                    <h4 className="mt-4 ms-5 text-white text-sm hover:underline">Cookies</h4>
                    <motion.button whileHover={{scale:1.05}} className="flex border ms-5 mt-6 text-[12px] text-white font-bold border-white px-3 py-1.5 rounded-full align-middle justify-center gap-2"><i class="fa-solid fa-language mt-1.5"></i>English</motion.button>
                </div>
              </div>
            </div>

            <div className="partition2  bg-neutral-900 h-[640px] lg:min-w-[890px] xl:min-w-[1070px] 2xl:[1070px] md:min-w-[780px] min-w-[350px]  ms-2 mb-6 rounded-xl overflow-scroll scroll-auto  [&::-webkit-scrollbar]:w-2 ">
        {/* //1 */}
         <div className="cn1 h-64 min-w-96 ">
              <div className="min-w-96 flex justify-between"><h1 className="ms-4 hover:underline text-2xl font-bold text-white mt-4"><a href="#">Populer Artists</a></h1> <h1 className="text-neutral-500 text-[14px] hover:underline font-bold mt-4 me-3"><a href="#">Show all</a></h1></div>
                <div className="flex mt-2.5 gap-3">
                  <div className="singer1 hover:bg-gradient-to-t from-neutral-700 via-neutral-800 to-neutral-900 rounded-xl min-h-48 min-w-36 pt-0  p-3">
                    <div className="sing1 h-36 w-36 rounded-full"><img src="" alt="" /></div>
                    <h1 className=" text-white text-sm font-bold">Diljit Dosanjh</h1>
                    <p className="text-[13px] text-white">Artist</p>
                  </div>
                 
                  <div className="singer2 min-h-44 hover:bg-gradient-to-t from-neutral-700 via-neutral-800 to-neutral-900 rounded-xl pt-0 p-3 ">
                  <div className="sing2 w-36 h-36 rounded-full"></div>
                    <h1 className="text-sm text-white font-bold">Sidhu Moosewala</h1>
                    <p className="text-[13px] text-white">Artist</p>
                  </div>
                 
                  <div className="singer3 min-h-44 hover:bg-gradient-to-t from-neutral-700 via-neutral-800 to-neutral-900 rounded-xl pt-0   p-3 ">
                  <div className="sing3 w-36 h-36 rounded-full"></div>
                    <h1 className="text-sm text-white font-bold">Shubh</h1>
                    <p className="text-[13px] text-white">Artist</p>
                  </div>
                  
                  <div className="singer4 min-h-44 hover:bg-gradient-to-t from-neutral-700 via-neutral-800 to-neutral-900 rounded-xl pt-0    p-3">
                  <div className="sing4 w-36 h-36 rounded-full"></div>
                    <h1 className="text-sm text-white font-bold">Karan aujla</h1>
                    <p className="text-[13px] text-white">Artist</p>
                  </div>
                  
                  <div className="singer5 min-h-44 hover:bg-gradient-to-t from-neutral-700 via-neutral-800 to-neutral-900 rounded-xl  pt-0   p-3">
                  <div className="sing5 w-36 h-36 rounded-full"></div>
                    <h1 className="text-sm text-white font-bold">Honey singh</h1>
                    <p className="text-[13px] text-white">Artist</p>
                  </div>
                  
                  <div className="singer6 min-h-44  hover:bg-gradient-to-t from-neutral-700 via-neutral-800 to-neutral-900 rounded-xl pt-0 p-3 ">
                  <div className="sing6 w-36 h-36 rounded-full"></div>
                    <h1 className="text-sm text-white font-bold">Permish verma</h1>
                    <p className="text-[13px] text-white">Artist</p>
                  </div>
                </div>
            </div>
           {/* //2 */}
        <div className="cn2 h-68 min-w-96 ">
        <div className="min-w-96 flex justify-between"><h1 className="ms-4 hover:underline text-2xl font-bold text-white mt-4"><a href="#">Populer albums and singles</a></h1> <h1 className="text-neutral-500 text-[14px] hover:underline font-bold mt-4 me-3"><a href="#">Show all</a></h1></div>
            <div className="flex mt-2.5 gap-3">
                  <div className="ablum1 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl min-h-48 min-w-36   p-3">
                    <div className="alb1 h-38 w-36 rounded-xl"><img src="" alt="" /></div>
                    <h1 className="text-sm text-white font-bold">Drive Thru</h1>
                    <p className="text-[13px] text-white">2022•EP</p>
                  </div> 
                 
                  <div className="album2 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl  p-3 ">
                  <div className="alb2 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">UNDISPUTED</h1>
                    <p className="text-[13px] text-white">2023•EP</p>
                  </div>
                 
                  <div className="album3 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl  p-3 ">
                  <div className="alb3 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">MVP</h1>
                    <p className="text-[13px] text-white">2024•Album</p>
                  </div>
                  
                  <div className="album4 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl   p-3">
                  <div className="alb4 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">Jatt Infected</h1>
                    <p className="text-[13px] text-white">2020•Album</p>
                  </div>
                  
                  <div className="album5 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl p-3">
                  <div className="alb5 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">MOOSETAPE</h1>
                    <p className="text-[13px] text-white">2022•Sidhu Moosewala</p>
                  </div>
                  
                  <div className="album6 min-h-44  hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl  p-3 ">
                  <div className="alb6  w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">Patandar</h1>
                    <p className="text-[13px] text-white">2024•Album</p>
                  </div>
                </div>
            </div>
        {/* //3 */}
            <div className="cn3 h-64 min-w-96 mt-5 ">
            <div className="min-w-96 flex justify-between"><h1 className="ms-4 hover:underline text-2xl font-bold text-white mt-4"><a href="#">Populer Radios</a></h1> <h1 className="text-neutral-500 text-[14px] hover:underline font-bold mt-4 me-3"><a href="#">Show all</a></h1></div>
            <div className="flex mt-2.5 gap-3">
                  <div className="ablum1 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl min-h-48 min-w-36   p-3">
                    <div className="radio1 h-38 w-36 rounded-xl"><img src="" alt="" /></div>
                    <h1 className="text-sm text-white font-bold">Radio rock</h1>
                    <p className="text-[13px] text-white">2021•Record</p>
                  </div>
                 
                  <div className="album2 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl  p-3 ">
                  <div className="radio2 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">La Records</h1>
                    <p className="text-[13px] text-white">2018•EP</p>
                  </div>
                 
                  <div className="album3 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl  p-3 ">
                  <div className="radio3 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">KG records</h1>
                    <p className="text-[13px] text-white">2020•Radio</p>
                  </div>
                  
                  <div className="album4 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl   p-3">
                  <div className="radio4 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">Spotify Sp</h1>
                    <p className="text-[13px] text-white">2024•Songs</p>
                  </div>
                  
                  <div className="album5 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl p-3">
                  <div className="radio5 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">Rockers</h1>
                    <p className="text-[13px] text-white">2023•Songs</p>
                  </div>
                  
                  <div className="album6 min-h-44  hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl  p-3 ">
                  <div className="radio6  w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">GG records</h1>
                    <p className="text-[13px] text-white">2024•EP</p>
                  </div>
                </div>


            </div>


            {/* //4 */}
            <div className="cn4 h-72 min-w-96 mt-5 ">
            <div className="min-w-96 flex justify-between"><h1 className="ms-4 hover:underline text-2xl font-bold text-white mt-4"><a href="#">India's best</a></h1> <h1 className="text-neutral-500 text-[14px] hover:underline font-bold mt-4 me-3"><a href="#">Show all</a></h1></div>
            <div className="flex mt-2.5 gap-3">
                  <div className="ablum1 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl min-h-48 min-w-36   p-3">
                    <div className="chart1 h-38 w-36 rounded-xl"><img src="" alt="" /></div>
                    <h1 className="text-sm text-white font-bold">Shenai</h1>
                    <p className="text-[13px] text-white">purya paap</p>
                  </div>
                 
                  <div className="album2 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl  p-3 ">
                  <div className="chart2 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">Moosatrape</h1>
                    <p className="text-[13px] text-white">Sidhu Moosewala</p>
                  </div>
                 
                  <div className="album3 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl  p-3 ">
                  <div className="chart3 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">OG x moosa</h1>
                    <p className="text-[13px] text-white">Shubh x Sidhu Moosewala</p>
                  </div>
                  
                  <div className="album4 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl   p-3">
                  <div className="chart4 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">GOAT</h1>
                    <p className="text-[13px] text-white">Diljit Dosanjh</p>
                  </div>
                  
                  <div className="album5 min-h-44 hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl p-3">
                  <div className="chart5 w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">Navaan Sandhu</h1>
                    <p className="text-[13px] text-white">RXTRO, Avay</p>
                  </div>
                  
                  <div className="album6 min-h-44  hover:bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-800 rounded-xl  p-3 ">
                  <div className="chart6  w-36 rounded-xl h-38 "></div>
                    <h1 className="text-sm text-white font-bold">Tegi pannu</h1>
                    <p className="text-[13px] text-white">Top charted</p>
                  </div>
                </div>



            </div>
          
          {/* //5 */}
            <div className="footer h-96 min-w-96">
            <div className="conta mt-28 h-48 m-6 flex flex-row justify-between text-neutral-400">
              <div className="fo1 flex flex-col gap-y-2 font-mono">
              <h1 className="text-white font-bold font-sans">Company</h1>
               <a className="hover:underline" href="#">About</a>
              <a className="hover:underline" href="#">Jobs</a>
              <a className="hover:underline" href="#"> For the Record </a>
              </div>
              <div className="fo2 flex flex-col gap-y-2 font-mono">
              <h1 className="font-bold text-white font-sans">Communities</h1>
              <a className="hover:underline" href="#">For Artists</a>
              <a className="hover:underline" href="#">Developers</a>
             <a className="hover:underline" href="#">Advertising</a> 
             <a className="hover:underline" href="#"> Investors</a>
             <a className="hover:underline" href="#"> Vendors</a>


              </div>
              <div className="fo3 flex flex-col gap-y-2 font-mono">
             <h1 className="font-bold text-white font-sans"> Useful links</h1>
             <a className="hover:underline" href="#">Support</a> 
             <a className="hover:underline" href="#"> Free Mobile App</a>

              </div>
              <div className="fo4 flex flex-col gap-y-2 font-mono">
             <h1 className="font-bold text-white font-sans">Spotify Plans</h1> 
             <a className="hover:underline" href="#"> Premium Individual</a>
             <a className="hover:underline" href="#">Premium Duo</a> 
             <a className="hover:underline" href="#"> Premium Family</a>
            <a className="hover:underline" href="#"> Premium Student</a>
             <a  className="hover:underline" href="#"> Spotify Free</a>
              </div>
              <div className="fo5 flex flex-row gap-x-3">
              <i class="fa-brands fa-instagram text-xl p-3 rounded-full bg-neutral-400 text-white hover:bg-neutral-200 hover:text-black h-11 w-11"></i>
              <i class="fa-brands fa-twitter text-xl p-3 rounded-full bg-neutral-400 text-white hover:bg-neutral-200 hover:text-black h-11 w-11"></i>
              <i class="fa-brands fa-facebook text-xl p-3 rounded-full bg-neutral-400 text-white hover:bg-neutral-200 hover:text-black h-11 w-11"></i>
              </div>
              </div>
             <div className="copyr">

             </div>
            </div>
           
            </div>
          </div>
        </main>
    
      </div>
    </>
  );
};

export default App;








