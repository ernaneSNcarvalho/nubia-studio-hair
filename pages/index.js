import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)

    return (
        <div>
            <PageTitle title='Seja Bem Vindo' />
            <p className='mt-12 mb-2 font-bold sm:text-center'><em><strong>Nubia Studio Hair</strong></em><br /> Estamos abertos a ouvir sua opinião e sugestão.</p>
            <div className='text-center mt-12 my-12 font-bold'>
                <Link href='/pesquisa'>
                    <a className='bg-black text-white px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opiniao ou sugestao</a>
                </Link>
            </div>
            {!data && <p>Carregando...</p>}
            {!error && data && data.showCoupon &&
                <p className='mt-12 mb-2 font-bold text-center'>
                    {data.message}
                </p>
            }
        </div>

    )
}

export default Index