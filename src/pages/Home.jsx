 import AboutImage1 from "../assets/images/black-white.jpg";
 import { Link } from 'react-router-dom';
 import AboutImage2 from "../assets/images/colored-attire.jpg";
 import PrinciImage from "../assets/images/christina-morrillo.jpg";
 
 const Home = () => {
   return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen  bg-center" style={{backgroundImage: `url(${AboutImage2})`}}>
        <div className="bg-gradient-to-r from-black/70 to-black/30 h-full">

        </div>

      </div>
     <div className="pt-10 max-w-6xl mx-auto px-8 lg:px-0"> 
        <div className=" ">
          <div>
            <h2 className="pb-5 text-lg text-slate-500 text-center">About Us</h2>
            <h1 className="pb-12 text-3xl font-bold text-center">Quality Education For Your Children</h1>
          </div>
        <div className="flex flex-col flex-grow gap-5 lg:flex-row">
          <div className="w-full shadow-lg lg:w-1/3">
            <div className="">
              <img src={AboutImage1} alt=" Image"  className="w-full bg-cover"/>
            </div>
            <div className="px-9 py-11">
              <h2 className="pb-4 text-2xl font-semibold ">Other Activities</h2>
              <p className="pb-8 text-lg text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Fugiat ipsam eum nesciunt assumenda illo. Illum!
              </p>

              <div className="pt-5">
              <Link to="#" className="px-5 py-3 border-2 border-black rounded-3xl hover:border-blue-600 hover:text-blue-600">KNOW MORE</Link>
              </div>
            </div>
          </div>  
            
          <div className="w-full shadow-lg lg:w-1/3">
            <div className="">
              <img src={AboutImage2} alt=" Image"  className="w-full bg-cover"/>
            </div>
            <div className="px-9 py-11">
              <h2 className="pb-4 text-2xl font-semibold ">Other Activities</h2>
              <p className="pb-8 text-lg text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Fugiat ipsam eum nesciunt assumenda illo. Illum!
              </p>

              <div className="pt-5">
              <Link to="#" className="px-5 py-3 border-2 border-black rounded-3xl hover:border-blue-600 hover:text-blue-600">KNOW MORE</Link>
              </div>
            </div>
          </div>
          
           
          <div className="w-full shadow-lg lg:w-1/3">
            <div className="">
              <img src={AboutImage2} alt=" Image"  className="w-full bg-cover"/>
            </div>
            <div className="px-9 py-11">
              <h2 className="pb-4 text-2xl font-semibold ">Other Activities</h2>
              <p className="pb-8 text-lg text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Fugiat ipsam eum nesciunt assumenda illo. Illum!
              </p>

              <div className="pt-5">
              <Link to="#" className="px-5 py-3 border-2 border-black rounded-3xl hover:border-blue-600 hover:text-blue-600">KNOW MORE</Link>
              </div>
            </div>
          </div>
          
          
        </div>
        </div>

        <div className="pt-32">
          <div className="flex lg:flex-row flex-col gap-10">
            <div className="lg:w-[60%] w-full">
              <h1 className="text-3xl font-bold pb-8  ">A Welcome Address From the Principal</h1>
              <hr className="h-1 bg-blue-600 w-20 " />
              <p className="pt-10 text-lg text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Mollitia nesciunt doloremque ex iure, nemo corrupti repudiandae, 
                 voluptatem quis, esse dolores cupiditate minima eum harum deleniti
                 assumenda illum. Nam placeat, consectetur tempore labore eos nisi
                 at tempora ex aliquid dolore tenetur nostrum quasi praesentium
                 aspernatur expedita deserunt cum ab perspiciatis culpa suscipit,
                 aliquam fugit? Autem quidem fugit deserunt recusandae. Earum, eos
                 adipisci atque facilis porro reiciendis beatae labore dignissimos
                 at libero magnam natus sunt, quos illum ratione. Aperiam, molestias 
                 quo maiores, quod, recusandae quae unde fugit sit debitis maxime in.
                  Numquam nesciunt id reiciendis sed, maiores molestiae. Dolorem commodi dolor eveniet!
              </p>
            </div>
            <div className="lg:w-[40%] w-full">
            <img src={PrinciImage} alt="Principal" />
            </div>
          </div>
        </div>

        <div className="pt-32 pb-28 mx-auto" >
          <div className="bg-primary text-white p-9 lg:w-[550px] w-full]">
            <h1 className="text-2xl font-bold pb-4">Our Vision</h1>
            <p className="text-lg  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis odit
               maiores quaerat odio blanditiis aut necessitatibus, assumenda accusantium 
               corrupti cupiditate quibusdam, iusto perferendis? Quam corporis ea facere
                magnam? Minima, soluta id eligendi, distinctio saepe aperiam minus 
              assumenda aut excepturi a nobis ut eius quos voluptas sint facilis labore, doloremque illo.</p>
          </div>
        </div>
     </div>
    </>

   )
 }
 
 export default Home