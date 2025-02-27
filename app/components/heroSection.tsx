import Image from 'next/image';
import myImage from '@/../public/IMG-6403.jpg';

export default function HeroSection() {
  return (
    <div className="bg-slate-950">
      <div className="flex px-24 py-10 justify-center items-center">
        <div className="mr-10">
          <Image
            className="rounded-2xl w-full h-auto md:w-auto md:h-auto"
            src={myImage}
            width={1000}
            alt="me :)"
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-white font-bold text-5xl mb-4">
            Hello! <br />
            I&apos;m Vinícius
          </h1>
          <p className="text-white text-xl w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
            I am a Computer Engineering student with hands-on experience in programming, fullstack
            development, workflow optimization, and IT infrastructure. Skilled in tools like Python,
            Java, Full-stack development, source control and SQL, with a strong foundation in Linux
            and robotics. Currently enrolled at an exchange program at Technische Hochschule
            Ingolstadt at the Computer Science and AI course.
          </p>
        </div>
      </div>
    </div>
  );
}
