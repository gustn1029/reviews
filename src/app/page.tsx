import Image from 'next/image'
import TitleWrap from '@/components/motion/TitleWrap'
import { ReviewsData } from '@/types/interface'
import ReviewsList from '@/components/reviews/ReviewsList';

const DUMMY_DATA:ReviewsData[] = [
  {
    id:'test id 1', 
    title:'test Title 1', 
    image:'https://cdn.pixabay.com/photo/2014/10/22/18/13/donald-duck-498512_1280.jpg', 
    review:'This Review is test review!'
  },
  {
    id:'test id 2', 
    title:'test Title 2', 
    image:'https://cdn.pixabay.com/photo/2014/10/22/18/13/donald-duck-498512_1280.jpg', 
    review:'This Review is test review!'
  },
  {
    id:'test id 3', 
    title:'test Title 3', 
    image:'https://cdn.pixabay.com/photo/2014/10/22/18/13/donald-duck-498512_1280.jpg', 
    review:'This Review is test review!'
  }
]

export default function Home() {
  return (
    <div>
      <TitleWrap>
        <h1>All Reviews</h1>
        <p>This page is All Reviews Page.</p>
      </TitleWrap>
      <ReviewsList reviews={DUMMY_DATA} />
    </div>
  )
}
