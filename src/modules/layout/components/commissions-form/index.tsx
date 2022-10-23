import React, { useState, MouseEvent } from 'react'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com'
import { send } from 'emailjs-com'

const CommissionsForm = () => {
    return (
      <div className='flex flex-col items-center bg-black p-4'>
        <h1 className="text-3xl text-white text-center m-4">Commission custom art, apparrel, decor, accessory, or tattoo</h1>
        <h3 className="text-white text-center m-2">Introduce yourself and share your vision! The artist will contact you about how to manifest the exact piece you want, and to determine a fair price</h3>
        <a
          href="mailto:eyeball4800@gmail.com"
          className="rounded-md bg-red-700 p-2 text-white m-5"
          target="_blank"
          rel="noreferrer"
        >
          Order Commission
        </a>
      </div>
    )
}

export default CommissionsForm

