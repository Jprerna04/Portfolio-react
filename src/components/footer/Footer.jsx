import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className='text-gray-200 bg-blue-950 body-font'>
        <div className='container justify-center px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
            <p className='text-2xl font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
                Portfolio
            </p>
            <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
                <p className='text-gray-200'>
                    &copy; 2025Prerna All Rights Reserved
                </p>
            </span>
        </div>
    </footer>
    </>
  )
}
