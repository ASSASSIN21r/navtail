import 'tailwindcss/tailwind.css'
import mailimg from '../../assests/mail.png'
export default function Navbar() {
    return (
        <div >
            <div className=' bg-blue-900 place-items-center h-7 '  >
                <div className='md:container md:mx-auto  h-7 bg-blue-900 flex justify-between'>
                    <div className='flex '>
                        <img src="https://i.postimg.cc/QNP9w1gc/mail.png" className='pl-4 h-6' />
                        <h1 className='text-white font-sans pl-2 text-base font-light'>tatabuildingindia@tata.com</h1>
                    </div>
                    <div className=' flex'>
                        <img src="https://i.postimg.cc/mkQ0R7n8/facebook.png" className=' h-8'></img>
                        <img src="https://i.postimg.cc/660csHjF/instagram.png" className=' h-8'></img>
                        <img src="https://i.postimg.cc/3JNgs3DD/youtube.png" className=' h-8'></img>
                        <p className='text-white text-lg pl-2 pr-2'>|</p>
                        <img src="https://i.postimg.cc/vBZGXY00/search.png" className='h-7'></img>
                    </div>
                </div>
            </div>
            <div className='md:container md:mx-auto  bg-transparent flex justify-end relative'>
                <ol className='text-white flex pt-8 justify-end absolute z=10'>
                    <li className='pl-4 font-light cursor-pointer'>
                        WHO ARE WE
                    </li>
                    <li className='pl-4 font-light cursor-pointer'>
                        WHAT WE DO
                    </li>
                    <li className='pl-4 font-light cursor-pointer'>
                        ACHIEVEMENTS
                    </li>
                    <li className='pl-4 font-light cursor-pointer'>
                        COMMUNITY
                    </li>
                    <li className='pl-4  font-light cursor-pointer'>
                        HALL OF FAME
                    </li>
                    <li className='pl-4 cursor-pointer'>
                        <img src='https://i.postimg.cc/7hYcp9d4/menu.png'></img>
                    </li>
                    <li className='pl-4 '>
                        <img className='h-12 w-12' src='https://i.postimg.cc/Twtr1J7C/566-5660559-chemicals-clipart-removebg-preview.png'></img>
                    </li>
                </ol>

            </div>
        </div>
    )
}