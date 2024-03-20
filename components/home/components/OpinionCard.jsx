export default function OpinionCard({ indexOpinion, opinions }) {


  if (indexOpinion < 0) {
    indexOpinion = opinions.length - 1;
  }
  if (indexOpinion >= opinions.length) {
    indexOpinion = 0;
  }

  return (
    <div className="w-[280px] min-h-[300px]   border-2 border-white bg-neutral-950 text-white rounded flex flex-col p-2 my-5">
      <p>{indexOpinion}</p>
      <p className="ml-auto text-xs font-thin md:text-base text-neutral-500">
        posté le {opinions[indexOpinion].date}
      </p>
      <h4>
        <u>De {opinions[indexOpinion].name}</u>
      </h4>
      <p className="p-3 my-3 font-normal md:text-xl">{opinions[indexOpinion].message}</p>
      <div className="border border-neutral-500 p-1.5 text-xs mt-auto">
        <p>{opinions[indexOpinion].response}</p>
        <p className="text-xs ">Vélo Expresso</p>
      </div>
    </div>
  );
}
