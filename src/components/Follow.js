import React from "react";
import { IconDowm, Verified } from "./Icons";

function Follow() {
  return (
    <section className="bg-gray-500 rounded-xl">
      <div className="px-5 py-3 font-bold text-xl border-b border-gray-600">
        <h4>Who to follow</h4>
      </div>
      <div>
        <ul>
          <li className="px-5 py-2 hover:bg-gray-900 flex justify-between border-b border-gray-600">
            <span>
              <img
                src="https://pbs.twimg.com/profile_images/1506926754585526274/5xdHUvjE_400x400.jpg"
                className="rounded-full"
                style={{ height: 49, width: 49 }}
              />
            </span>
            <div>
              <h6 className="text-lg font-bold flex">Sunil Pai</h6>
              <span className="text-gray-400">@threepointone</span>
            </div>
            <span>
              <button className="text-primary border border-primary px-4 py-1 rounded-full mt-2">
                Follow
              </button>
            </span>
          </li>
          <li className="px-5 py-2 hover:bg-gray-900 flex justify-between border-b border-gray-600">
            <span>
              <img
                src="https://pbs.twimg.com/profile_images/1471566664160346112/efwlUZeA_400x400.jpg"
                className="rounded-full"
                style={{ height: 49, width: 49 }}
              />
            </span>
            <div className="flex-1 ml-2">
              <h6 className="text-lg font-bold flex">
                Udacity
                <Verified className="mt-1 ml-1" />
              </h6>
              <span className="text-gray-400">@udacity</span>
            </div>
            <span>
              <button className="text-primary border border-primary px-4 py-1 rounded-full mt-2">
                Follow
              </button>
            </span>
          </li>
          <li className="px-5 py-2 hover:bg-gray-900 flex justify-between border-b border-gray-600">
            <span>
              <img
                src="https://pbs.twimg.com/profile_images/1344410501309030403/L2rNpO6h_400x400.jpg"
                className="rounded-full"
                style={{ height: 49, width: 49 }}
              />
            </span>
            <div>
              <h6 className="text-lg font-bold flex">Ryan Florence</h6>
              <span className="text-gray-400">@ryanflorence</span>
            </div>
            <span>
              <button className="text-primary border border-primary px-4 py-1 rounded-full mt-2">
                Follow
              </button>
            </span>
          </li>
        </ul>
        <div className="hover:bg-gray-900 px-5 py-4 text-primary">
          <button>Show More</button>
        </div>
      </div>
    </section>
  );
}

export default Follow;
