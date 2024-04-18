// import React, { useState, useEffect, useRef } from 'react';

// import './VerticalSlider.css'; // Assuming you have a CSS file for styling
// import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
// import flyingEagle from '../assets/images/flyingeagle.jpg'
// import flowerPot from '../assets/images/flowerpot.jpg'
// import blue from '../assets/images/blue.avif'
// import pinkFlower from '../assets/images/pinkflower.jpg'

// const VerticalSlider = () => {
// //   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
// //   const slidesLength = 4;

//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
//   const slidesLength = 4;
//   const [leftSlideTop, setLeftSlideTop] = useState(-100 * (slidesLength - 1));
//   const [rightSlideTop, setRightSlideTop] = useState(0);
//   const sliderContainerRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       const sliderHeight = sliderContainerRef.current.clientHeight;
//       setLeftSlideTop(activeSlideIndex * 100);
//       setRightSlideTop(activeSlideIndex * sliderHeight);
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Call the handleResize function initially
//     return () => window.removeEventListener('resize', handleResize);
//   }, [activeSlideIndex]);

//   const changeSlide = (direction) => {
//     if (direction === 'up') {
//       setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesLength);
//       setLeftSlideTop((prevTop) => prevTop - 100);
//       setRightSlideTop((prevTop) => prevTop + sliderContainerRef.current.clientHeight);
//     } else if (direction === 'down') {
//       setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slidesLength) % slidesLength);
//       setLeftSlideTop((prevTop) => prevTop + 100);
//       setRightSlideTop((prevTop) => prevTop - sliderContainerRef.current.clientHeight);
//     }
//   };

  

//   return (
//     <div className="slider-container" ref={sliderContainerRef}>
//       <div className="left-slide"  style={{ top: `${leftSlideTop}vh` }}>
//       {/* <div className="left-slide" style={{ top: `-${(slidesLength - 1) * 100}vh` }}> */}
//         <div style={{ backgroundColor: '#af425dff' }}>
//           <h1>Nature flower</h1>
//           <p>all in pink</p>
//         </div>
//         <div style={{ backgroundColor: '#0d385dff' }}>
//           <h1>Blue Sky</h1>
//           <p>with it's mountains</p>
//         </div>
//         <div style={{ backgroundColor: '#04100fff' }}>
//           <h1>Flower Pot</h1>
//           <p>in a room</p>
//         </div>
//         <div style={{ backgroundColor: '#ffb866' }}>
//           <h1>Lonely Castle</h1>
//           <p>in the wilderness</p>
//         </div>
//       </div>

//       <div className="right-slide" style={{ transform: `translateY(${rightSlideTop}px)` }}>
// 	  <div style={{ backgroundImage: `url(${flyingEagle})` }}></div>
//         <div style={{ backgroundImage: `url(${flowerPot})` }}></div>
//         <div style={{ backgroundImage: `url(${blue})` }}></div>
//         <div style={{ backgroundImage: `url(${pinkFlower})` }}></div>
//       </div>

//       <div className="action-buttons">
//         <button className="down-button" onClick={() => changeSlide('down')}>
//           <MdArrowDownward/>
//         </button>
//         <button className="up-button" onClick={() => changeSlide('up')}>
//          <MdArrowUpward/>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VerticalSlider;


// import React, { useState, useEffect, useRef } from 'react';
// import './VerticalSlider.css'; // Assuming you have a CSS file for styling
// import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
// import flyingEagle from '../assets/images/flyingeagle.jpg'
// import flowerPot from '../assets/images/flowerpot.jpg'
// import blue from '../assets/images/blue.avif'
// import pinkFlower from '../assets/images/pinkflower.jpg'

// const VerticalSlider = () => {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
//   const slidesLength = 4;
//   const [leftSlideTop, setLeftSlideTop] = useState(-100 * (slidesLength - 1));
//   const [rightSlideTop, setRightSlideTop] = useState(0);
//   const sliderContainerRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       const sliderHeight = sliderContainerRef.current.clientHeight;
//       setLeftSlideTop(activeSlideIndex * 100);
//       setRightSlideTop(activeSlideIndex * sliderHeight);
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Call the handleResize function initially
//     return () => window.removeEventListener('resize', handleResize);
//   }, [activeSlideIndex]);

