'use client';

import { useEffect, useState, Component } from 'react';
import TitleWrap from "@/components/motion/TitleWrap";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger'; // Update the import statement
import ScrollTriggerInstance from 'gsap/ScrollTrigger';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/style/slick.css';
// GSAP에 ScrollTrigger 플러그인을 등록
gsap.registerPlugin(ScrollTrigger);

export default function GsapPage() {
    const [animation, setAnimation] = useState<boolean>(false);

    useEffect(() => {
        const dl = document.querySelectorAll('.div-left');
        const dr = document.querySelectorAll('.div-right');
        const container = document.querySelector('.container');

        gsap.set(dl, { x: 0, opacity: 0 });
        gsap.set(dr, { x: 0, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        dl.forEach((val, idx) => {
            const div_width = dl[0].clientWidth / 1.5;
            const left_xIdx = (4 - idx) * -div_width;
            const right_xIdx = (4 - idx) * div_width;
            const yIdx = (4 - idx) * 15;

            tl.add('start')
                .to(dl[idx], {
                    x: left_xIdx,
                    y: yIdx,
                    opacity: 1,
                    duration: 0.1,
                    ease: 'power2.inOut',
                }, 'start')
                .to(dr[idx], {
                    x: right_xIdx,
                    y: yIdx,
                    opacity: 1,
                    duration: 0.1,
                    ease: 'power2.inOut',
                }, 'start');
        });

        const scrollTriggerInstance: ScrollTriggerInstance = ScrollTrigger.create({
            trigger: container, // 영역을 감지할 요소
            start: "top 80%", // 영역 감지 시작 지점
            onEnter: () => {
                // 영역에 진입하면 실행될 코드
                tl.play();
                setAnimation(true);
            },
            onLeaveBack: () => {
                // 영역을 벗어나면 실행될 코드
                tl.reverse();
                setAnimation(false);
            },
        });

        
        
        return () => {
            scrollTriggerInstance.kill(); // 컴포넌트가 언마운트될 때 ScrollTrigger를 해제
        };
    }, []);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    const style = `w-[200px] h-[400px] absolute left-0 top-0`;
    return (
        <div>
            <TitleWrap>
                <h1>Gsap Page</h1>
                <p>This page is a review page.</p>
            </TitleWrap>
            <div className={`w-[1200px] m-auto text-center overflow-hidden`}>
                <Slider {...settings} className='slick_wrap translate-x-[30%]'>
                    {Array.from({length: 5}, (_, i) => (
                        <div
                            className='flex items-center justify-center bg-white h-[500px]'
                        >
                            <h3>{i}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='h-[100vh]'></div>
            <section className="container flex w-[200px] m-auto h-[500px] relative">
                <div className={` div-left ${style} bg-slate-50`}>1</div>
                <div className={` div-left ${style} bg-slate-200`}>2</div>
                <div className={` div-left ${style} bg-slate-300`}>3</div>
                <div className={` div-left ${style} bg-slate-400`}>4</div>
                <div className={`div ${style} bg-red-500 ${animation === false ? 'z-[1]' : 'z-[-1]'}`}>5</div>
                <div className={` div-right ${style} bg-slate-600`}>6</div>
                <div className={` div-right ${style} bg-slate-700`}>7</div>
                <div className={` div-right ${style} bg-slate-800`}>8</div>
                <div className={` div-right ${style} bg-slate-900`}>9</div>
            </section>
        </div>
    )
}