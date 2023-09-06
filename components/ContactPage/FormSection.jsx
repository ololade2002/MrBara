
import React from 'react'


const FormSection = () => {
  return (
    <div className='max-w-[90%] md:max-w-[80%] mx-auto  bg-white drop-shadow-lg mt-12'>
        

    <form className='flex-1 mx-auto w-10/12 md:w-9/12 py-24 drop-shadow-sm '>

    <div class="mb-8 flex sm:flex-row flex-col gap-8">
    <div className='sm:w-6/12 w-full'>
    <label htmlFor='First Name' className='font-sand text-[#4c4037] font-[500] text-[19px] ' >First Name</label>
    <input type="text" id="text" className="font-sand border border-[#e5d9cf]   rounded   block w-full px-4 py-3 text-[19px]  " placeholder="" required/>
    </div> 

    <div className="sm:w-6/12 w-full">
    <label htmlFor='First Name' className='font-sand text-[#4c4037] font-[500]  text-[19px] ' >Last Name</label>
    <input type="email" id="email" className="font-sand  border border-[#e5d9cf] placeholder:text-[#4c4037] font-[500] rounded block w-full px-4 py-3 text-[19px]  " placeholder="" required/>
    </div>
    
    </div>

  
    <div className="mb-8 flex flex-col">
    <label htmlFor='First Name' className='font-sand text-[#4c4037] font-[500]  text-[19px] ' >Design Project</label>
    <select name="" id="" className=' pl-4 py-3 border   border-[#e5d9cf] rounded'  required>
      <option value="option1">Select </option>
      <option value="option1">Kitchen Design</option>
      <option value="option2">Bathroom Design</option>
      <option value="option3">Interior Design</option>
      <option value="option4">Design Consultation</option>
    </select>
    </div>

    <div className="mb-8">
    <label htmlFor='First Name' className='font-sand text-[#4c4037] font-[500]  text-[19px] ' >Email Address</label>
    <input type="email"  className="font-sand  border border-[#e5d9cf] rounded placeholder:text-[#4c4037] font-[500] block w-full px-4 py-3 text-[19px]  " placeholder="" required/>
    </div>

    <div className="mb-8">
    <label htmlFor='budget' className='font-sand text-[#4c4037] font-[500]  text-[19px] ' >Budget</label>
    <input type="text"   className="font-sand  border border-[#e5d9cf] rounded placeholder:text-[#746e6e] font-[400] block w-full px-4 py-3 text-[17px]  " placeholder="Please provide an approximate range ie 75K - 100K USD " required/>
    </div>

    <div className="mb-8">
    <label htmlFor='First Name' className='font-sand text-[#4c4037] font-[500]  text-[19px] ' >Phone Number</label>
    <input type="text"  className="font-sand  border border-[#e5d9cf] rounded placeholder:text-[#4c4037] font-[500] block w-full px-4 py-3 text-[19px]  " placeholder="" required/>
    </div>

    <div className="mb-8">
    <label htmlFor='First Name' className='font-sand text-[#4c4037] font-[500]  text-[19px] ' >Home Address</label>
    <input type="text"  className="font-sand  border border-[#e5d9cf] rounded placeholder:text-[#4c4037] font-[500] block w-full px-4 py-3 text-[19px]  " placeholder="" required/>
    </div>

    <div class="mb-8 flex sm:flex-row flex-col gap-6">
    <div className='sm:w-4/12 w-full'>
    <label htmlFor='First Name' className='font-sand text-[#4c4037] font-[500] text-[19px] ' >City</label>
    <input type="text" id="text" className="font-sand border border-[#e5d9cf]   rounded   block w-full px-4 py-3 text-[19px]  " placeholder="" required/>
    </div> 

    <div className="sm:w-4/12 w-full">
    <label htmlFor='First Name' className='font-sand text-[#4c4037] font-[500]  text-[19px] ' >State/Province</label>
    <input type="email" id="email" className="font-sand  border border-[#e5d9cf] placeholder:text-[#4c4037] font-[500] rounded block w-full px-4 py-3 text-[19px]  " placeholder="" required/>
    </div>

    <div className="sm:w-4/12 w-full">
    <label htmlFor='First Name' className='font-sand text-[#4c4037] font-[500]  text-[19px] ' >Zip/Postal</label>
    <input type="email" id="email" className="font-sand  border border-[#e5d9cf] placeholder:text-[#4c4037] font-[500] rounded block w-full px-4 py-3 text-[19px]  " placeholder="" required/>
    </div>
    
    </div>


    <div className="mb-8">
    <label htmlFor='First Name' className='font-sand text-[#4c4037] font-[500]  text-[19px] ' >Tell Us About Your Design Project</label>
    <textarea id="message" rows="4" className="font-sand block px-4 py-3 text-[17px] w-full placeholder:text-[#746e6e] font-[400]rounded  border-[#e5d9cf]  border-[1px] " placeholder="Please include further details of your project scope. How extensive is this project ? Are you looking for design consultation ? Do you want to shop for interior decor materials ? etc. "></textarea>  
    </div> 

     <button className="px-4 py-3 relative float-right  group overflow-hidden font-normal bg-[#4c4037] text-white inline-block">
     <span className="absolute bottom-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#957f72] group-hover:h-full opacity-90"></span>
     <span className="relative group-hover:text-white font-[300] capitalize text-[18px] font-sand">Submit Inquiry</span>
     </button>

     </form>

    </div>
  )
}

export default FormSection