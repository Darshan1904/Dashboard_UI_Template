import { FC } from "react";
import { useParams } from "react-router-dom";
import graphIcon from "../imgs/graph.png";

interface Graph {
    title: string;
    dateCreated: string;
    previewThumbnail: string;
}
  
  interface SocialLinks {
    [key: string]: string;
    youtube: string;
    facebook: string;
    twitter: string;
    instagram: string;
  }
  
  interface PersonalInfo {
    fullname: string;
    username: string;
    profile_img: string;
    email: string;
    bio: string;
  }
  
  interface AccountInfo {
    total_posts: number;
    total_reads: number;
  }
  
  interface UsageMetrics {
    graphsCreated: number;
    graphsShared: number;
    papersCollected: number;
  }
  
  interface UserProfile {
    personal_info: PersonalInfo;
    account_info: AccountInfo;
    social_links: SocialLinks;
    usage_metrics: UsageMetrics;
    recent_activity: Graph[];
    saved_graphs: Graph[];
    joinedAt: string;
  }
  
  export const profileStructure: UserProfile = {
    personal_info: {
      fullname: "John Doe",
      username: "johndoe",
      profile_img: "https://placekitten.com/210/210",
      bio: "I'm a software developer.",
      email: "john@example.com",
    },
    account_info: {
      total_posts: 10,
      total_reads: 500,
    },
    social_links: {
      youtube: "https://www.youtube.com/",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    usage_metrics: {
      graphsCreated: 20,
      graphsShared: 5,
      papersCollected: 15,
    },
    recent_activity: [
      {
        title: "Graph 1",
        dateCreated: "2023-01-01",
        previewThumbnail: graphIcon,
      },
      {
        title: "Graph 2",
        dateCreated: "2023-01-02",
        previewThumbnail: graphIcon,
      },
    ],
    saved_graphs: [
      {
        title: "Saved Graph 1",
        dateCreated: "2023-01-03",
        previewThumbnail: graphIcon,
      },
      {
        title: "Saved Graph 2",
        dateCreated: "2023-01-04",
        previewThumbnail: graphIcon,
      },
    ],
    joinedAt: "2022-01-01",
};

const GraphPage: FC = ( ) => {
  
  const { username, profile_img, fullname } = profileStructure.personal_info;
  const { ind } = useParams<{ ind: string }>();
  const graphIndex = parseInt(ind || "0", 10);
  const { title, dateCreated, previewThumbnail } = profileStructure.recent_activity[graphIndex];

  return (
    <div className="flex min-h-[100vh] justify-center gap-8 bg-gray-900 text-white items-center border-b border-gray-600 pb-5">
      <div className="w-1/2 pt-5">
        <div className="flex gap-2 items-center mb-7">
          <img src={profile_img} alt="profile" className="w-12 h-12 rounded-full" />
          <p className="line-clamp-1">
            {fullname} @{username}
          </p>
          <p className="min-w-fit">{dateCreated}</p>
        </div>

        <h1 className="blog-title">{title}</h1>

        <img src={previewThumbnail} alt="" className="my-3 text-xl font-gelasio leading-7 line-clamp-2 text-justify"></img>

        <hr className="border-grey my-2" />
        <div className="flex gap-6 justify-between">
            <div className="flex gap-3 items-center">
            <button
                className={`w-10 h-10 rounded-full flex items-center justify-center bg-grey/80 bg-red/20 text-red`}
            >
                <i className={`fi fi-rr-edit`} />
            </button>

            <button
                className="w-10 h-10 rounded-full flex items-center justify-center bg-grey/80"
            >
                <i className="fi fi-rr-delete" />
            </button>

            <button
                className="w-10 h-10 rounded-full flex items-center justify-center bg-grey/80"
            >
                <i className="fi fi-rr-share" />
            </button>
            </div>
        </div>
        <hr className="border-grey my-2" />
      </div>
    </div>
  );
};

export default GraphPage;