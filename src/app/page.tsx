import Image from 'next/image'
import Link from 'next/link';
import HeadBoady from './homebody/page';
import Footer from './footer/page';
import Headers from './headbody/page';
import Recipe from './toprecipes/page';
import HeaderTemplet from './headbodytemplet/page';
import ProfilePopup from './loginprofile/page';
import DietCalculator from './nutritionCalculator/page';
import HomeCard from './homeCard/page';
import GalleryPage from './gallary/page';

export default function Home() {
  return (
    <>
    <div>
    <HeadBoady/>
    <HomeCard/>
    <Recipe/>
    <GalleryPage/>
    </div>
    <div><Footer/></div>
   


    
    
   </>
  )
}
