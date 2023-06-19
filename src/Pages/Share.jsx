import React, { useState } from 'react'
import { Button, Navbar2, Navbar3 } from '../components'
import { RxDashboard } from 'react-icons/rx'
import { BiCog } from 'react-icons/bi'
import { AiFillGift, AiOutlineHeart,AiOutlineShareAlt } from 'react-icons/ai'
import { useLocation,useParams } from 'react-router-dom'

const Share = () => {
    const [loading, setLoading] = useState(false)
     const { text } = useParams()
     const [selectedImages, setSelectedImages] = useState()

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImages(e.target.files[0])
        }
    }

    return (
        <div className='text-white'>


            <div className=' bottom-0 sm:p-10 p-5 bg-none'>
        
         <div className='text-center'>
                    <h1 className='text-[18px] text-[#5f5f5f]'>Room: <span className='text-[#5f5f5f]'>{text}</span></h1>
                    
                </div>

               
               <div>
                <input type='file' placeholder='Choose files' className='mt-14'  onChange={imageChange} />
</div>

                <AiOutlineShareAlt className='text-[30px] text-[#5f5f5f] cursor-pointer float-right top-[2%] right-[5%] fixed' />
            </div>


<div className='sm:px-10 p-5 sm:mt-0 mt-10  bottom-0'>
<h1 className='text-center text-[#5f5f5f]'>Share room link to devices you want to share files with</h1>
            <Button 
      title='Share Room Link'
      styles='w-full mt-10  p-2 rounded hover:bg-[#1dc071] border border-[#1dc071] bottom-0 mb-10'
      />
      </div>

            <div className=' sm:p-10 p-5'>
                {selectedImages && (
                    <div className='w-[200px] sm:p-10 p-5 border rounded border-[#5f5f5f]'>
                        <img src={URL.createObjectURL(selectedImages)} />
                    </div>
                )}
            </div>

           <div className='bottom-0 fixed right items-center text-center flex justify-center sm:pb-10 pb-[30px] p-5 bg-none'>
                {!selectedImages ? (
                    <button className='bg-[#5f5f5f]  px-5 py-2 rounded opacity-70 cursor-no-drop'>Send File</button>
                ) : (
                    <Button
                        title={loading ? (
                            'Sending...'
                        ) : (
                            'Send File'
                        )}
                        styles={loading ? (
                            'bg-[#1dc071]  px-5 py-2 rounded opacity-70 cursor-wait'
                        ) : (
                            'bg-[#1dc071]  px-5 py-2 rounded '
                        )}
                        handleClick={() => setLoading(true)}
                    />
                )}

            </div>



        </div>
    )
}

export default Share
