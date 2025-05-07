import React from 'react';
import "./contact.css"

const Contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section_title">お問合せ｜Contact</h2>
            
            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">何でも話しましょう！</h3>
                    <p className="contact_details">フォームが苦手ですか？メールでご連絡ください。</p>
                </div>

                <form action="" className="contact_form">
                    <div className="contact_form-group">
                        <div className="contact_form-div">
                            <input type="text" className="contact_form-input" placeholder='お名前を入力してください'/>
                        </div>

                        <div className="contact_form-div">
                            <input type="email" className="contact_form-input" placeholder='メールアドレスを入力してください'/>
                        </div>
                    </div>

                        <div className="contact_form-div">
                            <input type="text" className="contact_form-input" placeholder='件名を入力してください'/>
                        </div>

                        <div className="contact_form-div contact_form-area">
                            <textarea 
                                name="" 
                                id="" 
                                cols="30" 
                                rows="10" 
                                className="contact_form-input" 
                                placeholder="ここにメッセージをご記入ください"
                                ></textarea>
                        </div>
                        
                        <button className="btn">
                        送信する
                            <i className="uil uil-message contact_button-icon"></i>
                        </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;