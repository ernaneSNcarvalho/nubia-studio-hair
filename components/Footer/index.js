import React from 'react'
import './style.module.css'

const Footer = () => {
    return (
        <div className='bg-black p-4'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className='container mx-auto text-center text-white font-bold'>
                Projeto desenvolvido por: {' '}
                <a className='hover:underline text-yellow-300' href='dicarvalho.dev.br'>Di Carvalho Web Systems</a> / {' '}
                <a className='hover:underline text-yellow-300' href='https://www.linkedin.com/feed/'>Linkedin</a> / {' '}
                <a className='hover:underline text-yellow-300' href='https://github.com/ernaneSNcarvalho'>GitHub</a>
                <div className='mt-2 bg-black'>
                    <img className='inline p-4 justify-rigth' src='/logocarvalho.png' />
                    
                </div>
               
            </div>

        </div>

    )
}

export default Footer