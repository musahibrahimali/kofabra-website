import React, { useEffect, useState } from 'react';
import { Image12 } from '../../assets/AssetExport';
import { RequestMap, Navbar } from '../exports';
import './RequestPage.css';

function RequestPage() {
    const [receipientName, setReceipientName] = useState("");
    const [senderName, setSenderNameName] = useState("");
    const [packageType, setPackageType] = useState("");
    const [pickup, setPickUp] = useState("");
    const [destination, setDestination] = useState("");
    const [senderPhone, setSenderPhone] = useState("");
    const [receipientPhone, setReceipientPhone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // eslint-disable-next-line no-unused-vars
    const [currentPosition, setCurrentPosition] = useState({});

    const success = (position) => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        }
        setCurrentPosition(currentPosition);
    };

    useEffect(
        () => {
            navigator.geolocation.getCurrentPosition(success);
        }
    );

    // clear all fields
    const clearAllFields = (event) => {
        event.preventDefault();
        setReceipientName("");
        setSenderNameName("");
        setPackageType("");
        setDestination("");
        setPickUp("");
        setErrorMessage("");
        setSenderPhone("");
        setReceipientPhone("");
    }

    const clearAllErrors = (event) => {
        event.preventDefault();
    }

    // handle trip request
    const handleRequest = async (event) => {
        event.preventDefault();
        clearAllFields();
        clearAllErrors();
    }

    const handlePickUpChanged = (event) => {
        event.preventDefault();
        clearAllErrors();
        setPickUp(event.target.value);
    }

    const handleDestinationChanged = (event) => {
        event.preventDefault();
        clearAllErrors();
        setDestination(event.target.value);
    }

    const handleSenderNameChanged = (event) => {
        event.preventDefault();
        clearAllErrors();
        setSenderNameName(event.target.value);
    }

    const handleReceiverNameChanged = (event) => {
        event.preventDefault();
        clearAllErrors();
        setReceipientName(event.target.value);
    }

    const handlePackageTypeChanged = (event) => {
        event.preventDefault();
        clearAllErrors();
        setPackageType(event.target.value);
    }

    const handleSenderPhoneChanged = (event) => {
        event.preventDefault();
        clearAllErrors();
        setSenderPhone(event.target.value);
    }

    const handleReceiverPhoneChanged = (event) => {
        event.preventDefault();
        clearAllErrors();
        setReceipientPhone(event.target.value);
    }

    return (
        <>
            <Navbar />
            <div className="request__container">
                <div className="form__content">
                    <div className="image__container">
                        <img src={Image12} alt="This is a graphic" />
                    </div>
                    <div className="form__container">

                        <div className="form__group">
                            <label htmlFor="senderLocation" className="form__label">pickup</label>
                            <input
                                className="form__input"
                                required
                                type="text"
                                name="senderLocation"
                                placeholder="street 11 ksi"
                                value={pickup}
                                onChange={handlePickUpChanged}
                            />
                        </div>

                        <div className="form__group">
                            <label htmlFor="receipientLocation" className="form__label">Destination</label>
                            <input
                                className="form__input"
                                required
                                type="text"
                                name="receipientLocation"
                                placeholder="Street 22 ksi"
                                value={destination}
                                onChange={handleDestinationChanged}
                            />
                        </div>

                        <div className="form__group">
                            <label htmlFor="senderName" className="form__label">Senders Name</label>
                            <input
                                className="form__input"
                                required
                                type="text"
                                name="senderName"
                                placeholder="John Doe"
                                value={senderName}
                                onChange={handleSenderNameChanged}
                            />
                        </div>

                        <div className="form__group">
                            <label htmlFor="receipientName" className="form__label">Receipients Name</label>
                            <input
                                className="form__input"
                                required
                                type="text"
                                name="receipientName"
                                placeholder="John Doe"
                                value={receipientName}
                                onChange={handleReceiverNameChanged}
                            />
                        </div>

                        <div className="form__group">
                            <label htmlFor="packageType" className="form__label">Package Type</label>
                            <input
                                className="form__input"
                                type="text"
                                name="packageType"
                                required
                                placeholder="Book, Gift"
                                value={packageType}
                                onChange={handlePackageTypeChanged}
                            />
                        </div>

                        <div className="form__group">
                            <label htmlFor="senderPhone" className="form__label">Senders Phone</label>
                            <input
                                className="form__input"
                                type="text"
                                name="senderPhone"
                                required
                                placeholder="050 000 000 0"
                                value={senderPhone}
                                onChange={handleSenderPhoneChanged}
                            />

                        </div>

                        <div className="form__group">
                            <label htmlFor="receipientPhone" className="form__label">Receipients Phone</label>
                            <input
                                className="form__input"
                                type="text"
                                name="receipientPhone"
                                required
                                placeholder="050 000 000 0"
                                value={receipientPhone}
                                onChange={handleReceiverPhoneChanged}
                            />
                        </div>

                        <p className="error-message">{errorMessage}</p>

                        <div className="request__button__container">
                            <button className="btn__request" onClick={handleRequest}>
                                Request
                            </button>
                        </div>
                    </div>
                </div>
                <div className="deco__map">
                    <RequestMap />
                </div>
            </div>
        </>
    )
}

export default RequestPage;
