import React from 'react';
import {NavLink} from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (<footer>
        <div id='footer' className='footer__container'>
            <div className='footer__body'>
                <div className='footer__col-one'>


                    <div className='footer__col-one-row-one'>Marauder De Nuit</div>
                    <div className='footer__col-one-row-two'>ооо "ОвисКутисФабрик"</div>
                    <div className='footer__col-one-row-three'>пр-т Рокоссовского, д. 76. офис 296</div>
                    <div className='footer__col-one-row-three'>Свидетельство о гос регистрации выдано</div>
                    <div className='footer__col-one-row-three'>Минским горисполкомом 28.08.2023, рег. №193706521</div>
                    <div className='footer__col-one-row-three'>Зарегистрирован в торговом реестре 16.03.2022</div>
                    <div className='footer__col-one-row-four'>2023 conception de Massimo Olensky &copy;</div>
                </div>
                <div className='footer__col-two'>
                    <NavLink to='/main' className='nav__item'>Главная</NavLink>
                    <NavLink to='/catalog' className='nav__item'>Каталог</NavLink>
                    <NavLink to='/deliveryAndReturn' className='nav__item'>Доставка и возврат</NavLink>
                    <NavLink to='/careOfProducts' className='nav__item'>Уход за изделием</NavLink>
                    <NavLink to='/defineAFake' className='nav__item'>Как отличить подделку</NavLink>
                </div>
                <div className='footer__col-three'>
                    <div className='footer__col-three-number'>+375 44 595 96 96</div>
                    <div className='footer__col-three-workTime'>Время работы 9:00 - 22:00</div>
                    <div className='footer__col-three-email'>maraudeurdenuit@gmail.com</div>
                </div>
                <div className='footer__col-four'>
                    <div className='telegram'>
                        <a target='_blank' rel='noreferrer' href="https://t.me/maraudeurdenuit">
                            <TelegramIcon></TelegramIcon>
                        </a>
                    </div>
                    <div className='whatsApp'>
                        <a target='_blank' rel='noreferrer'
                           href="https://api.whatsapp.com/send/?phone=37544%20595%2096%2096&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C%2C&type=phone_number&app_absent=0">
                            <WhatsAppIcon></WhatsAppIcon>
                        </a>
                    </div>
                    <div className='instagram'>
                        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/maraudeur.de.nuit/">
                            <InstagramIcon></InstagramIcon>
                        </a>
                    </div>
                    <div className='tiktok'>
                        <a target='_blank' rel='noreferrer'
                           href="https://www.tiktok.com/@maraudeur.de.nuit?_t=8hs6iugIEJZ&_r=1">
                            <img src="./img/tiktok-svgrepo-com.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>);
}

export default Footer;