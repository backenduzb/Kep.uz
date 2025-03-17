import "./footer.scss"
import "../../styles/blockstyles/border.scss"
import KepLogo from "../../assets/new-logo.svg";
import DjangoIcon from "../../assets/django-svgrepo-com.svg";


const Footer =()=>{
    return(
        <>
        <div className="footer-con">
           
            <div className="footer-sub">
                <div className="Kep-info">
                    <div className="logo">
                    <img src={KepLogo} height="32" width="32"/>
                    <p>KEP.uz</p>
                </div>
                    <p>KEP.uz dasturlash mahoratlaringiz va raqobatni oshirish uchun moʻljanlangan platforma</p>
                </div>
                <div className="organish" style={{ fontSize:"13px",gap:"10px" }}>
                    <li style={{ fontWeight:"bold" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                    </svg>
                    <span style={{ marginLeft:"5px" }} >
                    O'rganish
                    </span>
                    </li>
                    <li>Kurslar</li>
                    <li>Bloglar</li>
                    <li>Lugavar</li>
                </div>
                <div className="Ishlash" style={{ fontSize:"13px",gap:"10px" }}>
                    <li style={{ fontWeight:"bold" }} > <span style={{ marginLeft:"5px" }} >
                    Ishlash
                    </span></li>
                    <li>Masalalar</li>
                    <li>Bellashuvlar</li>
                    <li>Testlar</li>
                    <li>Loyihalar</li>
                </div>
                <div className="musobaqa" style={{ fontSize:"13px",gap:"10px" }}>
                    <li style={{ fontWeight:"bold" }} ><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z"/>
                    </svg>
                    <span style={{ marginLeft:"5px" }} >
                    Musobaqalar
                    </span>
                    </li>
                    <li>Kontestlar</li>
                    <li>Arena</li>
                    <li>Turnirlar</li>
                </div>
            </div>
            <div className="deep-footer">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
                <div className="text">
                <p style={{ color:"white" }}>KEP.uz</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" style={{ fill:"white" }} class="bi bi-c-square" viewBox="0 0 16 16">
                <path d="M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>
                </div>
                <div className="frameworks">
                    <p>Powered by</p>
                    <img src={DjangoIcon} height="16" width="16" style={{ background:"transparent" }}/>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"/></svg>
                </div>
            </div>
        
        </div>
        
        </>
    )
}

export default Footer;