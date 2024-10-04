import React from 'react';
import SocialLoginButtons from './SocialLoginButtons';
import LoginForm from './LoginForm';

const RightPanel = () => {
  return (
   
    <div className="bg-white w-1/2 flex flex-col justify-center items-center p-10">
      <h2 className="text-5xl font-bold mb-8 tracking-wider">SIGN IN TO SHEY</h2>
      <SocialLoginButtons />
      <div className="flex items-center ">
        <hr className="flex-grow border w-[230px] border-black/30" />
        <span className="uppercase px-2 font-semibold text-sm">or</span>
        <hr className="flex-grow border  w-[230px] border-black/30" />
      </div>
    <p className='text-black/30 mb-10' >use email and password</p>
      <LoginForm />
    </div>
   
  );
};

export default RightPanel;
