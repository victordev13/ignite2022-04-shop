import type { NextPage } from 'next'
import { HomeContainer, ProductContainer } from '../styles/pages/home'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'

import 'keen-slider/keen-slider.min.css'

const Home: NextPage = () => {
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
      <ProductContainer className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Ignite React</strong>
          <span>R$ 129,90</span>
        </footer>
      </ProductContainer>
      <ProductContainer className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Ignite React</strong>
          <span>R$ 129,90</span>
        </footer>
      </ProductContainer>
      <ProductContainer className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Ignite React</strong>
          <span>R$ 129,90</span>
        </footer>
      </ProductContainer>
      <ProductContainer className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Ignite React</strong>
          <span>R$ 129,90</span>
        </footer>
      </ProductContainer>
      <ProductContainer className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Ignite React</strong>
          <span>R$ 129,90</span>
        </footer>
      </ProductContainer>
    </HomeContainer>
  )
}

export default Home
