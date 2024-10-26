import Image from "next/image";

const CenterSection = () => {
  return (
    <section className="center-section mt-32">
         <div className='section flex justify-center items-center flex-col h-screen text-white max-h-full max-w-[1000px] m-auto'>

        <h1 className='title text-4xl text-center font-extrabold'>CodeCanvas is where creativity meets technology.</h1>
        <p className='text-xl text-center mt-8'> From sleek interface design to functional and responsive website development, we do it all to enhance your digital presence.</p>

        <a href="#pricing" className='bg-secondary p-6 mt-5 rounded-3xl text-black transition-colors hover:bg-complementary'>Learn More</a>
        </div>
    </section>
  )
}

export default CenterSection