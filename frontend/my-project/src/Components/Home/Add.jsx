import React from 'react';

function Add(props) {
    return (
        <div className='space-y-8 h-full w-full ml-16'>
            <div className="camera w-5/6 static h-1/4 bg-white rounded-2xl shadow-lg">
                    <h2 className='text-center font-bold text-xl mt-16'>Take Photo</h2>

                </div>
            <div className="photos w-5/6 static h-1/4 bg-white rounded-2xl shadow-lg">
                    <h2 className='text-center font-bold text-xl mt-16'>Open Gallery</h2>

                </div>
        </div>
    );
}

export default Add;