import React, { useRef } from "react";
import AnimationWrapper from "../common/animation";
import InputBox from "./InputBox";

const ChangePassword: React.FC = () => {
    const changePasswordForm = useRef<HTMLFormElement>(null);

    return (
        <AnimationWrapper keyValue={2}>
            <form ref={changePasswordForm} className="h-[100vh]">
                <h1 className="max-md:hidden">Change Password</h1>

                <div className="py-10 w-full md:max-w-[400px]">
                    <InputBox name="currentPassword" type="password" placeholder="Current Password" icon="fi-rr-unlock" />

                    <InputBox name="newPassword" type="password" placeholder="New Password" icon="fi-rr-unlock" />

                    <button className="btn-dark px-10" type="submit">Change Password</button>
                </div>
            </form>
        </AnimationWrapper>
    );
};

export default ChangePassword;