import { HomeContainer, ProductContainer } from '../styles/pages/home'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import { formatMoney } from '../utils/money'

import 'keen-slider/keen-slider.min.css'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
}

interface Props {
  products: Product[]
}

export default function Home({ products }: Props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      //
    },
    breakpoints: {
      '(min-width: 320px)': {
        slides: { perView: 1, spacing: 16 },
      },
      '(min-width: 580px)': {
        slides: { perView: 2, spacing: 32 },
      },
      '(min-width: 920px)': {
        slides: { perView: 3, spacing: 32 },
      },
      '(min-width: 1140px)': {
        slides: { perView: 4, spacing: 32 },
      },
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((p) => (
        <ProductContainer className="keen-slider__slide" key={p.id}>
          <Image src={p.imageUrl} width={520} height={480} alt={p.name} />
          <footer>
            <strong>{p.name}</strong>
            <span>R$ 129,90</span>
          </footer>
        </ProductContainer>
      ))}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatMoney(price.unit_amount as number),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2h
  }
}
