function Skills(){
    return (
        <div className="w-full h-full  bg-purple-400 p-8">

            <div className="w-full h-full md:screen grid justify-items-center grid-rows-1 rounded ">

                <div className="w-full max-w-lg p-5 h-full shadow-2xl bg-white/20 rounded">

                    <h1 className="bg-white/20 py-1.5 px-4 rounded font-bold ">Skills</h1>

                        <div className="p-4">
                            <h1 className="bg-transparent font-bold ">Technology</h1>
                            <ul className="list-disc ">
                                <li>Javascript (DOM Manipulation, Event Handling, Objects)</li>
                                <li>Python (OOP, Functions, Operators, Basic Date Structures)</li>
                                <li>React (Hooks, React Router, Redux Toolkit, Context API)</li>
                                <li>Django (Views, Models, Forms, Authentication, Admin Panel, MVT)</li>
                                <li>Tailwind CSS (Responsive Design, Utility first approach)</li>
                            </ul>

                        </div>

                        <div className="p-4"> 
                            <h1 className="bg-transparent font-bold ">Tools</h1>
                            <ul className="list-disc ">
                                <li>IDE: VS Code</li>
                                <li>Version Control: Git</li>
                            </ul> 
                        </div>
                    
                    


                        <div className="p-4">
                            <h1 className="bg-transparent font-bold ">Proficiency Level</h1>
                            <ul className="list-disc">
                                <li>Python: Intermediate</li>
                                <li>Django: Basic</li>
                                <li>React: Intermediate</li>
                                <li>Javascript: Intermediate </li>
                                <li>Tailwind CSS: Basic </li>
                            </ul>
                        </div>

                        <div className="p-4">
                            <h1 className="bg-transparent font-bold ">Certification</h1>
                            <ul className="list-disc">
                                <li>Course: Python Full Stack Web Developer Bootcamp</li>
                                <li>Duration: 32 Hours</li>
                                <li>Instructor: Jose Portila</li>
                                <li>Plateform: Udemy</li>
                                
                            </ul>
                        </div>


                </div>

                
            </div>
        </div>
    )
}

export default Skills