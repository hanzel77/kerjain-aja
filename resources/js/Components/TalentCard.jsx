export default function TalentCard() {
    return (
        <div className="w-full max-w-sm bg-white mx-auto p-6 rounded-md shadow-lg text-center">
            {/* Profile Picture */}
            <div className="flex justify-center">
                <img
                    src="/images/profile-picture.jpg"
                    alt="User Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                />
            </div>

            {/* Name */}
            <div className="mt-4">
                <h1 className="text-xl font-semibold">John Doe</h1>
                <p className="text-sm text-gray-500 mt-1">Full Stack Developer</p>
            </div>

            {/* Skills */}
            <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-700">Skills</h2>
                <ul className="mt-2 text-gray-600">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Laravel</li>
                    <li>UI/UX Design</li>
                </ul>
            </div>

            {/* Special Needs */}
            <div className="mt-6">
                <h2 className="text-lg font-medium text-gray-700">Special Needs</h2>
                <div className="flex justify-center space-x-4 mt-4">
                    <div className="group relative">
                        <i className="fa fa-wheelchair text-blue-500 text-2xl"></i>
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md mt-2">
                            Mobility assistance required
                        </span>
                    </div>
                    <div className="group relative">
                        <i className="fa fa-ear-deaf text-green-500 text-2xl"></i>
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md mt-2">
                            Hearing assistance required
                        </span>
                    </div>
                    <div className="group relative">
                        <i className="fa fa-eye text-red-500 text-2xl"></i>
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded-md mt-2">
                            Visual assistance required
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
