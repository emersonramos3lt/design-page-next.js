

const PricingSection = () => {
  return (
   <section className="section max-w-[1200px] m-auto mt-48 mb-48" id="pricing">
       <h1 className="text-3xl font-semibold text-white text-center mb-4">Our Pricing</h1>
       <p className="text-center text-gray-500 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, corrupti?</p>

       <div className="grid grid-cols-3 gap-4 mt-14">
            <div className="bg-card p-8 text-white rounded-2xl">
                <h1 className="mb-3">STARTER</h1>
                <h2 className="text-4xl font-bold mb-5">$100/month</h2>
                <h3 className="mb-4">Benefits:</h3>
                <p className="text-gray-500">
                    - Basic SEO optimization<br/>
                    - Mobile-responsive layout<br/>
                    - Monthly maintenance support<br/>
                    - Standard hosting<br/>
                    - Custom 5-page website design<br/>
                </p>
                <button className="w-full bg-secondary rounded-3xl text-black p-3 mt-16 transition-colors hover:bg-complementary">Start</button>
            </div>
            <div className="bg-secondary p-8 text-black rounded-2xl">
                <h1 className="mb-3">PROFESSIONAL (RECOMMENDED)</h1>
                <h2 className="text-4xl font-bold mb-5">$150/month</h2>
                <h3 className="mb-4">Benefits:</h3>
                <p>
                    - Advanced SEO optimization<br/>
                    - Mobile-responsive layout<br/>
                    - Integration with social media<br/>
                    - Custom 10-page website design<br/>
                    - Weekly maintenance and updates<br/>
                </p>
                <button className="w-full bg-black rounded-3xl text-secondary p-3 mt-16 transition-colors hover:bg-zinc-900">Start</button>
            </div>
            <div className="bg-card p-8 text-white rounded-2xl">
                <h1 className="mb-3">ENTERPRISE</h1>
                <h2 className="text-4xl font-bold mb-5">$520/month</h2>
                <h3 className="mb-4">Benefits:</h3>
                <p className="text-gray-500">
                    - Fully customized website with unlimited pages<br/>
                    - Mobile, tablet, and desktop responsiveness<br/>
                    - 24/7 maintenance<br/>
                    - Dedicated premium hosting<br/>
                    - E-commerce setup and management<br/>
                </p>
                <button className="w-full bg-secondary rounded-3xl text-black p-3 mt-8 transition-colors hover:bg-complementary">Start</button>
            </div>
       </div>
   </section>
  )
}

export default PricingSection