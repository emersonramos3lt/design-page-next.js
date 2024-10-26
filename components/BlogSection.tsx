import Image from "next/image"

const BlogSection = () => {
  return (
    <section className="section max-w-[1200px] m-auto mt-20 mb-20">
      <div className="blog-grid blog-text bg-white p-28 rounded-3xl grid grid-cols-2 items-center gap-8">
       <div className="img-container">
          <Image src="/people-img.jpg" alt="People at work"
          width={800} height={800} className="img rounded-3xl"/>
       </div>
       <div className="text-blog">
          <h1 className="title text-5xl font-semibold mb-4">See our blog!</h1>
          <p className="text-gray-500 mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <a href="/" className="button-blog bg-black text-white p-4 rounded-xl transition-colors hover:bg-neutral-800">See our blog</a>
       </div>
      </div>
    </section>
  )
}

export default BlogSection