    import React from 'react'
    import {FaGithubSquare, FaInstagram} from 'react-icons/fa'

    export function Footer  ()   {
    return (
        <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center'id=''>
            <p className='my-5 text-gray-500'>33 Test <br/>Test Blvd., 3303</p>
                <div className="inline-flex text-gray-500 gap-4 text-3xl">
                <a href="https://github.com/LeonardoMachunac" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                <a href="https://www.instagram.com/machunac_ga/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                </div>
        </div>
    )
}
