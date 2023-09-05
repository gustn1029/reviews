import { ReviewMotionList } from "../motion/ReviewMotionList";
import ReviewsItem from "./ReviewsItem";
import { ReviewDataList } from "@/types/interface";

export default function ReviewsList({reviews}: ReviewDataList) {
    return (
        <ReviewMotionList>
            {
                reviews.map((val) => (
                    <ReviewsItem id={val.id} title={val.title} image={val.image} review={val.review} />
                ))
            }
        </ReviewMotionList>
    );
};