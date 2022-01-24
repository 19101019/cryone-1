import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {
    render() {
        return (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            className='border-1 '>
            <div className='h-full relative '>
              <div className='absolute left-32 top-32 text-left'>
                <h2>01/04</h2>
                <pre className=' text-6xl'>
                  <h1>Thinking</h1>
                  <h1>Differently</h1>
                </pre>
                <br />
                <h4 className='text-2xl'>Creative Territory</h4>
              </div>
              <img
                className='h-4/6'
                src='https://cdn.dribbble.com/userupload/1939488/file/original-915fb0c4bf914eb8e4f0f457f30cf763.jpg?compress=1&resize=800x600&vertical=top'
              />
            </div>
            <div className='h-full relative'>
              <div className='absolute left-32 top-32 text-left'>
                <h2>02/04</h2>
                <pre className=' text-6xl'>
                  <h1>Thinking</h1>
                  <h1>Differently</h1>
                </pre>
                <br />
                <h4 className='text-2xl'>Creative Territory</h4>
              </div>
              <img
                className='h-4/6'
                src='https://cdn.dribbble.com/userupload/1939488/file/original-915fb0c4bf914eb8e4f0f457f30cf763.jpg?compress=1&resize=800x600&vertical=top'
              />
            </div>
            <div className='h-full relative'>
              <div className='absolute left-32 top-32 text-left'>
                <h2>03/04</h2>
                <pre className=' text-6xl'>
                  <h1>Thinking</h1>
                  <h1>Differently</h1>
                </pre>
                <br />
                <h4 className='text-2xl'>Creative Territory</h4>
              </div>
              <img
                className='h-4/6'
                src='https://cdn.dribbble.com/userupload/1939488/file/original-915fb0c4bf914eb8e4f0f457f30cf763.jpg?compress=1&resize=800x600&vertical=top'
              />
            </div>
            <div className='h-full relative'>
              <div className='absolute left-32 top-32 text-left'>
                <h2>04/04</h2>
                <pre className=' text-6xl'>
                  <h1>Thinking</h1>
                  <h1>Differently</h1>
                </pre>
                <br />
                <h4 className='text-2xl'>Creative Territory</h4>
              </div>
              <img
                className='h-4/6'
                src='https://cdn.dribbble.com/userupload/1939488/file/original-915fb0c4bf914eb8e4f0f457f30cf763.jpg?compress=1&resize=800x600&vertical=top'
              />
            </div>
          </Carousel>
        );
    }
}

export default Slider;
