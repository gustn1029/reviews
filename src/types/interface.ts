import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface MainNavigationTool{
    title: string;
    path: string;
}

export interface ReviewsData {
    id?: string;
    title: string;
    image: string;
    review: string;
}

export interface ReviewDataList {
    reviews: ReviewsData[];
}

export interface OnAddReview {
    addReview: (data:ReviewsData) => void;
}