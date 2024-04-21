import React, {useState} from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import liza from '../assets/liza1304.jpg';




const Room = () => {

    const navigate = useNavigate()

    const [cookies, setCookies] = useCookies(["token"]);
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    

    const checkPassword = () => {
        if (password === "liza") {
            setCookies("token", true, { maxAge: 10000 });
        } else {
            navigate("/about")
        }

    }

    



  return (
    <div className='room'>
        {!cookies.token  ? (
            <form onSubmit={checkPassword} className="secret-room-auth">
                <input type="text" placeholder='Password please🤫' value={password} onChange={handleChange} id="input-room"></input>
                <button type="submit" className="btn-room">Submit</button>
            </form>
        ) : (
            <div className='memory'>
                <div className='img-of-liza'>
                    <img src={liza} alt='Liza' loading="lazy" />
                </div>
                <div className='music-about-liza'>
                    <div className='music-att'>
                       <iframe 
                style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/track/69E0PXED6MvClnqED4d7f5?utm_source=generator" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
                </iframe> 
                    </div>
                    <div className='music-att'>
                        <iframe 
                style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/track/4D3Vkw3OS5CD6lYQWQMUpK?utm_source=generator" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
                </iframe>
                    </div>
                    <div className='music-att'>
                        <iframe 
                style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/track/69ppZZB9v4AZIm0FpuFYo4?utm_source=generator&theme=0" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
                </iframe>
                    </div>
                    <div className='music-att'>
                    <iframe 
                style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/track/31B55RtdFbmnzmyPhT7TY8?utm_source=generator" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
                </iframe>
                    </div>
                    
                </div>
            </div>
        )}
        
      

    </div>
  )
}

export default Room
