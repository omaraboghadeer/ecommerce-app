import type { GetServerSideProps, NextPage } from 'next'
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
    id: 1,
    title: 'product name',
    price: '19,856',
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

        <div className='flex flex-col md:flex-row mt-6'>
          <div className='md:w-1/4 flex flex-col mr-3'>
            <div className="card h-52 bg-red-600 rounded shadow flex justify-center items-center mb-3">
            <p className="text-2xl text-white">Banner 1</p>
            </div>
            <div className="card h-52 bg-red-600 rounded shadow flex justify-center items-center">
              <p className="text-2xl text-white">Banner 2</p>
            </div>
          </div>
          
          <div className='md:w-3/4 h-auto'>
            <Swiper
              modules={[Pagination]}
              speed={500}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="h-full"
            >
              <SwiperSlide>
                <div className='bg-slate-300 rounded-md shadow h-full flex justify-center items-center'>
                  <p className='text-2xl capitalize text-blue-600'>image 1</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='bg-slate-300 rounded-md shadow h-full flex justify-center items-center'>
                  <p className='text-2xl capitalize text-blue-600'>image 2</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='bg-slate-300 rounded-md shadow h-full flex justify-center items-center'>
                  <p className='text-2xl capitalize text-blue-600'>image 3</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mt-6'>

          <div className='md:w-1/4'>
            <h2 className='capitalize text-3xl'>Category Name</h2>
          </div>
          <div className='md:w-3/4'>
              <Swiper
                modules={[Navigation]}
                breakpoints={{
                  320: {slidesPerView: 1},
                  440: {slidesPerView: 2},
                  720: {slidesPerView: 3},
                  991: {slidesPerView: 4},
                }}
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch('https://fakestoreapi.com/products/categories');
//   const data = await response.json();

//   return {
//     props: {
//       categories: data
//     }
//   }

// }
