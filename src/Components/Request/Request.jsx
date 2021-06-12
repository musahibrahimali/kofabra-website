import React, { useState } from 'react';
import { RequestMap } from '../exports';
import './Request.css';

function Request() {

    const [isSending, setIsSending] = useState(true);
    const [receipientName, setReceipientName] = useState("");
    const [senderName, setSenderNameName] = useState("");
    const [packageType, setPackageType] = useState("");
    const [sendersLocation, setSendersLocation] = useState("");
    const [receipientsLocation, setReceipientsLocation] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // clear all fields
    const clearAllFields = (event) => {
        event.preventDefault();
        setReceipientName("");
        setSenderNameName("");
        setPackageType("");
        setSendersLocation("");
        setReceipientsLocation("");
        setErrorMessage("");
    }

    const handleSendingSwitch = (event) => {
        event.preventDefault();
        setIsSending(!isSending);
    }

    // handle trip request
    const handleRequest = async (event) => {
        event.preventDefault();
        clearAllFields();
    }

    return (
        <>
            <div className="request">
                <div className="request__form">
                    <h1>Send or receive a package</h1>
                    <div className="form__conatianer">
                        <form action="">
                            <label htmlFor="isSending">Sending or Receiving</label>
                            <input
                                id="isSending"
                                type="radio"
                                name="isSending"
                                value={isSending ? "Sending" : "Receiving"}
                                onChange={handleSendingSwitch}
                            />
                            {/* senders name */}
                            {
                                isSending ?
                                    <div></div> :
                                    <div>
                                        <label htmlFor="senderName">Senders Name</label>
                                        <input
                                            name="senderName"
                                            type="text"
                                            value={senderName}
                                        />
                                    </div>
                            }

                            {/* Receivers name */}
                            <label htmlFor="receipientName">Receivers Name</label>
                            <input
                                name="receipientName"
                                type="text"
                                value={receipientName}
                            />

                            {/* Pakage type */}
                            <label htmlFor="receipientName">Package Type</label>
                            <input
                                name="packageType"
                                type="text"
                                value={packageType}
                            />

                            {/* Senders Location */}
                            <label htmlFor="senderLocation">Senders Location</label>
                            <input
                                name="senderLocation"
                                type="text"
                                value={sendersLocation}
                            />

                            {/* Senders Location */}
                            <label htmlFor="reveipientLocation">Receipients Location</label>
                            <input
                                name="reveipientLocation"
                                type="text"
                                value={receipientsLocation}
                            />

                            {/* error message */}
                            <div className="error__message__container">
                                <p className="error__message">
                                    {errorMessage}
                                </p>
                            </div>

                            <button
                                onClick={handleRequest}
                            >
                                Request
                            </button>
                        </form>
                    </div>
                </div>
                <div className="deco__map">
                    <RequestMap />
                </div>
            </div>
        </>
    )
}

export default Request;
