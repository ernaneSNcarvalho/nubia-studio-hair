import React from 'react'
import './styles.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <React.Fragment>
            <div className='bg-black p-4 shadow-md'>
                <div className='container mx-auto '>
                    <Link href='/'>
                        <a><img className='mx-auto' src='/logo_palpitebox.png' /></a>
                    </Link>
                </div>
            </div>
            <div className='bg-black p-4 shadow-md text-center'>
                <Link href='/sobre'>
                    <a className='px-2  hover:underline text-yellow-300' >Sobre</a>
                </Link>
                <Link href='/contato'>
                    <a className='px-2 hover:underline text-yellow-300' >Contato</a>
                </Link>
                <Link href='/pesquisa'>
                    <a className='px-2 hover:underline text-yellow-300' >Pesquisa</a>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Header