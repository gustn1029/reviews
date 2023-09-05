
import { ReviewsData } from '@/types/interface';
import { ReviewMotionListItem } from '../motion/ReviewMotionList';

export default function ReviewsItem({id, title, image, review}: ReviewsData) {
    return (
        <ReviewMotionListItem key={id}>
            <article className='bg-white p-8 shadow-xl'>
                <figure className='overflow-hidden max-h-[400px] mb-8'>
                    <img src={image} alt={title} />
                </figure>
                <div className='text-center'>
                    <h2 className='text-2xl uppercase font-semibold mb-4'>{title}</h2>
                    <p className='text-gray-500'>{review}</p>
                </div>
            </article>
        </ReviewMotionListItem>
    );
}