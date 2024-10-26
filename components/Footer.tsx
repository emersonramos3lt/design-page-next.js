import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-4">
        <div className="mr-14">
        <span className="text-white text-2xl font-bold"><a href="#Header">CodeCanvas</a></span><br/><br/>
        <p className="text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, dolor. Consequatur quam molestias cum magni?</p>
        </div>

        <div>
          <h1 className="text-2xl text-white font-semibold">About</h1><br/>
          <p className="text-gray-300">
            FAQs<br/><br/>
            Pricing
          </p>
        </div>

        <div>
          <h1 className="text-2xl text-white font-semibold">Social</h1><br/>
          <p className="text-gray-300">
            More<br/><br/>
            Found us
          </p>
        </div>

        <div>
          <h1 className="text-2xl text-white font-semibold">Services</h1><br/>
          <p className="text-gray-300">
            Price<br/><br/>
            Marketing<br/><br/>
            Blog
          </p>
        </div>
    </footer>
  )
}

export default Footer