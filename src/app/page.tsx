export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-bdki-darkest">
      {/* INTRO SECTION */}
      <section className='w-full flex justify-center items-center mb-12 border border-bdki-light-grey'>
        <div className='p-4'>
          <h1 className='text-4xl font-bold p-2'>Welcome to BDKI boilerplate</h1>
          <h4 className='font-semibold'>start a project from scratch, without having to get your nails dirtier than necessary</h4>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className='w-full border border-bdki-light-grey flex justify-center items-center mb-12'>
        <div className='p-4'>
          <h4 className='text-2xl font-semibold'>This is the about section</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum voluptatem perspiciatis facilis obcaecati dicta minima, molestiae numquam labore quasi eveniet possimus facere id eos aut accusamus optio. Delectus, quod?</p>
        </div>
      </section>
    </main>
  )
}
