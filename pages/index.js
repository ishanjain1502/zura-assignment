import { Inter } from 'next/font/google'
import Search from '@/components/search/Search'
import CarouselWrapper from '@/components/offers/CarouselWrapper'
import ProductCard from '@/components/productCard/ProductCard'
import { baseUrl } from '@/config/urls'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })



export default function Home({images}) {

  const [product, setProduct] = useState(null)

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Search setProduct={setProduct} />


        <CarouselWrapper images={images} />

        <ProductCard product={product} />
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const url = baseUrl + '/offers/getOffers'
  const response = await fetch(url, {
    method: "GET"
  })

  const res = await response.json()

  return {
    props: {
      images: res.data
    }
  }
}