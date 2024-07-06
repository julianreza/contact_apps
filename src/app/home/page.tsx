"use client"

import { get } from "@/services/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setContact } from "@/store/slices/contact";

interface Contact {
    id: string
    firstName: string
    lastName: string
    age: number
    photo: string
}

interface Response {
    message: string
    data: Contact[]
}

const Home: React.FC = () => {
    const contact = useSelector((state: RootState) => state.contact.contact);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await get<Response>('/contact');
                if (result) {
                    dispatch(setContact(result.data))
                }
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
        };

        fetchData();
    }, []);

    return (
        <div className="flex justify-between items-center">
            <Swiper
                effect={'coverflow'}
                slidesPerView={4}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                className="w-full rounded-3xl"
                modules={[EffectCoverflow]}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
            >
                {
                    loading ?
                        <>
                            <SwiperSlide className="flex flex-col text-center items-center bg-gray-400 shadow-2xl rounded-3xl my-10 animate-pulse" style={{ height: 550 }}>
                            </SwiperSlide>
                            <SwiperSlide className="flex flex-col text-center items-center bg-gray-400 shadow-2xl rounded-3xl my-10 animate-pulse" style={{ height: 550 }}>
                            </SwiperSlide>
                            <SwiperSlide className="flex flex-col text-center items-center bg-gray-400 shadow-2xl rounded-3xl my-10 animate-pulse" style={{ height: 550 }}>
                            </SwiperSlide>
                            <SwiperSlide className="flex flex-col text-center items-center bg-gray-400 shadow-2xl rounded-3xl my-10 animate-pulse" style={{ height: 550 }}>
                            </SwiperSlide>
                            <SwiperSlide className="flex flex-col text-center items-center bg-gray-400 shadow-2xl rounded-3xl my-10 animate-pulse" style={{ height: 550 }}>
                            </SwiperSlide>
                            <SwiperSlide className="flex flex-col text-center items-center bg-gray-400 shadow-2xl rounded-3xl my-10 animate-pulse" style={{ height: 550 }}>
                            </SwiperSlide>
                        </>
                        :
                        contact.map(row => (
                            <SwiperSlide key={row.id}>
                                <div className="hover:scale-110 transition-all duration-300 flex flex-col text-center items-center bg-white shadow-2xl rounded-3xl my-10">
                                    <div className="flex justify-center flex-col items-center w-full mb-4" style={{ height: 300 }}>
                                        <img src={row.photo} alt={row.firstName} className="w-full h-full object-cover rounded-t-3xl" />
                                        <div className="bottom-5 relative bg-white border border-gray-200 rounded-full p-2">
                                            <span className="text-xl">{row.age}</span>
                                        </div>
                                    </div>
                                    <div className="px-4 text-wrap mb-4">
                                        <span className="font-semibold text-xl">{row.firstName + ' ' + row.lastName}</span>
                                    </div>
                                    <div className="px-4 text-wrap mb-10">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <button className="bg-gray-700 text-white hover:bg-gray-300 hover:text-gray-700 w-full py-4 rounded-b-3xl">Details</button>
                                </div>
                            </SwiperSlide>
                        ))
                }
            </Swiper>
        </div>
    )
}

export default Home