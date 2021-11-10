

export default function Navbar() {
    return (
        <div >
            <div className='socials-nav '>
                <div className='container position-relative pt-2 pb-2 d-flex align-items-center justify-content-between'>
                    <div>
                        <p className='text-white fw-300 fs-12 p-0 '>
                            <img src='/assests/mail.png' className='pr-10'></img>
                            tatabuildingindia@tata.com
                        </p>
                    </div>

                    <div className='right-socials  mb-0 d-flex'>
                        <ol className='mb-0 p-0 list-decoration-none d-flex '>
                            <li>
                                <img src='/assests/facebook.png'></img>
                            </li>
                            <li>
                                <img src='/assests/instagram.png'></img>
                            </li>
                            <li>
                                <img src='/assests/twitter.png'></img>
                            </li>
                            <li >
                                <img src='/assests/youtube.png' className='border-custom'></img>
                            </li>
                            <li className='pl-3 fw-300'>
                                <img src='/assests/search.png'></img>
                            </li>
                        </ol>

                    </div>

                </div>




            </div>
            <div className='navs bg-transparent  position-absolute r-zero '>
                <ol className='list-decoration-none d-flex pt-4  '>
                    <li className='pr-4 cursor-pointer fs-14 ff-p text-white fw-200'>
                        WHO ARE WE
                    </li>
                    <li className='pr-4 cursor-pointer fs-14 ff-p text-white fw-200'>
                        WHAT WE DO
                    </li>
                    <li className='pr-4 cursor-pointer fs-14 ff-p text-white fw-200'>
                        ACHIEVEMENTS
                    </li>
                    <li className='pr-4 cursor-pointer fs-14 ff-p text-white fw-200'>
                        COMMUNITY
                    </li>
                    <li className='pr-4 cursor-pointer fs-14 ff-p text-white fw-200' >
                        HALL OF FAME
                    </li>
                    <li className='pr-4 cursor-pointer'>
                        <img className='h-14' src='/assests/vector.png'></img>
                    </li>
                    <li>
                        <img className='h-30' src='/assests/tatalogo.png'></img>
                    </li>
                </ol>

            </div>
        </div>

    )
}