import React from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
function Advantages() {
    return (
                <div className='ourAdvantages'>
                    <div className='ourAdvantages__title _title'>
                        Премиальный класс кожаных изделий от нашего модного дома, только для тебя.
                    </div>
                    <div className='ourAdvantages__title _title'>Мы задаем стиль.</div>
                    <div className='ourAdvantages__subtitle '>Maraudeur De Nuit.</div>
                    <div className='ourAdvantages__body'>
                        <p className='ourAdvantages__text'>
                            В тени мистической ночи, среди вихря элегантности, зародился новый бренд и имя ему было "Maraudeur de Nuit".
                            Словно перо, касающееся бумаги, каждый стежок нити мастера вплетал в изделие историю изысканности и страсти.
                        </p>
                        <p className='ourAdvantages__text'>
                            Сокровища кожевного мастерства всегда создаются украдкой, приковывая взгляды своей неповторимой красотой. Так, открывая двери в мир утонченного стиля, "Maraudeur de Nuit" заявляет о своей дерзкой амбиции - встать в строй рядом с великими и покорить ваши сердца.
                        </p>
                        <p className='ourAdvantages__text'>
                            Сущность бренда возвышается над обыденностью, стремясь стать неотъемлемой частью эстетического опыта каждого клиента. В каждой строчке нити, здесь звучит мелодия индивидуальности, а в каждой детали - отпечаток великого мастерства.
                        </p>
                        <p className='ourAdvantages__text'>
                            Эти произведения искусства, как художественные полотна, раскрывают свою красоту на фоне изысканной конкуренции наполнившей наш мир. "Maraudeur de Nuit" - не просто бренд - это ода качеству, встречающая взгляды смелости и стиля. В каждом шаге этого путешествия рождается вечная классика старинной Белорусской роскоши и моды привезённой к нам когда то из далёкой Франции.
                        </p>
                        <p className='ourAdvantages__text'>
                            В этом мире элегантности "Maraudeur de Nuit" становится не только брендом, но и воплощением исключительности. Каждое кожаное изделие здесь - не просто аксессуар, а целая история, выраженная в каждом изделии.
                        </p>
                        <p className='ourAdvantages__text'>
                            Погружаясь с нами в ореол тайны и роскоши, вы сами становитесь частью легенды. Ваши персональные предпочтения становятся частью творчества наших мастеров, создающих нечто уникальное, что подчеркнет ваш стиль и индивидуальность.
                        </p>
                        <p className='ourAdvantages__text'>
                            "Maraudeur de Nuit" - это не просто покупка, а инвестиция в свой собственный стиль и утонченность. С каждым прикосновением к изделию вы ощутите высший стандарт качества, ласкающий ваши чувства, словно аккорды нежной мелодии.
                        </p>
                        <p className='ourAdvantages__text'>
                            Собственность "Maraudeur de Nuit" - это нечто большее, чем статусный аксессуар. Это погружение в мир, где роскошь становится вашим естественным состоянием. Позвольте себе быть неотразимым и неповторимым - выберите "Maraudeur de Nuit" и откройте для себя исключительность, воплощенную в каждом шедевре нашего бренда.
                        </p>
                        <p className='ourAdvantages__body-footer'>
                            С искренним теплом к вам...
                        </p>
                    </div>
                    <div className='ourAdvantages__footer'>
                        <div className='ourAdvantages__item'>
                            <div className='ourAdvantages__icon'>
                                <ThumbUpOffAltIcon/>
                            </div>
                            <h2 className='ourAdvantages__itemTitle'>
                                Самые<br /> лучшие
                            </h2>
                            <p className='ourAdvantages__itemSubtitle'>
                                Только лучшие сумки для наших клиентов
                            </p>
                        </div>
                        <div className='ourAdvantages__item'>
                            <div className='ourAdvantages__icon'>
                                <RecentActorsIcon/>
                            </div>
                            <h2 className='ourAdvantages__itemTitle'>
                                Клубная <br />система
                            </h2>
                            <p className='ourAdvantages__itemSubtitle'>
                                Специальные предложения и условия для членов клуба
                            </p>
                        </div>
                        <div className='ourAdvantages__item'>
                            <div className='ourAdvantages__icon'>
                                <MoreTimeIcon/>
                            </div>
                            <h2 className='ourAdvantages__itemTitle'>
                                Работаем<br />24/7
                            </h2>
                            <p className='ourAdvantages__itemSubtitle'>
                                В любое удобное для вас время
                            </p>
                        </div>
                        <div className='ourAdvantages__item'>
                            <div className='ourAdvantages__icon'>
                                <CurrencyExchangeIcon/>
                            </div>
                            <h2 className='ourAdvantages__itemTitle'>
                                Удобная <br />оплата
                            </h2>
                            <p className='ourAdvantages__itemSubtitle'>
                                Мы принимаем оплату наличными или картой
                            </p>
                        </div>
                    </div>
                </div>
    );
}

export default Advantages;