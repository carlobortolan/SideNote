import React from "react";
import { isEmpty } from "lodash";
import TrailerCard from "./TrailerCard";

interface TrailerListProps {
  data: Record<string, any>[];
  title: string;
}

const TrailerList: React.FC<TrailerListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div  className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:test-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((trailer) => (
            <TrailerCard key={trailer.id} data={trailer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrailerList;
