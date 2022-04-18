import React from 'react';

import work1 from '../../Images/works/work1.png';
import work2 from '../../Images/works/work2.png';
import work3 from '../../Images/works/work2.png';
import Work from '../Work/Work';



const works = [
    { id: 1, img: work1 },
    { id: 2, img: work2 },
    { id: 3, img: work3 },
]

const Works = () => {
    return (
        <div id="works" className='container'>
            <h1 className='text-dark text-center mt-5'>My Works</h1>
            <div className="row">
                {
                    works.map(work => <Work 
                        key={work.id}
                        work={work}>
                        </Work>)
                }
            </div>
        </div>
    );
};

export default Works;