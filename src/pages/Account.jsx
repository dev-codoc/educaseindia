import { FaCamera } from "react-icons/fa";

export default function Account() {

  // Random demo data
  const user = {
    name: "Devanshu Singh",
    email: "devanshucodess@gmail.com"
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white px-6 py-4 text-lg font-semibold shadow-sm">
        Account Settings
      </div>

      {/* Profile Section */}
      <div className="p-6">

        <div className="flex items-center gap-4">

          {/* Avatar Wrapper */}
          <div className="relative">

            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />

            {/* Camera Icon */}
            <div className="
              absolute bottom-0 right-0
              bg-[#6c25ff]
              p-2
              rounded-full
              border-2 border-white
              cursor-pointer
            ">
              <FaCamera className="text-white text-xs" />
            </div>

          </div>

          {/* Name + Email */}
          <div>
            <h2 className="font-semibold text-lg">
              {user.name}
            </h2>

            <p className="text-gray-600 text-sm">
              {user.email}
            </p>
          </div>

        </div>

        {/* Description */}
        <p className="text-gray-700 mt-6 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed diam nonumy eirmod tempor invidunt ut labore et dolore 
          magna aliquyam erat, sed diam.
        </p>


      </div>

        {/* Dashed Divider */}
        <div className="border-t border-dashed "></div>
    </div>
  );
}