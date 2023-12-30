import { FC } from "react";
import { Link } from "react-router-dom";

interface Graph {
    title: string;
    dateCreated: string;
    previewThumbnail: string;
}

interface Author {
  username: string;
  profile_img: string;
  fullname: string;
}

interface GraphCardProps {
  graph: Graph;
  author: Author;
  index: number;
}

const GraphCard: FC<GraphCardProps> = ({ graph, author, index }) => {
  const { title, dateCreated, previewThumbnail } = graph;
  const { username, profile_img, fullname } = author;

  return (
    <Link to={`/graphs/${index}`} className="flex gap-8 items-center border-b border-gray-600 pb-5 mb-4">
      <div className="w-full">
        <div className="flex gap-2 items-center mb-7">
          <img src={profile_img} alt="profile" className="w-6 h-6 rounded-full" />
          <p className="line-clamp-1">
            {fullname} @{username}
          </p>
          <p className="min-w-fit">{dateCreated}</p>
        </div>

        <h1 className="blog-title">{title}</h1>

        <img src={previewThumbnail} alt="" className="my-3 text-xl font-gelasio leading-7 line-clamp-2 text-justify"></img>

        <div className="mt-7 flex gap-4">
          <span className="ml-3 flex items-center gap-2 text-dark-grey">
            <i className="fi fi-rr-heart text-xl"></i>
            50
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GraphCard;