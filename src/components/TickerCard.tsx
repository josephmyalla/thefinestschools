const TickerCard = ({ 
  imgSrc, 
  title, 
}: {
  imgSrc: string;
  title: string;
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden relative group h-20 w-20 md:h-20 flex items-center justify-center`}>
      <img 
        src={imgSrc} 
        alt={title} 
        className='h-20 w-20'
      />
    </div>
  );
};

export {TickerCard}