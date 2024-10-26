const Form = () => {
  return (
    <section className="section-form section max-w-[1200px] m-auto mt-32 text-white mb-40">

        <form action="" method="post" className="max-w-[700px] m-auto rounded-2xl">

            <h1 className="mb-12 text-4xl font-bold">Hey! Any questions? Contact us!</h1>

            
              
              <label htmlFor="name">First Name*</label><br/>
              <input type="text" name="name" id="name" required className="mb-8 text-white"/><br/>
              
             
              <label htmlFor="email">Email*</label><br/>
              <input type="email" name="email" id="email" required className="mb-8 text-white"/><br/>
            

            <label htmlFor="message">Message(Optional)</label><br/>
            <textarea name="message" id="message" className="mb-8 text-white"></textarea>

            <button type="submit" className="bg-secondary rounded-3xl p-3 text-xl max-w-[200px] hover:">Send</button>
        </form>
    </section>
  )
}

export default Form