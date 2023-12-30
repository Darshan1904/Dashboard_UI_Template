import { FC } from "react";
import { Link } from "react-router-dom";
import AnimationWrapper from "../common/animation";
import AboutUser from "../components/AboutUser";
import GraphCard from "../components/GraphCard"; 
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

const ProfilePage: FC = () => {
  const { personal_info, account_info, social_links, usage_metrics, recent_activity, saved_graphs, joinedAt } = profileStructure;

  return (
    <AnimationWrapper keyValue={3}>
      <section className="h-full md:flex flex-row-reverse w-full sticky items-start gap-5 min-[1100px]:gap-12">
        <div className="flex flex-col max-md:items-center gap-5 min-w-[250px] md:w-[30%] md:pl-8 md:border-l md:border-[#494848] md:sticky md:top-10 md:py-4">
          <img src={personal_info.profile_img} alt="" className="w-48 h-48 bg-grey rounded-full md:w-32 md:h-32" />
          <h1 className="text-2xl font-medium">@{personal_info.username}
          <Link to="/pricingPage" className="text-blue-500 text-md ml-2">(Pro User)</Link></h1>
          <p className="text-xl capitalize h-6">{personal_info.fullname}</p>
          <p>
            {account_info.total_posts.toLocaleString()} Graphs - {account_info.total_reads.toLocaleString()} Reads
          </p>
          <div className="flex gap-4 mt-2 ml-2">
            {/* TODO: After creting favourite and collection pages use Link element instead of div */}
            <div>
                <i className="fi fi-rr-bookmark hover:cursor-pointer hover:text-blue-500" />
            </div>
            <div>
                <i className="fi fi-rr-book hover:cursor-pointer hover:text-blue-500" />
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <Link to="/editProfile" className="btn-dark rounded-full">
              Edit Profile
            </Link>
          </div>
          <AboutUser className="max-md:hidden" bio={personal_info.bio} social_links={social_links} joinedAt={joinedAt} />
        </div>

        <div className="max-md:mt-12 lg:-ml-32 lg:w-[40vw] md:w-[30vw] md:-ml-20">
          <AboutUser className="md:hidden text-center items-center" bio={personal_info.bio} social_links={social_links} joinedAt={joinedAt} />
          <div className="h-max w-full">
            <h1 className="text-xl text-dark-grey mb-3 mt-10">Usage Metrics</h1>
            <hr className="border-grey mb-8 mr-6" />
            <div className="flex flex-wrap gap-2 justify-center items-center text-blue-300">    
                <div className="mx-auto text-center">
                    {usage_metrics.graphsCreated}
                    <p className="text-left text-white">Graphs Created</p>
                </div>
                <div className="mx-auto text-center">
                    {usage_metrics.graphsShared}
                    <p className="text-left text-white">Graphs Shared</p>
                </div>
                <div className="mx-auto text-center">
                    {usage_metrics.papersCollected}
                    <p className="text-left text-white">Papers Collected</p>
                </div>
            </div>
          </div>
          <div className="h-max w-full">
            <h1 className="text-xl text-dark-grey mb-3 mt-20">Recent Activity</h1>
            <hr className="border-grey mb-8 mr-6" />
            {recent_activity.map((item, index) => (
              <div key={index}>
                <GraphCard graph={item} author={personal_info} index={index} />
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-xl text-dark-grey mb-3 mt-20">Saved Graphs</h1>
            <hr className="border-grey mb-8 mr-6" />
            {saved_graphs.map((item, index) => (
              <div key={index}>
                <GraphCard graph={item} author={personal_info} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default ProfilePage;