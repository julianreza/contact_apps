"use client"

import { get } from "@/services/axios";
import Image from "next/image";
import { useEffect } from "react";
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await get<Response>('/contact');
                if (result) {
                    dispatch(setContact(result.data))
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex justify-between items-center">
            <Swiper
                effect={'coverflow'}
                slidesPerView={4}
                spaceBetween={50}
                centeredSlides={true}
                loop={true}
                className="w-full bg-gray-700 rounded-3xl"
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
                    contact.map(row => (
                        <SwiperSlide key={row.id} className="flex flex-col text-center justify-center items-center bg-white rounded-3xl my-10" style={{ width: '50%' }}>
                            <div className="flex justify-center flex-col items-center h-3/6">
                                <img src={row.photo} alt={row.firstName} className="w-full h-full object-cover rounded-t-3xl" />
                                <div className="bottom-5 relative bg-white border border-gray-100 rounded-full p-2">
                                    <span className="text-xl">{row.age}</span>
                                </div>
                            </div>
                            <div className="px-4 text-wrap mb-4">
                                <span className="font-semibold text-xl">{row.firstName + ' ' + row.lastName}</span>
                            </div>
                            <div className="px-4 text-wrap mb-10">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <button className="bg-gray-100 border border-gray-200 hover:bg-gray-500 hover:text-white w-full py-4 rounded-b-xl">Details</button>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Home