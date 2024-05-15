import React from "react";
import SlideUp from "./slide-up"

const projects = [
    {
      name: "Drug Afforability Application",
      description:
        "A drug affordability web-application that uses a copay algorithm to allow users to find the cheapest drug alternative.",
      image: "/images/drug1.png",
      skills: [
        {skill: "Next.js"},
        {skill: "Javascript"},
        {skill: "CSS"},
        {skill: "DynamoDB"},
        {skill: "AWS Cognito & Lambdas"},
      ],
    },
    {
        name: "Mobile Health Application",
        description:
          "A habit tracking Android application where users create mental and physical health goals to pursue.",
        image: "/images/health.png",
        skills: [
          {skill: "Kotlin"},
          {skill: "TypeScript"},
          {skill: "DynamoDB"},
          {skill: "AWS API Gateway"},
        ],
      },
      {
        name: "Mobile Health Application",
        description:
          "A habit tracking Android application where users create mental and physical health goals to pursue.",
        image: "/images/health.png",
        skills: [
          {skill: "Kotlin"},
          {skill: "TypeScript"},
          {skill: "DynamoDB"},
          {skill: "AWS API Gateway"},
        ],
      },
  ]

  export default function ProjectsSection() {
    return (
        <section id="Projects" className="flex justify-center">
            <div className="w-full max-w-4xl my-12 pb-12 md:pt-16 md:pb-48">
            {/* <div className="w-full max-w-4xl p-8"> */}
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
    
            <div className="flex flex-col space-y-8">
                {projects.map((project, idx) => {
                    return(
                        <SlideUp offset="-300px 0px -300px 0px">
                        <div key={idx} className="bg-white shadow-xl rounded-lg animate-slideUpCubiBezier animation-delay-2 overflow-hidden">
                                {/* <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12"> */}
                                <div className="flex flex-col md:flex-row">
                                    <div className=" md:w-1/3">
                                        <img
                                            src={project.image}
                                            alt=""
                                            // className="rounded-xl shadow-xl"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="md:w-2/3 p-4 flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-bold mb-4 text-neutral-600">{project.name}</h1>
                                            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                                        {project.skills.map((skill, skillIdx) => {
                                            return (
                                            <p
                                                key={skillIdx}
                                                style={{
                                                    backgroundImage: 'radial-gradient(100% 100% at 0% 50%, #020617 50%, #DD335C',
                                                }}
                                                className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                            >
                                                {skill.skill}
                                            </p>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </div>
                            {/* </SlideUp> */}
                        </div>
                        </SlideUp>
                )})}
            
            </div>
            </div>
        </section>
      )
    }


// export default function ProjectsSection() {
//     return (
//         <section id="Projects">
//             <div className="my-12 pb-12 md:pt-16 md:pb-48">
//             <h1 className="my-10 text-center font-bold text-4xl">
//                 Projects
//             <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//             </h1>
    
//             <div className="flex flex-col space-y-28">
//                 {projects.map((project, idx) => {
//                     return(
//                         <div key={idx}>
//                             <SlideUp offset="-300px 0px -300px 0px">
//                                 <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
//                                 {/* <div className="md:w-1/2"> */}
//                                     <div className=" md:w-1/2">
//                                         <img
//                                             src={project.image}
//                                             alt=""
//                                             width={500}
//                                             height={1000}
//                                             className="rounded-xl shadow-xl"
//                                         />
//                                     </div>
//                                     <div className="md:w-1/2">
//                                         <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
//                                         <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
//                                             {project.description}
//                                         </p>
//                                         <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
//                                         {project.skills.map((item, idx) => {
//                                             return (
//                                             <p
//                                                 key={idx}
//                                                 className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
//                                             >
//                                                 {item.skill}
//                                             </p>
//                                             )
//                                         })}
//                                         </div>
//                                     </div>
//                                 {/* </div> */}
//                                 </div>
//                             </SlideUp>
//                         </div>
//                 )})}
            
//             </div>
//             </div>
//         </section>
//       )
//     }