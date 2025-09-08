import React from 'react'

const Contact = () => {
  return (
    <section className="max-h-screen min-h-screen">
        <div className='flex flex-col justify-start items-start p-4 pt-12'>
            <h2 className='text-4xl font-bold mb-4'>Contact</h2>
            <p className='text-lg'>Feel free to reach out to me via email or phone:</p>
            <ul className='mt-4'>
                <li>Email: example@example.com</li>
                <li>Phone: (123) 456-7890</li>
            </ul>
        </div>
    </section>
  )
}

export default Contact