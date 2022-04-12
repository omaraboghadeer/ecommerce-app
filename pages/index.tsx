import type { NextPage } from 'next'
import Head from 'next/head'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Product from '../components/Product'
import productImage from '../public/smart-phone.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

SwiperCore.use([Autoplay])

const Home: NextPage = () => {

  let products: any[] = Array(5).fill({
    name: 'product name',
    price: '19,856 EGP',
    image: productImage
  });


  return (
    <div>
      <Head>
        <title>E-Commerce App</title>
        <meta name="description" content="E-Commerce app demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container mx-auto min-h-screen py-4'>
        <h1 className='text-2xl text-green-500'>
          Welcome to E-Commerce App
        </h1>

        <div className='mt-6'>
          <Swiper
            modules={[Pagination]}
            speed={500}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className='bg-slate-300 rounded-md shadow h-72 text-amber-500'>
                image 1
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-slate-300 rounded-md shadow h-72 text-amber-500'>
                image 2
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-slate-300 rounded-md shadow h-72 text-amber-500'>
                image 3
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='flex mt-6'>

          <div className='w-1/4'>
            <h2 className='capitalize text-3xl'>Category Name</h2>
          </div>
          <div className='w-3/4'>
              <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                navigation={true}
                speed={500}
                spaceBetween={15}
                className="category_silder"
              >
                {
                  products.map((product: any, index: number) => (
                    <SwiperSlide key={index}>
                      <Product product={product}/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            <div className=''>

            </div>
          </div>

        </div>

      </main>

    </div>
  )
}

export default Home
/**
 * <div className="card">
                        <Image src={product.image} height={200} />
                        <div>
                          <h5 className='text-2xl'>{product.name}</h5>
                          <h4 className='text-green-600 text-3xl'>{product.price}</h4>
                        </div>
                      </div>
 */