//   const changeSlide = (direction) => {
//     const sliderHeight = sliderContainerRef.current.clientHeight;
//     const nextIndex = direction === 'up' ? (activeSlideIndex + 1) % slidesLength : (activeSlideIndex - 1 + slidesLength) % slidesLength;
//     setActiveSlideIndex(nextIndex);
//     setLeftSlideTop(nextIndex * 100);
//     setRightSlideTop(nextIndex * sliderHeight);
//   };

//   return (
//     <div className="slider-container" ref={sliderContainerRef}>
//       <div className="left-slide" style={{ top: `${leftSlideTop}vh` }}>
//         <div style={{ backgroundColor: '#af425dff' }}>
//           <h1>Nature flower</h1>
//           <p>all in pink</p>
//         </div>
//         <div style={{ backgroundColor: '#0d385dff' }}>
//           <h1>Blue Sky</h1>
//           <p>with its mountains</p>
//         </div>
//         <div style={{ backgroundColor: '#04100fff' }}>
//           <h1>Flower Pot</h1>
//           <p>in a room</p>
//         </div>
//         <div style={{ backgroundColor: '#ffb866' }}>
//           <h1>Lonely Castle</h1>
//           <p>in the wilderness</p>
//         </div>
//       </div>

//       <div className="right-slide" style={{ transform: `translateY(${rightSlideTop}px)` }}>
//         <div style={{ backgroundImage: `url(${flyingEagle})` }}></div>
//         <div style={{ backgroundImage: `url(${flowerPot})` }}></div>
//         <div style={{ backgroundImage: `url(${blue})` }}></div>
//         <div style={{ backgroundImage: `url(${pinkFlower})` }}></div>
//       </div>

//       <div className="action-buttons">
//         <button className="down-button" onClick={() => changeSlide('down')}>
//           <MdArrowDownward/>
//         </button>
//         <button className="up-button" onClick={() => changeSlide('up')}>
//           <MdArrowUpward/>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VerticalSlider;


// import React, { useState, useEffect, useRef } from 'react';
// import './VerticalSlider.css';
// import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
// import flyingEagle from '../assets/images/flyingeagle.jpg';
// import flowerPot from '../assets/images/flowerpot.jpg';
// import blue from '../assets/images/blue.avif';
// import pinkFlower from '../assets/images/pinkflower.jpg';

// const VerticalSlider = () => {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
//   const slidesLength = 4;
//   const [leftSlideTop, setLeftSlideTop] = useState(100 * (slidesLength - 1)); // Change this line if you want the left slide to start from the bottom
//   const [rightSlideTop, setRightSlideTop] = useState(0);
//   const sliderContainerRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       const sliderHeight = sliderContainerRef.current.clientHeight;
//       setLeftSlideTop(activeSlideIndex * 100);
//       setRightSlideTop(activeSlideIndex * sliderHeight);
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Call the handleResize function initially
//     return () => window.removeEventListener('resize', handleResize);
//   }, [activeSlideIndex]);

//   const changeSlide = (direction) => {
//     if (direction === 'up') {
//       setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesLength);
//       setLeftSlideTop((prevTop) => prevTop - 100);
//       setRightSlideTop((prevTop) => prevTop + sliderContainerRef.current.clientHeight);
//     } else if (direction === 'down') {
//       setActiveSlideIndex((prevIndex) => (prevIndex - 1 + slidesLength) % slidesLength);
//       setLeftSlideTop((prevTop) => prevTop + 100);
//       setRightSlideTop((prevTop) => prevTop - sliderContainerRef.current.clientHeight);
//     }
//   };

