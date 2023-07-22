const CarouselItem = ({Image })=> (
    <div>
        <div className="shadow slide-item transition-all">
        <img src={Image} 
            className="object-center h-48 rounded"
            alt="car"
        />
        </div>
    </div>
);

export default CarouselItem;