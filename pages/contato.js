import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" integrity="sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const Contato = () => {
    return (
        
        <div>
            <PageTitle title='Contato' />
            <div>
                <div className='text-center justify-center'>
                    <h1 className='text-xl font-bold'>Di Carvalho Web Systems</h1>
                    <p className='text-4xl font-bold'><a href='https://web.whatsapp.com/send?phone=5534984262755' target='_blank'><img className='w-40 inline-block' src='logo-whatsapp.png' /></a></p>
                    <p className='text-2xl text-blue hover:underline text-blue-600'><a href='mailto:ernanedev@outlook.com' >ernanedev@outlook.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contato