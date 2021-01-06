import React, { useState, useEffect, Component } from "react";

const FAQ = () => {
    return (
        <div className="competition-faq">
            <div className = "faq-list">
                <ul>
                    <li><Faqconst que={"Is this only for ITB students?"} ans={"No, it's open for all Indonesian students who are currently studying at undergraduate level."}/></li>
                    <li><Faqconst que={"Kalau saya mahasiswa baru dan belum ada KTM bagaimana ya?"} ans={"You can use KRS or something else that is credible and shows the identity of your complete name, student ID number, batch, and university."} /></li>
                    <li><Faqconst que={"I have made an account, but I haven't received the email cofirmation, what should I do?"} ans={"Please check your Spam folder."} /></li>
                    <li><Faqconst que={"What should I do after creating an account on the website?"} ans={"Please login and complete the registration form because if you are not complete it, you haven't registered as the participant."} /></li>
                    <li><Faqconst que={"If I create an account during the early bird, but I paid after the early bird finished, how much do I have to pay?"} ans={"You are registered as the participant if you have finished all the registration procedure, so if you paid at the regular time, the registration fee is 40,000 Rupiah."} /></li>
                    <li><Faqconst que={"May I choose more than one sector?"} ans={"No, you can only choose one sector."} /></li>
                    <li><Faqconst que={"Apakah paper nanti harus dalam bahasa Inggris?"} ans={"No, you can use English/Bahasa Indonesia."} /></li>
                    <li><Faqconst que={"What should I do after filling the registration form?"} ans={"If you have received an email confirmation that said all your pre-requisite files has been verified, it means your registration is done and wait for the case deployment at February 5th. Meanwhile, you can check the updated guidebook and other documents needed at bit.ly/GICC2021PreliminaryKit. Thank you!"} /></li>
                </ul>
            </div>
        </div>
    );
}

const Faqconst = p => {
    const [state, setState] = useState('none')
    const onClick = () => {
        if (state == 'none') {
            setState('block');
        } else {
            setState('none');}
    }
    return (
        <div className ="faq-item">
            <button className="question" title="Click to see answer" onClick={onClick} >
                <h5>{p.que}</h5>
            </button>
            <div className="answer" style={{display:state}}>
                <p>{p.ans}</p>
            </div>
        </div>
    );
}

export default FAQ;