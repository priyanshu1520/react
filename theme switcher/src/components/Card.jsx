import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://c4.wallpaperflare.com/wallpaper/331/461/222/man-and-woman-walking-behind-glass-with-dew-drops-wallpaper-preview.jpg" alt="cheeta" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        cheeta hi keh de bhai ku <br />
                        ~priyanshu kumar
                    </h5>
                </a>
                
                
            </div>
        </div>
    );
}
