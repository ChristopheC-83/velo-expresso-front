export default function OpinionCard({ indexOpinion, opinions }) {
 function dateReadableShort(date) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("fr-FR", options);
  }

  if (indexOpinion < 0) {
    indexOpinion = opinions.length - 1;
  }
  if (indexOpinion >= opinions.length) {
    indexOpinion = 0;
  }

  return (
    <div className="w-[280px] min-h-[300px]   border-2 border-white bg-neutral-950 text-white rounded flex flex-col p-2 my-5">
      <p className="ml-auto text-xs font-thin md:text-base text-neutral-500">
        posté le {dateReadableShort(opinions[indexOpinion].createdAt)}
      </p>
      <h4>
        <u>De {opinions[indexOpinion].name}</u>
      </h4>
      <p className="p-3 my-3 font-normal md:text-lg">{opinions[indexOpinion].message}</p>
      <div className="border border-neutral-500 p-1.5 text-xs mt-auto">
        <p className="mb-1 text-xs text-neutral-300"><u>Vélo Expresso :</u></p>
        <p  className="text-sm text-neutral-300">{opinions[indexOpinion].response}</p>
      </div>
    </div>
  );
}
