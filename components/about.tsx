import Link from "next/link"
import SlideUp from "./slide-up"
import { HiArrowDown } from "react-icons/hi"
const Languages = [
    {skill: "Python"},
    {skill: "Java"},
    {skill: "R"},
    {skill: "C"},
    {skill: "C++"},
    {skill: "SQL"},
    {skill: "TypeScript"},
    {skill: "JavaScript"},
]
const Development = [
  {skill: "Node.js"},
  {skill: "RestAPI"},
  {skill: "Flutter"},
  {skill: "HTML"},
  {skill: "CSS"},
  {skill: "React"},
  {skill: "Next.js"},
]

const InfrastructureAndDevOps = [
  {skill: "Docker"},
  {skill: "AWS Cloud Technologies"},
  {skill: "CI/CD"},
  {skill: "Kubernetes"},
  {skill: "Git"},
  {skill: "GitHub"},
  {skill: "GitHub Actions"},
]
// const skills = [
//   {skill: "Python"},
//   {skill: "Java"},
//   {skill: "R"},
//   {skill: "C"},
//   {skill: "C++"},
//   {skill: "Node.js"},
//   {skill: "Docker"},
//   {skill: "AWS Cloud Technologies"},
//   {skill: "RestAPI"},
//   {skill: "Flutter"},
//   {skill: "UI Path"},
//   {skill: "CI/CD"},
//   {skill: "Kubernetes"},
//   {skill: "SQL"},
//   {skill: "HTML"},
//   {skill: "CSS"},
//   {skill: "Git"},
//   {skill: "GitHub"},
//   {skill: "React"},
//   {skill: "Next.js"},
//   {skill: "TypeScript"},
//   {skill: "JavaScript"},
// ]

export default function About() {
    return (
        <section id="About">
          <div className="my-12 pb-12 md:pt-16 md:pb-48 mx-auto">
            <h1 className="text-center font-bold text-4xl">
              About Me
              <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
    
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
              <div className="md:w-1/2 ">
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                  Get to know me!
                </h1>
              </div>
              <div className="text-center md:w-1/2 md:text-left">
                <h1 className="text-2xl font-bold mb-6">Skills</h1>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div>
                    <div className="mb-6">
                      <h1 className="text-xl font-bold">Languages</h1>
                      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {Languages.map((item, idx) => {
                          return (
                            <p
                              key={idx}
                              className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                            >
                              {item.skill}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h1 className="text-xl font-bold">Development</h1>
                      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {Development.map((item, idx) => {
                          return (
                            <p
                              key={idx}
                              className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                            >
                              {item.skill}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h1 className="text-xl font-bold">Infrastructure and DevOps</h1>
                      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                        {InfrastructureAndDevOps.map((item, idx) => {
                          return (
                            <p
                              key={idx}
                              className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                            >
                              {item.skill}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                {/* <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                  {skills.map((item, idx) => {
                    return (
                      <p
                        key={idx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                      >
                        {item.skill}
                      </p>
                    )
                  })}
                </div> */}
                </SlideUp>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
                <Link
                    href={"#Projects"}
                >
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
      )
  }