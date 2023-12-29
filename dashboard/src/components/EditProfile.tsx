import React, { useEffect, useRef, useState } from "react";
import InputBox from "../components/InputBox";
import AnimationWrapper from "../common/animation";

interface SocialLinks {
  [key:string]: string;
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

interface UserProfile {
  personal_info: PersonalInfo;
  social_links: SocialLinks;
}

const EditProfile: React.FC = () => {
  let bioLimit = 150;
  const editProfileForm = useRef<HTMLFormElement>(null);
  const [charactersLeft, setCharactersLeft] = useState(bioLimit);

  const dummyData: UserProfile = {
    personal_info: {
      fullname: "John Doe",
      username: "john_doe",
      profile_img: "https://placekitten.com/210/210", 
      email: "john.doe@example.com",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    social_links: {
      youtube: "https://www.youtube.com/user/johndoe",
      facebook: "https://www.facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe/",
    },
  };

  const { personal_info, social_links } = dummyData;
  const { fullname, username, profile_img, email, bio } = personal_info;

  const handleCharChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharactersLeft(bioLimit - e.target.value.length);
  };

  useEffect(()=>{
    setCharactersLeft(bioLimit-dummyData.personal_info.bio.length);
  },[]);

  return (
    <AnimationWrapper keyValue={1}>
    <form ref={editProfileForm} className="w-full">
      <h1 className="max-md:hidden">Edit Profile</h1>
      <div className="flex flex-col lg:flex-row items-start py-10 gap-8 lg:gap-10">
        <div className="max-lg:center mb-5">
          <p className="relative block w-48 h-48 bg-grey rounded-full overflow-hidden border-grey border">
            <img src={profile_img} alt="Profile" />
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <InputBox name="fullname" type="text" value={fullname} placeholder="Full Name" disable={true} icon="fi-rr-user" />
            </div>

            <div>
              <InputBox name="email" type="email" value={email} placeholder="Email" disable={true} icon="fi-rr-envelope" />
            </div>

            <InputBox type="text" name="username" value={username} placeholder="Username" icon="fi-rr-at" />
          </div>

          <p className="text-[#bdbcbc] -mt-3">Username will be used to search user and will be visible to all users</p>

          <textarea
            name="bio"
            maxLength={bioLimit}
            defaultValue={bio}
            className="input-box h-64 lg:h-40 resize-none leading-7 mt-5 pl-5"
            onChange={handleCharChange}
          ></textarea>

          <p className="mt-1 text-[#bdbcbc]">{charactersLeft} characters left</p>

          <p className="my-6 text-[#bdbcbc]">Add your social handles below</p>

          <div className="md:grid md:grid-cols-2 gap-x-6">
            {Object.keys(social_links).map((key, i) => {
              let link = social_links[key];

              return <InputBox key={i} name={key} type="text" value={link} placeholder="https://" icon={`fi ${key !== "website" ? "fi-brands-" + key : "fi-rr-globe"} text-2xl hover:text-black`} />;
            })}
          </div>

          <button className="btn-dark w-auto px-10" type="submit">
            Update
          </button>
        </div>
      </div>
    </form>
    </AnimationWrapper>
  );
};

export default EditProfile;