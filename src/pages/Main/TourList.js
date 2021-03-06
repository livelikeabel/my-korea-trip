import React from 'react';
import Carousel from '../../components/Carousel';
import TripInfoCard from '../../components/TripInfoCard';
import './TourList.scss';

const CAROUSEL_PROPS = {
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false
}

const TourList = ({ title, tripData }) => {
  return (
    tripData.length === 0 ? null :
      <div className="TourList">
        <h2>{title}</h2>
        <Carousel slickProps={CAROUSEL_PROPS}>
          {tripData.map(d => <TripInfoCard key={d._id} {...d} />)}
        </Carousel>
      </div>
  )
};

export default React.memo(TourList);