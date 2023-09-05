'use client';

import { FormEventHandler, useRef } from 'react';
import classes from './ReviewsForm.module.css';
import { OnAddReview, ReviewsData } from '@/types/interface';

export default function ReviewsForm(props:OnAddReview) {

    const titleRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const reviewRef = useRef<HTMLTextAreaElement>(null);

    const submitHandler:FormEventHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleRef.current!.value;
        const enteredImage = imageRef.current!.value;
        const enteredReview = reviewRef.current!.value;

        const reviewData:ReviewsData = {
            title: enteredTitle,
            image: enteredImage,
            review: enteredReview
        }  

        return props.addReview(reviewData);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div>
                <label htmlFor="title">제목</label>
                <input type="text" id='title' placeholder='제목을 입력하세요.' ref={titleRef} />
                <label htmlFor="image_url">이미지 주소</label>
                <input type="url" id='image_url' placeholder='이미지 주소를 입력하세요.' ref={imageRef} />
                <label htmlFor="review">리뷰 작성</label>
                <textarea name="review" id="review" rows={5} ref={reviewRef}></textarea>
            </div>
            <button>submit</button>
        </form>
    );
}