import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { TfiThought } from "react-icons/tfi";

const UserProfile = (props) => {
  const { userProfile } = props;
  return (
    <>
      <div className="px-3">
        <div class="max-w-screen-md mx-auto rounded-lg border border-gray-200 bg-white p-4 shadow sm:p-6 transition duration-300 mt-10">
          <div class="flex sm:flex-row flex-col items-center">
            <div class="flex-shrink-0 h-20 w-20">
              <img
                class="rounded-full"
                src={userProfile?.profile_image_url_https}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div class="ms-4 min-w-0 flex-1">
              <p class="text-lg font-bold text-gray-900 ">
                {userProfile?.name}
              </p>
              <p class="text-sm font-semibold text-gray-400">
                @{userProfile?.screen_name}
              </p>
              {userProfile?.description && (
                <div class="mt-3 flex gap-2 items-center text-base font-medium">
                  <TfiThought size={20} />
                  {userProfile?.description}
                </div>
              )}
              {userProfile?.location && (
                <div class="flex gap-1 items-center text-base font-medium">
                  <MdOutlineLocationOn size={20} />
                  {userProfile?.location}
                </div>
              )}
            </div>
            <div>
              <div class="inline-flex items-center text-xl font-semibold">
                <div class="w-full px-4 text-center ">
                  <div class="flex justify-center ">
                    <div class="p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {userProfile?.followers_count}
                      </span>
                      <span class="text-sm font-medium text-gray-400">
                        Followers
                      </span>
                    </div>
                    <div class=" p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        {userProfile?.friends_count}
                      </span>
                      <span class="text-sm font-medium text-gray-400">
                        Following
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
