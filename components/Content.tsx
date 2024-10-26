import Image from "next/image"

const Content = () => {
  return (
    <section className='section content-section max-w-[1200px] m-auto mt-32'>

    <h1 className="title text-5xl font-semibold text-center mb-20 text-white">Why choose us?</h1>

      <div className="grid-content card-container grid grid-cols-2 gap-8">
      <div className="card bg-card p-12 rounded-2xl">
            <h1 className="text-white text-3xl font-medium mb-8">Expertise & Innovation</h1>
            <p className="mb-8 text-xl text-gray-500">Combining years of experience with cutting-edge technology.</p>
            <Image src="/card-img1.jpg" alt="Card 1 image"
            width={500} height={500} className="mb-8"/>
            <a href="/" className="see flex gap-2 text-secondary text-xl relative">See more <Image src="arrow.svg" alt="Arrow icon"
            width={18} height={18}/></a>
        </div>
        <div className="card bg-card p-12 rounded-2xl">
            <h1 className="text-white text-3xl font-medium mb-8">Customized Solutions</h1>
            <p className="mb-8 text-xl text-gray-500">We prioritize understanding your vision to create personalized designs.</p>
            <Image src="/card-img2.jpg" alt="Card 2 image"
            width={500} height={500} className="mb-8"/>
            <a href="/" className="see flex gap-2 text-secondary text-xl relative">See more <Image src="arrow.svg" alt="Arrow icon"
            width={18} height={18}/></a>
        </div>
      </div>

    </section>
  )
}

export default Content