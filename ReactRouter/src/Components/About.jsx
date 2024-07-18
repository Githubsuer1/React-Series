const About = ()=>{
    return (
        <div className="p-4 grid sm:grid-cols-2 grid-cols-1 sm:gap-2 ">

            <div className="max-w-full h-auto border-2 border-shadow border-gray-500 rounded-bt-md sm:rounded-lg shadow-md  
             bg-contain bg-center" style={{backgroundImage:'url(./assets/dp.jpg)', display:'block'}}>
            </div>

            <div className="border-2 p-3.5 shadow-lg rounded-md grid gap-2">

                <h1 className="font-bold">Siddhant Mishra</h1>

                <p className="text-justify">Hello I'm Siddhant Mishra, a Student/Developer with a pasion for web Development. I'm a curious and creative individual with 
                   a drive to learn and explore new ideas. With a strong foundation in development, i have developed a unique perspective and 
                   skillset that enables me to approach problems with innovative solutions. On this website, you'll find a showcase of my projects,
                   skills, and experiences that demonstrate my capabilities and dedication to my craft. Take a Look about around, and let's connect if you'd 
                   like to collaborate or learn more about my work.
                </p>
            </div>
        </div>
    )
}

export default About