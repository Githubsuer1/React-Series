const About = ()=>{
    return (
        <div className="w-full bg-purple-400 h-full sm:h-screen grid justify-items-center p-8">

            <div className="w-full max-w-2xl sm:h-96  grid grid-cols-1 sm:grid-cols-2 p-4 shadow-2xl rounded gap-4 overflow-hidden">

                
                <img 
                className="w-full  sm:h-full  max-w-lg rounded"
                src="https://media.licdn.com/dms/image/D5603AQFfHS8dUV_Zzg/profile-displayphoto-shrink_800_800/0/1690552724008?e=1727308800&v=beta&t=M7B7YDeEaFa_k_bbCnXtH9KV95NJcTYStNMeUX4cTN0" alt="Profile Picture" />
            

                <div className="p-4 shadow-lg rounded-md box-border flex flex-col gap-2 bg-white/40">

                    <h1 className="font-bold sm:text-2xl">Siddhant Mishra</h1>

                    <p className="text-justify text-sm sm:text-md">Hello I'm Siddhant Mishra, a Developer with a pasion for web Development. I'm a curious and creative individual with 
                    a drive to learn and explore new ideas. With a strong foundation in development, i have developed a unique perspective and 
                    skillset that enables me to approach problems with innovative solutions. On this website, you'll find a showcase of my projects,
                    skills, and experiences that demonstrate my capabilities and dedication to my craft. Take a Look about around, and let's connect if you'd 
                    like to collaborate or learn more about my work.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About