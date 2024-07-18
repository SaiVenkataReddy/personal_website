import React, { useState } from "react";
import Close from '../assets/assets/close.svg';

function ProjectsItems({ img, title, description, tags, details }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div className='portfolio__item'>
            <img src={img} alt='' className='portfolio__img' />

            <div className='portfolio__info'>
                <h3 className='portfolio__title'>{title}</h3>
                <p className='portfolio__description'>{description}</p>
                <div className='portfolio__tags'>
                    {tags.map((tag, index) => (
                        <span className='portfolio__tag' key={index}>{tag}</span>
                    ))}
                </div>
            </div>

            <div className='portfolio__hover' onClick={toggleModal}>
                <h3 className='portfolio__title__hover'>Click for more details</h3>
            </div>

            {modal && (
                <div className='portfolio__modal'>
                    <div className='portfolio__modal-content'>
                        <img src={Close}
                             alt=''
                             className='modal__close'
                             onClick={toggleModal}/>

                        <h3 className='modal__title'>{title}</h3>

                        <ul className='modal__list grid'>
                            {details.map(({icon, title, desc}, index) => {
                                return (
                                    <li className='modal__item' key={index}>
                                        <span className='item__icon'>{icon}</span>
                                        <div>
                                            <span className='item__title'>{title}</span>
                                            <span className='item__details'>{desc}</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <img src={img} alt='' className='modal__img'/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectsItems;
