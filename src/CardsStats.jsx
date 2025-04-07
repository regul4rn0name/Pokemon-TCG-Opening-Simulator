export default function CardStats({ card }) {
    return (
      <div className="grid grid-rows-2 grid-cols-1 gap-0 items-center">
        <p className="self-end">{card.name}</p>
        <div
          className="w-[28.8mm] h-[39mm] rounded-xl bg-cover bg-center m-auto mt-1" style={{ backgroundImage: `url(${card.image})` }} >

        </div>
        
      </div>
    );
  }
  