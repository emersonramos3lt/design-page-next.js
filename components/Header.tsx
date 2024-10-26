

const Header = () => {
  return (
    <header id="Header">

        <span className="logo text-white text-2xl font-bold cursor-pointer transition-colors">CodeCanvas</span>

        <div className='text-header flex justify-center items-center flex-col w-full m-auto h-screen text-white'>

        <h1 className='title text-5xl text-center font-extrabold'>We create modern and engaging digital experiences.</h1>
        <p className='text-xl text-center mt-8'>At CodeCanvas, our specialty is developing creative and responsive websites that highlight your brand's identity.</p>

        <a href="#pricing" className='bg-secondary text-black p-6 mt-5 rounded-3xl transition-colors hover:bg-complementary'>Start Now</a>
        </div>
    </header>
  )
}

export default Header