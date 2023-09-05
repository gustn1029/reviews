'use client';

import TitleWrap from "@/components/motion/TitleWrap";
import ReviewsForm from "@/components/reviews/ReviewsForm";
import { ReviewsData } from "@/types/interface";
import { useRouter } from 'next/navigation'

export default function ReviewsPage() {
    const router = useRouter();
    
    function addReviewHandler(reviewData: ReviewsData) {
        fetch(
            "https://reviews-4deea-default-rtdb.firebaseio.com/review.json",
            {
                method: 'POST',
                body: JSON.stringify(reviewData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            router.replace('/');
        })
    }
    return (
        <div>
            <TitleWrap>
                <h1>Review Page</h1>
                <p>This page is Review page.</p>
            </TitleWrap>
            <ReviewsForm addReview={addReviewHandler} />
        </div>
    )
}