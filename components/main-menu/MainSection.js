import Image from 'next/image';
import AnimatedText from 'react-animated-text-content';
import instagramIcon from '../../public/images/instagram.png';
import mainbg from '../../public/images/mainbg.jpg';
import ScrollIntoView from 'react-scroll-into-view';
import payment from '../../public/images/payment.png';
import whatsapp from '../../public/images/whatsapp.png';
import email from '../../public/images/email.png';
import location from '../../public/images/location.png';
import send from '../../public/images/send.png';
import confirmdesign from '../../public/images/confirmdesign.png';
import addoptions from '../../public/images/addoptions.png';
import produce from '../../public/images/produce.png';
import deliveryproduct from '../../public/images/deliveryproduct.png';
import recieveproduct from '../../public/images/recieveproduct.png';
import guarantee from '../../public/images/guarantee.png';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const MainSection = () => {


return (

    <>
    {/* ======================== HEADER ======================== */}
    {/* ======================== HEADER ======================== */}
      <div className="HEADER-CONTAINER flex flex-row z-20 sticky p-[0.75rem] justify-around boxShadow2x TopAnimation ">
    
    <div className="HEADER-CELL w-[25%] TopAnimation sm:w-[25%]">
    <div className='select-none h-[3.5rem] font-[Vibur]  flex flex-row '><p className='text-white text-[1.75rem] md:text-[1.35rem]'>Cutsom</p><p className='text-[1.5rem] md:text-[1.25rem] text-[#e6356a] pl-2 md:pl-0 pt-5 tracking-[1px]'>Neon</p></div>
    </div>
    
    <div className="HEADER-CELL w-[50%] sm:w-[60%]  pt-2 flex flex-row justify-around font-[bkodak] text-[1.25rem] md:text-[0.8rem] text-center text-[white]">
    <ScrollIntoView selector="#contact" smooth={true}><p className=' opacity-[0.7] hover:opacity-[1] hover:scale-110 cursor-pointer transition-all duration-150'> تماس</p></ScrollIntoView>
    <ScrollIntoView selector="#options" smooth={true}><p className=' opacity-[0.7] hover:opacity-[1] hover:scale-110 cursor-pointer transition-all duration-150'>ویژگی ها</p></ScrollIntoView>
    <ScrollIntoView selector="#order"   smooth={true}><p className=' opacity-[0.7] hover:opacity-[1] hover:scale-110 cursor-pointer transition-all duration-150'>سفارش</p></ScrollIntoView>

    </div>
    
    <div className="HEADER-CELL w-[25%] flex flex-row justify-end TopAnimation sm:w-[25%]">
    <div className="boxShadow p-2 cursor-pointer rounded-[1rem] h-[3rem] w-[3rem] bg-gradient-to-r from-[#c40b43] to-[#691faf]  transition-all duration-200 hover:scale-110"> <Image src={instagramIcon}/></div>
    </div>
    
    </div>
    {/* ======================== HEADER ======================== */}
    {/* ======================== HEADER ======================== */}


<div className='flex flex-col overflow-hidden z-10 mb-[3rem]'>
    
<div className=' flex flex-row md:flex-col z-10 '>
<Fade left><div className=' w-[50%] md:w-[90%] md:mx-auto text-center leftAnimation rounded-r-[15px] boxShadow '><Image src={mainbg} className='rounded-r-[15px]' alt='نئون'/></div> </Fade>
<div className=' w-[50%] md:w-full mt-[5rem] md:mt-3'>
<Fade left> <div className='flex flex-row m-auto w-[70%] md:w-11/12 font-[bkodak] text-[2.5rem] md:text-[1.75rem] md:mt-[1rem] text-[#dddddd]  rtl'><p>کاستوم</p><p className='pr-3 text-[#e6356a]'>نئون</p></div></Fade>
  <Fade right><p  className=' text-[#a0a0a0] w-[70%] md:w-11/12 m-auto font-[bkodak] text-[1.25rem] md:text-[1rem] md:mt-5 mt-[3rem] rtl' >کاستون نئون یک فروشگاه آنلاین برای سفارشات در زمینه تابلو ها و چراغ های نئون در طرح, رنگ و اندازه های دلخواه است. تمامی موارد محصول به انتخاب مشتری قابل تغییر و اضافه کردن می باشد.</p> </Fade>

 <Zoom><ScrollIntoView selector="#order" smooth={true}><p className='text-white w-4/12 md:w-7/12 m-auto font-[bkodak] text-[1.25rem] mt-[5rem] md:mt-[4rem] cursor-pointer fadeAnimation bg-gradient-to-r from-[#c40b43] to-[#691faf] text-center rounded-[10px] p-2 boxShadow  transition-all duration-100 hover:scale-110 rtl'>نحوه سفارش ؟</p></ScrollIntoView></Zoom> 
  </div>

</div>



{/* Order Road section================================================ */}
{/* Order Road section================================================ */}


<Bounce right>
<div className='text-[white] w-9/12 mx-auto font-[bkodak]  text-[2rem] md:text-[1.5rem] mt-[15rem] mb-[3rem] font-[600] tracking-[1px] rtl' id='order' > نحوه سفارش ؟ </div>
</Bounce>
<Bounce right cascade>
<div className='w-10/12 mx-auto mt-[3rem] md:mt-[2rem] flex flex-row md:flex-col justify-around font-[bkodak] text-[1rem] text-[#cacaca] rightAnimation'>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='pt-[8rem] md:pt-[3rem] md:mx-auto md:w-6/12'><p className='text-center rtl md:pr-4'>1. ارسال طرح دلخواه با واتساپ یا ایمیل </p></div>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#b20035] to-[#c40b43] md:w-5/12 p-4'><Image src={send}/></div>
</div>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#c40b43] to-[#691faf] md:w-5/12 p-4'><Image src={confirmdesign}/></div>
  <div className='pb-[9rem] md:pb-[2rem] pt-[3rem] mx-auto md:w-6/12'><p className='text-center rtl md:pl-4'>3. تایید نهایی طرح و سایز با فروشنده </p></div>
</div>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='pt-[8rem] md:pt-[3rem] md:mx-auto md:w-6/12'><p className='text-center rtl md:pr-4'>3. انتخاب  موارد دلخواه و نهایی کردن سفارش</p></div>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#691faf] to-[#c053ce] md:w-5/12 p-3'><Image src={addoptions}/></div>
</div>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#c053ce] to-[#2a72c4] md:w-5/12'><Image src={payment}/></div>
  <div className='pb-[9rem] md:pb-[2rem] pt-[3rem] mx-auto md:w-6/12'><p className='text-center rtl md:pl-4'>4. پرداخت مبلغ توافق شده با فروشنده  </p></div>
</div>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='pt-[8rem] md:pt-[3rem] md:mx-auto md:w-6/12'><p className='text-center rtl md:pr-4'>5. قرار گرفتن محصول در صف تولید</p></div>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#2a72c4] to-[#2ac4bc] md:w-5/12 p-5'><Image src={produce}/></div>
</div>
<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#2ac4bc] to-[#0bc45e] pt-2 md:w-5/12'><Image src={deliveryproduct}/></div>
  <div className='pb-[9rem] md:pb-[2rem] pt-[3rem] mx-auto md:w-6/12'><p className='text-center rtl md:pl-4'>6. ارسال سریع محصول به دست مشتری </p></div>
</div>

<div className='w-[10%] md:w-full  flex flex-col md:flex-row justify-between'>
<div className='pt-[9rem] md:pt-[3rem] md:mx-auto md:w-6/12'><p className='text-center rtl md:pr-4'>7. تحویل گرفتن محصول ( 1 ماه گارانتی )</p></div>
  <div className='rounded-[15px] boxShadow bg-gradient-to-r from-[#0bc45e] to-[#117738] md:w-5/12 p-5'><Image src={recieveproduct}/></div>
  
</div>


</div>
</Bounce>
{/* Order Road section================================================ */}
{/* Order Road section================================================ */}










{/* options section================================================ */}
{/* options section================================================ */}

<Bounce right>
<div className='text-white w-9/12 mx-auto font-[bkodak] text-[2rem] mt-[15rem] mb-[1rem] font-[600] tracking-[1px] rtl' id='options' > ویژگی ها </div>
</Bounce>
<Bounce right cascade>
<div className='w-10/12  mx-auto flex flex-row justify-around md:flex-col mt-[2rem] mb-[3rem] font-[bkodak]'>

<div className='bg-gradient-to-b  from-[#d33e45] to-[#7e1ed8] w-[25%] md:w-[90%] md:mx-auto rounded-[15px] boxShadow py-4 md:my-5'>
<p className='text-[#f0f0f0] text-center text-[1.5rem] pt-3 md:pt-1'>موارد دلخواه</p>
    <div className='w-5/12 mx-auto mt-[3rem] md:mt-[1rem] opacity-[0.8]'><Image src={addoptions}/></div>
   <p className='text-[#ffffff] w-10/12 mx-auto text-[1rem] text-center mt-[2rem] md:mt-[1.5rem] rtl'>امکان انتخاب و اضافه کردن موارد دلخواه مانند نئون ضد آب , ریموت کنترل, استند (دیوار و میز و سقف) , رنگ زمینه دلخواه , جنس زمینه دلخواه و... وجود دارد</p>
</div>

<div className='bg-gradient-to-b from-[#457ac0] to-[#1fafaf] w-[25%] md:w-[90%] md:mx-auto rounded-[15px] boxShadow py-4 md:my-5'>
  <p className='text-white text-center text-[1.5rem] pt-3 md:pt-1 '> قیمت مناسب $</p>
    <div className='w-6/12 mx-auto mt-[1rem] opacity-[0.8]'><Image src={payment}/></div>
   <p className='text-[#ffffff] w-10/12 mx-auto text-[1rem] text-center mt-[2rem] md:mt-[1.5rem] rtl'>قیمت محصول براساس جزییات و موارد اضافه شده مانند رنگ نئون , جنس صفحه , جزییات طرح , سایز طرح متغییر است و احتساب قیمت منصفانه صورت می گیرد </p>
</div>
<div className='bg-gradient-to-b from-[#2bb82b] to-[#1fafaf] w-[25%] md:w-[90%] md:mx-auto rounded-[15px] boxShadow py-4 md:my-5'>
  <p className='text-white text-center text-[1.5rem] pt-3 md:pt-1 rtl'>1 ماه گارانتی</p>
    <div className='w-6/12 mx-auto opacity-[0.8] p-5'><Image src={guarantee}/></div>
   <p className='text-[#ffffff] w-10/12 mx-auto text-[1rem] text-center rtl '>1 ماه گارانتی تعویض محصول در صورت عدم آسیب جدی , شکستگی , سوختگی . در صورتی که مشکلی از طرف فروشگاه باشد جنس تعویض با پس گرفته می شود  </p>
  </div>

</div>
  </Bounce>

{/* options section================================================ */}
{/* options section================================================ */}


{/* about section================================================ */}
{/* about section================================================ */}
<Bounce right>
<div className='text-white w-9/12 mx-auto font-[bkodak] text-[2rem] mt-[14rem]  font-[600] tracking-[1px] rtl' id='contact' > تماس با ما </div>
</Bounce>

<div className='flex flex-row md:flex-col justify-around mt-[5rem] md:mt-[2rem] mb-[5rem]'>

<Bounce left cascade>
    <div className='w-5/12 md:w-full mx-auto  flex flex-col '>
       <div className='w-full flex flex-row '><div className='w-1/12 md:w-[10%] px-1 pt-1 rounded-[15px] boxShadow md:ml-[2rem]'><Image src={whatsapp}/></div><AnimatedText  type="chars" animationType='diagonal' interval={0.07} className='text-white text-center  text-[1.5rem] md:text-[0.75rem] font-[monospace] mt-[0.5rem] ml-[2rem]'>0904 632 9661</AnimatedText></div>
       <div className='w-full flex flex-row mt-[1rem] '><div className='w-1/12 md:w-[10%] px-1 pt-1 rounded-[15px] boxShadow md:ml-[2rem]'><Image src={instagramIcon}/></div><AnimatedText type="chars" animationType='diagonal' interval={0.07} className='text-white text-center text-[1.5rem] font-[monospace]  tracking-[1px] mt-[0.5rem] ml-[2rem] md:text-[0.75rem]'>@Customneoon</AnimatedText></div>
       <div className='w-full flex flex-row mt-[1rem] '><div className='w-1/12 md:w-[10%] px-1 pt-1 rounded-[15px] boxShadow md:ml-[2rem]'><Image src={email}/></div><AnimatedText type="chars" animationType='diagonal' interval={0.07} className='text-white text-center text-[1.5rem] font-[monospace]  tracking-[1px] mt-[0.5rem] ml-[2rem] md:text-[0.75rem]'>CustomNeon@gmail.com</AnimatedText></div>
       <div className='w-full flex flex-row mt-[1rem] '><div className='w-1/12 md:w-[10%] px-1 pt-2 rounded-[15px] boxShadow md:ml-[2rem]'><Image src={location}/></div><AnimatedText type="chars" animationType='diagonal' interval={0.07} className='text-white text-center text-[1.5rem] font-[monospace]  tracking-[1px] mt-[1rem] md:mt-[0.5rem] ml-[2rem] md:text-[0.75rem]'>Tehran Province</AnimatedText></div>
    </div>
    </Bounce>
  <Bounce right>
  <div className='w-4/12 md:w-10/12 mx-auto md:mt-[2rem] text-[#bdbdbd] text-[1.5rem] md:text-[1rem] font-[bkodak] rtl'><p>کاستوم نئون یک فروشگاه آنلاین واقع در تهران است  , ثبت شفارش و پرداخت فقط از طریق اینستاگرام و واتساپ یا ایمیل امکان پذیر می باشد . مدت تحویل سفارش نسبت به ساز و جزییات بین 3 تا 5 روز می باشد</p></div>
  </Bounce>

</div>

{/* about section================================================ */}
{/* about section================================================ */}
<Zoom >
<p className='text-[#a1a1a1] text-center my-[1rem] text-[1rem] md:text-[0.75rem] font-[monospace]'>&copy;2022 CustomNeon IR,inc.All rights reserved </p>
</Zoom>



</div>


    </>
)

}

export default MainSection;