import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { Educations } from "../../constants";

const EducationCard = ({item})=>{
    if(!item) return 'loading...'
    return(
          <VerticalTimelineElement

          contentStyle={{backgroundColor:'#1d1836', color:'#fff'}}
          contentArrowStyle={{borderRight: '7px solid #232631'}}
          date={item?.date}
          iconStyle={{background: item?.iconBg}}
          icon={
             <div className='flex justify-center items-center w-full h-full' >
                 <img src={item?.icon} alt=""  className='w-[60%] h-[60%] object-contain ' />
             </div>
          }
            >
          <div>
          <h3 className='text-white text-[24px] font-bold ' > {item.title} </h3>
          <p className='text-secondary text-[18px]' style={{margin:0}}> {item.company_name} </p>
         </div>
         <ul className='mt-5 list-disc ml-5'>
          {item.points.map((item,index)=>(
            <li key={index } className='text-white-100 text-[14px] pl-1 tracking-wider ' >{item}</li>
          ))}
         </ul>
          </VerticalTimelineElement> 
    )
}




export const Education = () => {
  return (
   < >
    <div className="sm:mx-20 mt-10">
      <p className='text-gray-500 font-medium text-3xl '>What my studies are</p>
      <h2 className='text-white font-bold sm:text-7xl text-5xl  w-fit'>Certifications</h2>
    </div>
    <div className="flex flex-col ">
           <VerticalTimeline >
            {Educations.map((educ,index)=>(
                <EducationCard item={educ} key={index} />
            ))}
           </VerticalTimeline>
    </div>
   </>
  )
}
