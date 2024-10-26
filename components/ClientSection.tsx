import Image from "next/image";

const ClientSection = () => {
  return (
    <section className="section-client grid-client client-section max-w-[1400px] m-auto bg-secondary text-white mt-32 rounded-2xl p-8 grid grid-cols-2 items-center pt-20 pb-20">

        <div className="max-w-[500px] m-auto">
            <h1 className="title text-6xl mb-8 text-black font-bold">What Our Clients Say:</h1>
            <h2 className="h2-client text-2xl text-black">We pride ourselves on delivering results that exceed expectations.</h2>
        </div>
        <div className="card-client bg-white text-black p-10 h-[500px] rounded-2xl  flex items-center flex-col justify-center">
            <p className="text-2xl text-black">"Working with WebWave Design was a game-changer for our business. They took the time to understand our needs and created a website that truly represents our brand."</p>

            <div className="flex items-center gap-2 mt-8 text-gray-700">
                <Image src="/client.jpg" alt="Client image"
                width={100} height={100} className="rounded-full"/>
                <p>- Alex Morgan, CEO of GreenLeaf Marketing</p>
            </div>
        </div>

    </section>
  )
}

export default ClientSection