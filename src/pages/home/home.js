
import { NavLink } from 'react-router-dom';
import './home.css';
import Modal from 'react-modal';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



function Home() {

    const [kodakPictureUrl, setKodakPictureUrl] = useState('https://cdn.concreteplayground.com/content/uploads/2019/09/Henry-Lee-Barbershop-collingwood-credit-Simon-Shiff-01-1024x576.jpg');
    const [kodakPictureCaption, setKodakPictureCaption] = useState('Sheryl (2023)');


    const [kodakPictureTwoUrl, setKodakPictureTwoUrl] = useState('https://images.pexels.com/photos/5713745/pexels-photo-5713745.jpeg?auto=compress&cs=tinysrgb&w=600');
    const [KodakPictureTwoCaption, setKodakPictureTwoCaption] = useState('Extensive wine list')








    // let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const resetKodaks = () => {
        setKodakPictureUrl('https://cdn.concreteplayground.com/content/uploads/2019/09/Henry-Lee-Barbershop-collingwood-credit-Simon-Shiff-01-1024x576.jpg');
        setKodakPictureCaption('Sheryl(2023)');

        setKodakPictureTwoUrl('https://images.pexels.com/photos/5713745/pexels-photo-5713745.jpeg?auto=compress&cs=tinysrgb&w=600');
        setKodakPictureTwoCaption('Extensive wine list')
    }

    return (
        <>
            <div id='home-wrapper'>

                <div id='home-nav-wrapper'>
                    <ul>
                        <li>
                            <div className='logo-div'>
                                <NavLink>Traditionals</NavLink>
                            </div>
                        </li>

                        <li>
                            <div className='menu-div' onMouseEnter={() => {
                                setKodakPictureUrl('https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600');
                                setKodakPictureCaption('Hot Shaves');
                                setKodakPictureTwoUrl('https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=600');
                                setKodakPictureTwoCaption('Quality Cuts')
                            }} 
                            onMouseLeave={resetKodaks}
                            >
                                <NavLink to='/cuts'>Cuts</NavLink>
                            </div>
                        </li>
                        <li>
                            <div className='menu-div' onMouseEnter={() => {
                                setKodakPictureUrl('https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                                setKodakPictureCaption('A place for friends');
                                setKodakPictureTwoUrl('https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                                setKodakPictureTwoCaption('Stellar beer selection')
                            }} 
                            onMouseLeave={resetKodaks}
                            >
                                <NavLink to='/brews' >Brews</NavLink>
                            </div>
                        </li>
                        <li>
                            <div className='menu-div' onClick={openModal} 
                            onMouseEnter={() => {
                                setKodakPictureUrl('https://images.pexels.com/photos/9611512/pexels-photo-9611512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
                                setKodakPictureCaption('563 W Eau Gallie Blvd.');
                                setKodakPictureTwoUrl('https://media-cdn.tripadvisor.com/media/photo-s/1d/94/2c/81/caption.jpg');
                                setKodakPictureTwoCaption('(321)425-4012')
                            }} 
                            // onMouseLeave={resetKodaks}
                            >
                                <NavLink>Contact</NavLink>
                            </div>
                        </li>

                    </ul>
                </div>

                {/* <h2>Traditionals</h2>
                <div id='cuts-div' className='home-menu-div'>
                    <p>Classic Cuts</p>
                    
                </div> */}



                <div id='kodak-wrapper'>
                    <div id='kodak-picture-wrapper' style={{ backgroundImage: `url(${kodakPictureUrl})` }}></div>
                    <p id='kodak-caption'>{kodakPictureCaption}</p>
                </div>

                <div id='kodak-wrapper-two'>
                    <div id='kodak-picture-wrapper-two' style={{
                        backgroundImage: `url(${kodakPictureTwoUrl})`
                    }}></div>
                    <p id='kodak-caption-two'>{KodakPictureTwoCaption}</p>
                </div>

                    <a href='http:///www.google.com' id='credit-link'>MM</a>

            </div>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div id='contact-modal-wrapper'>
                    <form>
                        <p id='contact-modal-title'>We would love to hear from you!</p>
                        {/* <p id='contact-modal-close'><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></p> */}
                        <input type='text' placeholder='First Name' className='half'></input>
                        <input type='text' placeholder='Last Name' className='half'></input><br></br>
                        <input type='email' placeholder='Email Address' className='full'></input><br></br>
                        <textarea placeholder='Your Message Here' className='full'></textarea><br></br>
                        <button>Send</button>
                        <ul id='contact-modal-social-list'>
                            <li>
                                <a href='https://www.google.com'>
                                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a href='https://www.google.com'>
                                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                </a>
                            </li>
                        </ul>
                    </form>

                </div>

            </Modal>

        </>
    )
}

export default Home;