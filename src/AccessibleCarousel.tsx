import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';
import {
  Box,
  IconButton,
  Typography,
  Paper,
  useTheme
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';
import type { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Interfaces
interface ImageSlide {
  src: string;
  alt: string;
  title: string;
}

interface AccessibleCarouselProps {
  images?: ImageSlide[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  sx?: React.CSSProperties;
}

interface SliderRef {
  slickNext(): void;
  slickPrev(): void;
  slickPlay(): void;
  slickPause(): void;
}

// Styled Components
const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '1200px',
  margin: '0 auto',
  '& .slick-dots': {
    bottom: theme.spacing(2),
    '& li button': {
      '&:before': {
        fontSize: 12,
        color: theme.palette.common.white,
      },
    },
    '& li.slick-active button:before': {
      color: theme.palette.primary.main,
    },
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
  '&.prev': {
    left: theme.spacing(2),
  },
  '&.next': {
    right: theme.spacing(2),
  },
}));

const SlideContent = styled(Paper)(({ theme }) => ({
  position: 'relative',
  height: '400px',
  overflow: 'hidden',
}));

const SlideImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const SlideCaption = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  background: 'rgba(0, 0, 0, 0.5)',
  color: theme.palette.common.white,
}));

const AccessibleCarousel: React.FC<AccessibleCarouselProps> = ({
  images = [
    { src: "/api/placeholder/800/400", alt: "First slide description", title: "Slide 1" },
    { src: "/api/placeholder/800/400", alt: "Second slide description", title: "Slide 2" },
    { src: "/api/placeholder/800/400", alt: "Third slide description", title: "Slide 3" }
  ],
  autoplay = false,
  autoplaySpeed = 3000,
  sx
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<SliderRef | null>(null);
  const theme = useTheme();

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    accessibility: true,
    arrows: false,
    autoplay,
    autoplaySpeed,
    customPaging: (i: number) => (
      <button
        aria-label={`Go to slide ${i + 1}`}
        aria-current={currentSlide === i ? 'true' : 'false'}
      />
    )
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <CarouselContainer
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      sx={sx}
    >
      <NavigationButton
        onClick={handlePrevClick}
        className="prev"
        aria-label="Previous slide"
        size="large"
      >
        <ChevronLeftIcon />
      </NavigationButton>

      <NavigationButton
        onClick={handleNextClick}
        className="next"
        aria-label="Next slide"
        size="large"
      >
        <ChevronRightIcon />
      </NavigationButton>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${images.length}`}
          >
            <SlideContent elevation={3}>
              <SlideImage
                src={image.src}
                alt={image.alt}
              />
              <SlideCaption>
                <Typography variant="h6" component="h3">
                  {image.title}
                </Typography>
              </SlideCaption>
            </SlideContent>
          </div>
        ))}
      </Slider>

      <Box
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        <Typography>
          Currently showing slide {currentSlide + 1} of {images.length}
        </Typography>
      </Box>
    </CarouselContainer>
  );
};

export default AccessibleCarousel;
