import React, { FC } from "react";
import { Link } from "react-router-dom";

interface AboutUserProps {
  className?: string;
  bio: string;
  social_links: Record<string, string>;
  joinedAt: string;
}

const AboutUser: FC<AboutUserProps> = ({ className, bio, social_links, joinedAt }) => {
  return (
    <div className={"md:w-[90%] md:mt-7 " + className}>
      <p className="text-xl leading-7">{bio.length ? bio : "Nothing to read here."}</p>

      <div className="flex gap-x-7 gap-y-2 flex-wrap my-7 justify-center md:-ml-12 items-center text-dark-grey">
        {Object.keys(social_links).map((key) => {
          const link = social_links[key];

          return link && (
            <Link to={link} key={key} target="_blank">
                <i className={"fi " + (key !== 'website' ? "fi-brands-" + key : "fi-rr-globe") + " text-2xl hover:text-[#0469D9]"} />
            </Link>
          );
        })}
      </div>

      <p className="text-xl leading-7 text-dark-grey">Joined on {joinedAt}</p>
    </div>
  );
};

export default AboutUser;