//   return (
//     <div className="slider-container" ref={sliderContainerRef}>
//       <div className="left-slide" style={{ top: `${leftSlideTop}vh` }}>
//         <div style={{ backgroundColor: '#af425dff' }}>
//           <h1>Nature flower</h1>
//           <p>all in pink</p>
//         </div>
//         <div style={{ backgroundColor: '#0d385dff' }}>
//           <h1>Blue Sky</h1>
//           <p>with it's mountains</p>
//         </div>
//         <div style={{ backgroundColor: '#04100fff' }}>
//           <h1>Flower Pot</h1>
//           <p>in a room</p>
//         </div>
//         <div style={{ backgroundColor: '#ffb866' }}>
//           <h1>Lonely Castle</h1>
//           <p>in the wilderness</p>
//         </div>
//       </div>

//       <div className="right-slide" style={{ transform: `translateY(${rightSlideTop}px)` }}>
//         <div style={{ backgroundImage: `url(${flyingEagle})` }}></div>
//         <div style={{ backgroundImage: `url(${flowerPot})` }}></div>
//         <div style={{ backgroundImage: `url(${blue})` }}></div>
//         <div style={{ backgroundImage: `url(${pinkFlower})` }}></div>
//       </div>

//       <div className="action-buttons">
//         <button className="down-button" onClick={() => changeSlide('down')}>
//           <MdArrowDownward />
//         </button>
//         <button className="up-button" onClick={() => changeSlide('up')}>
//           <MdArrowUpward />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VerticalSlider;


import React, { useState, useEffect, useRef } from 'react';
import './VerticalSlider.css'; // Assuming you have a CSS file for styling
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import flyingEagle from '../assets/images/flyingeagle.jpg';
import flowerPot from '../assets/images/flowerpot.jpg';
import blue from '../assets/images/blue.avif';
import pinkFlower from '../assets/images/pinkflower.jpg';

const VerticalSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slidesLength = 4;
  const [leftSlideTop, setLeftSlideTop] = useState(-100 * (slidesLength - 1));
  const [rightSlideTop, setRightSlideTop] = useState(0);
  const sliderContainerRef = useRef(null);

  console.log(leftSlideTop);
  console.log(rightSlideTop);

  useEffect(() => {
    const handleResize = () => {
      const sliderHeight = sliderContainerRef.current.clientHeight;
      setLeftSlideTop(activeSlideIndex * 100);
      setRightSlideTop(activeSlideIndex * sliderHeight);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the handleResize function initially
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSlideIndex]);

  const changeSlide = (direction) => {
    const sliderHeight = sliderContainerRef.current.clientHeight;
    const nextIndex =
      direction === 'up'
        ? (activeSlideIndex + 1) % slidesLength
        : (activeSlideIndex - 1 + slidesLength) % slidesLength;
    setActiveSlideIndex(nextIndex);
    setLeftSlideTop(nextIndex * 100);
    setRightSlideTop(nextIndex * sliderHeight);
  };
  

  return (
    <div className="slider-container" ref={sliderContainerRef}>
      <div className="left-slide" style={{ top: `${leftSlideTop}vh` }}>
        <div style={{ backgroundColor: '#af425dff' }}>
          <h1>Nature flower</h1>
          <p>all in pink</p>
        </div>
        <div style={{ backgroundColor: '#0d385dff' }}>
          <h1>Blue Sky</h1>
          <p>with its mountains</p>
        </div>
        <div style={{ backgroundColor: '#04100fff' }}>
          <h1>Flower Pot</h1>
          <p>in a room</p>
        </div>
        <div style={{ backgroundColor: '#ffb866' }}>
          <h1>Lonely Castle</h1>
          <p>in the wilderness</p>
        </div>
      </div>

      <div className="right-slide" style={{ transform: `translateY(${rightSlideTop}px)` }}>
        <div className="image-container">
          <img src={flyingEagle} alt="Flying Eagle" />
          <img src={flowerPot} alt="Flower Pot" />
          <img src={blue} alt="Blue Sky" />
          <img src={pinkFlower} alt="Pink Flower" />
        </div>
      </div>

      <div className="action-buttons">
        <button className="down-button" onClick={() => changeSlide('down')}>
          <MdArrowDownward />
        </button>
        <button className="up-button" onClick={() => changeSlide('up')}>
          <MdArrowUpward />
        </button>
      </div>
    </div>
  );
};

export default VerticalSlider;
