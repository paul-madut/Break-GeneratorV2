import React from 'react';
import Add from './Add';

function Home(props) {
    return (
        <>
        <div className="flex background absolute h-screen w-full bg-pbeige justify-center">
            <div className="nav__bar fixed w-full h-20 bg-pgreen align-top">

            </div>
            <div className="options m-auto static h-3/4 w-full flex flex-col space-y-12 justify-center items-center">

                {/* <div className="add_schedule w-5/6 static h-1/2 bg-white rounded-2xl shadow-lg">
                    <h2 className='text-center font-bold text-xl mt-16'>Add Scehdule</h2>

                </div> */}
                <Add />
                
                <div className="add_schedule w-5/6 static h-1/2 bg-white rounded-2xl shadow-lg">
                    <h2 className='text-center font-bold text-xl mt-16'>View Scehdule</h2>

                </div>

            </div>

        </div>
        </>
    );
}

export default Home;