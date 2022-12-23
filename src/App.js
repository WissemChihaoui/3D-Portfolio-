import Spline from '@splinetool/react-spline';
import {useState , useEffect} from 'react'
import {IoCodeWorking, IoMenu, IoPencil, IoLogoGithub, IoEye, IoLogoLinkedin, IoLogoFacebook} from 'react-icons/io5'
import { urlFor, client } from './client';
import { AnimatePresence, motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

function App() {
  const SocialLinks = [
    {
      id:1,
      iconSrc: <IoLogoGithub className='text-textBase text-3xl cursor-pointer' />,
      name : "Github",
      link :"#"
    },
    {
      id:2,
      iconSrc: <IoLogoLinkedin className='text-textBase text-3xl cursor-pointer' />,
      name : "Linkedin",
      link :"#"
    },
    {
      id:3,
      iconSrc: <IoLogoFacebook className='text-textBase text-3xl cursor-pointer' />,
      name : "Facebook",
      link :"#"
    }
  ]
  const [experience, setExperience] = useState([]);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const query = '*[_type == "experiences"]';
  
    client.fetch(query)
      .then((data) => {
        setExperience(data);
      })
    },[]);

    const [project, setProject] = useState([]);
    const [filterProject, setFilterProject] = useState([]);
    const [noOfElement, setNoOfElement] = useState(6);

    const loadMore = () =>{
      setNoOfElement(noOfElement + noOfElement);
    }

    useEffect(() => {
      const query = '*[_type == "All"]';
    
      client.fetch(query)
        .then((data) => {
          setProject(data);
          setFilterProject(project);
        })
      }, [])

    const slice = filterProject.slice(0, noOfElement);
    console.log(slice.length)
    console.log(filterProject.length)

  return (
    <AnimatePresence initial={false}>
    <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">

      <nav className='w-full px-6 fixed inset-x-0 top-2 flex justify-center items-center z-50' >
        <div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
          <p className='text-lg text-slate-200 font-medium'>
            Wissem Chihaoui
          </p>
          <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
            <a href='#home' className='text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Home</a>
            <a href='#about' className='text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>About</a>
            <a href='#projects' className='text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Projects</a>
            <a href='#contact' className='text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>Contact</a>
            <a href='#' className='ml-auto text-base font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-x1 hover:border-gray-100 duration-100 ease-in-out text-textBase '>Download</a>
          </div>
          <div className='block md:hidden ml-auto cursor-pointer' onClick={()=>setIsActive(!isActive)}>
            <IoMenu className='text-2x1 text-textBase' />
          </div>
          {isActive && (
            <div className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6' >
              <a href='#home' className='text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}>Home</a>
            <a href='#about' className='text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}>About</a>
            <a href='#projects' className='text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}>Projects</a>
            <a href='#contact' className='text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out' onClick={() => setIsActive(false)}>Contact</a>
            <a href='#' onClick={() => setIsActive(false)} className=' text-base font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-x1 hover:border-gray-100 duration-100 ease-in-out text-textBase '>Download</a>
            </div>
          )}
        </div>
      </nav>

      <div className=" w-full h-full relative" id="home">
      <Spline scene="https://prod.spline.design/xQ5iLZquGZnOlvAD/scene.splinecode" height={"800px"}/>
      <div className=' bottom-10 w-full justify-center items-center flex absolute'>
        <div className='shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl'>
          <p className='text-white'>Use your mouse to orbit</p>
        </div>
      </div>
      </div>
      <main className='w-[80%] mt-5'>
          <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24' id='about'>
            <div className='w-full h-420 flex items-center justify-center'>
              <div className='w-275 h-340 bg-emerald-200 rounded-md relative'>
                <img src='img/profile.jpg' alt='Wissem Chihaoui' className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg'/>
              </div>
            </div>
            <div className='w-full h-420 flex flex-col items-center justify-center'>
              <p className='text-lg text-textBase text-center'>
                Hey, I'm Wissem Chihaoui a UI/UX designer and Web developer. I would love to welcome you into my second portfolio where you will see only some of my works, like 50% of my works. 
                You can visit my main portfolio <a href='https://wissemchihaoui.netlify.app/' className='text-textBase'>here</a>
              </p>

              <button className='w-full md:w-auto relative
               mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 
               group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80' >
                <span className='w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  Download
                </span>
               </button>

            </div>
          </section>

            <section className='w-full flex items-center justify-center'>
              <VerticalTimeline>
                {experience?.map((experience) =>(
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={experience.year}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<IoPencil />}
                  >
                    {experience.works.map((work) => (
                      <>
                    <h3 className="vertical-timeline-element-title">{work.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{work.company}</h4>
                    <p>
                      {work.desc}
                    </p>
                    <br />
                    </>
                    ))}
                  </VerticalTimelineElement>
                ))}
              
              
              </VerticalTimeline>
            </section>
            <section id='projects' className='flex flex-wrap items-center justify-evenly my-24 gap-4'>
              {slice.map((project) => (
                <div className='border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out' key={project.name}>
                <p className='text-lg text-textBase font-medium uppercase flex items-center justify-center'>
                  {project.title}
                </p>
                <img src={urlFor(project.imgUrl)} alt={project.name} className="w-full h-full object-cover rounded-md my-4"/>

                <div className='flex flex-1 items-center justify-between'>
                    <p className='text-lg text-gray-300'>{project.description}
                      <span className='block text-sm text-gray-500'>
                        {project.tags[0]}
                      </span>
                    </p>
                    <>
                    <a href={project.codeLink} target="_blank" rel='noreferre'>
                      <div>
                        
                        {project.tags[0] === "UI/UX"? (
                        <></>
                      ) : project.tags[0] === "Graphic Design"?
                      (<></>) :
                      project.tags[0] === "Logo Design"?
                      (<></>) :
                      (<IoLogoGithub className='text-textBase text-3x1 cursor-pointer'/>)
                      }
                      </div>
                    </a>
                    <a href={project.projectLink} target="_blank" rel='noreferre'>
                      <IoEye className='text-textBase text-3x1 cursor-pointer'/>
                    </a>
                    
                    </>
                </div>

              </div>
              ))}
              {slice.length === filterProject.length ? 
             
              (
        <p className='text-textBase text-3x1'>You reach the end of my works</p>
      ):(
              <button onClick={()=>loadMore()} className='w-full md:w-auto relative
               mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 
               group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80' >
                <span className='w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                  See More
                </span>
               </button>)}
            </section>
            <section className='flex flex-col items-center justify-center w-full my-24' id='contact'>
              <p className='text-2x1 text-gray-400 capitalize'>Follow me on</p>

              <div className='flex items-center justify-center w-full my-4 flex-wrap gap-4'>
                {SocialLinks && SocialLinks.map((n) => (
                  <a key={n.id}
                  href={n.link}
                  className="w-full md:w-auto px3 md:px-8 py-5 border border-zinc-800 rounded-2x1 hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
                    {n.iconSrc}
                    <p className='text-lg text-textBase'>{n.name}</p>
                  </a>
                ))}
              </div>
            </section>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
