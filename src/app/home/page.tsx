'use client'
import Image from 'next/image'
import Link from 'next/link';
import HeadBoady from '../homebody/page';
import Footer from '../footer/page';
import GalleryPage from '../gallary/page';
import HomeCard from '../homeCard/page';
import Recipe from '../toprecipes/page';

export default function MainHome() {
  return (
    <>
    <div>
    <HomeCard/>
    <Recipe/>
    <GalleryPage/>
    </div>
    <div></div>
   </>
  )
}
