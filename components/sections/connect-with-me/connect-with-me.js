import Button from '@components/atoms/button/button'
import styles from './connect-with-me.module.css'
import { useState } from 'react'
import { isCharactersOnly, isValidEmail } from 'utils/helper/helperFunctions'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';

export default function ConnectWithMe(){

    const [inputFormData, setInputFormData] = useState({
        name : '',
        email : '',
        subject : '',
        message : ''
    })
    const [errorMsg,setErrorMsg] = useState('')

    function handleChange(key='',value=''){
        if(key == 'name' && !isCharactersOnly(value)) return
        setErrorMsg('')
        setInputFormData({...inputFormData,[key]:value})
    }

    function handleSubmit(){
        if(!inputFormData?.name?.trim() || !inputFormData?.email?.trim() || !inputFormData?.subject?.trim()){
            setErrorMsg('Please fill out the mandatory fields.')
            return
        }
        if(!isValidEmail(inputFormData?.email)){
            setErrorMsg('Please enter a valid email.')
            return
        }
        const mailtoLink = `mailto:1978sameerbajaj@gmail.com?subject=${encodeURIComponent(inputFormData?.subject)}&body=${encodeURIComponent(
            `Hi I'm ${inputFormData?.name},\n${inputFormData?.message ? `${inputFormData?.message}` : ''}`
        )}`;        
        window.location.href = mailtoLink;
    }

    const handleIconClick = (key='') => {
        let link
        if(key == 'call'){
            window.location.href = 'tel:+916284827773';
            return
        }
        if(key == 'instagram'){
            link = 'https://www.instagram.com/m.sameer.bajaj?igsh=MWdzYmM0M2E2cjk1Yg=='
        }
        if(key == 'whatsapp'){
            const phoneNumber = '6284827773'; // Replace with your WhatsApp number
            const message = 'Hi Sameer';
            link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        }
        if(key == 'linkedin'){
            link = 'https://www.linkedin.com/in/sameer-bajaj-full-stack-developer'
        }
        window.open(link, '_blank');
    };

    return(
        <div className={styles.mainWrapper} id='contact'>
            <div>
                <p className={styles.letsConnect}>{"Let's Connect"}</p>
                <p className={styles.info}>Please fill out the form on this section to contact with me. Or call me between <span>9:00 AM</span> to <span>8:00 PM</span>.</p>
                <div className={styles.iconsWrapper}>
                    <LinkedInIcon
                        sx={{
                            color : '#0077B5',
                            fontSize : '2rem',
                            cursor : 'pointer'
                        }}
                        className={styles.icon}
                        onClick= {()=>handleIconClick('linkedin')}
                    />
                    <InstagramIcon
                        sx={{
                            fontSize : '1.8rem',
                            cursor : 'pointer'
                        }}
                        className={styles.icon}
                        onClick= {()=>handleIconClick('instagram')}
                    />
                    <WhatsAppIcon
                        sx={{
                            fontSize : '2rem',
                            color : "green",
                            cursor : 'pointer'
                        }}
                        className={styles.icon}
                        onClick= {()=>handleIconClick('whatsapp')}
                    />
                </div>
            </div>
            
            <div className={`${styles.inputFormWrapper}`}>
                <input
                    type='text'
                    placeholder='Name*'
                    className={styles.input}
                    value={inputFormData?.name}
                    onChange={(e)=>handleChange('name',e?.target?.value)}
                />
                <input
                    type='text'
                    placeholder='Email*'
                    className={styles.input}
                    value={inputFormData?.email}
                    onChange={(e)=>handleChange('email',e?.target?.value)}
                />
                <input
                    type='text'
                    placeholder='Subject*'
                    className={styles.input}
                    value={inputFormData?.subject}
                    onChange={(e)=>handleChange('subject',e?.target?.value)}
                />
                <textarea
                    type='text'
                    placeholder='Message (Optional)'
                    className={styles.textArea}
                    value={inputFormData?.message}
                    onChange={(e)=>handleChange('message',e?.target?.value)}
                />
                <div className={styles.buttonWrapper}> 
            {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
                <div>
                    <Button
                        text='Mail Me'
                        handleClick={handleSubmit}
                    />
                    <p>Or</p>
                    <div className={styles.callIcon} onClick={()=>handleIconClick('call')}>
                        <CallIcon
                            sx={{
                                fontSize : '1.4rem',
                                color:'#fff'
                            }}
                        />
                        <p>...</p>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}