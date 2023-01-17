import React from 'react';

function PageNotFound() {
    return (
        <div className=''>
            <div className='pageNF'>
                <div className="row">
                    <div className="col-md-6 my-auto text-end">

                        <h1 className='text-white'>404: Page Not Found</h1>


                        <p className='text-white'>Sorry, the page you are looking for does not exist.</p>

                    </div>
                    <div className="col-md-6">
                        <img src="psyduck.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PageNotFound;
