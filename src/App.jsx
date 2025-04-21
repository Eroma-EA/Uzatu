import './App.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import orn2 from './images/orn2.png'

function App() {
  const groom = 'Еркем';
  const eventDate = new Date('2025-06-28T18:00:00');
  const phone = '77003040299';
  const [value, setValue] = useState("");

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setInterval(() => {
      const diff = eventDate - new Date();
      if (diff <= 0) return clearInterval(timer);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsapp = () => {
    const message = `Сәлеметсіз бе! Мен ${value} ұзату тойына келемін 😊`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="app">
      <div className="page bg">
        <h1 className='title'>Қыз ұзату</h1>
        <section className="hero" data-aos="zoom-in">
          <h1>{groom}</h1>
        </section>

        <span className='line'></span>
        <span className='page-down'></span>
      </div>

      <div className="page">
             <span className='orn orn1'></span>
                    <span className='orn-heart'>
                      <img src={orn2} alt="" />
                    </span>
        <section className="about" id='about' data-aos="fade-up">
          <h1>
            Құрметті ағайын-туыс, бауырлар,<br />
            нағашы-жиен, құда-жекжат,<br />
            дос-жарандар мен әріптестер!
          </h1>

          <p className="invite-text">Сіздерді аяулы</p>

          <div className="name">Еркем</div>

          <p className="invite-text">
            қызымыздың ұзату тойына<br />
            арналған салтанатты<br />
            ақ дастарханымыздың<br />
            қадірлі қонағы<br />
            болуға шақырамыз!
          </p>
        </section>
        <span className='bg-opacity'></span>
        <span className='ornament'></span>
      </div>

      <div className="page">
         <span className='orn-heart'>
                      <img src={orn2} alt="" />
                    </span>
        <span className='orn orn2'></span>
        <h1 data-aos="fade-up">Той иелері</h1>
        <h1 className="name" data-aos="zoom-in">Айдын - Самал</h1>
        
         <span className='orn-heart'>
                      <img src={orn2} alt="" />
                    </span>

        <h1 data-aos="fade-up">Той салтанаты</h1>
        <section id="calendar" data-aos="fade-up">
          <h2 className='calendar-title'>28 Маусым 2025</h2>
          <div className="calendar-grid">
            <div className="day-name">Дс</div>
            <div className="day-name">Сс</div>
            <div className="day-name">Ср</div>
            <div className="day-name">Бс</div>
            <div className="day-name">Жм</div>
            <div className="day-name">Сн</div>
            <div className="day-name">Жс</div>

            <div className="day empty"></div>
            <div className="day empty"></div>
            <div className="day empty"></div>
            <div className="day">1</div>
            <div className="day">2</div>
            <div className="day">3</div>
            <div className="day">4</div>

            <div className="day">5</div>
            <div className="day">6</div>
            <div className="day">7</div>
            <div className="day">8</div>
            <div className="day">9</div>
            <div className="day">10</div>
            <div className="day">11</div>

            <div className="day">12</div>
            <div className="day">13</div>
            <div className="day">14</div>
            <div className="day">15</div>
            <div className="day">16</div>
            <div className="day">17</div>
            <div className="day">18</div>

            <div className="day">19</div>
            <div className="day">20</div>
            <div className="day">21</div>
            <div className="day">22</div>
            <div className="day">23</div>
            <div className="day">24</div>
            <div className="day">25</div>

            <div className="day">26</div>
            <div className="day">27</div>
            <div className="day">28</div>
            <div className="day">29</div>
            <div className="day">30</div>
            <div className="day">31</div>
          </div>
          
          <h1 className='time'>Басталу уақыты</h1>
          <h1 className='time'>18:00</h1>

 <span className='orn-heart'>
                      <img src={orn2} alt="" />
                    </span>
          <section className="timer" data-aos="fade-up">
            <h2 className='time'>Тойға дейін қалды:</h2>
            <div className="countdown">
              <div><span>{timeLeft.days}</span><small> күн</small></div>
              <div><span>{timeLeft.hours}</span><small> сағ</small></div>
              <div><span>{timeLeft.mins}</span><small> мин</small></div>
              <div><span>{timeLeft.secs}</span><small> сек</small></div>
            </div>
          </section>
        </section>
      </div>
       <span className='orn-heart'>
                      <img src={orn2} alt="" />
                    </span>

      <div className="page">
        <section className="location" data-aos="fade-up">
          <h2>Мекенжай</h2>
          <p>Жаркент, Валиханова көшесі, 2/9 <br /> Ресторан "Мереке"</p>
          <a className='gis' href='https://go.2gis.com/FAaWj'>2GIS</a>
        </section>
      </div>

      <div className="page">
         <span className='orn-heart'>
                      <img src={orn2} alt="" />
                    </span>
        <h1 className='final-text' data-aos="zoom-in">Тойға келуіңізді сұраймыз!</h1>

        <input
          type="text"
          placeholder='Аты-жөніңіз'
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          data-aos="fade-up"
        />

        <section className="rsvp" data-aos="fade-up">
          <button onClick={handleWhatsapp}>Қатысамын</button>
        </section>
         <span className='orn-heart'>
                      <img src={orn2} alt="" />
                    </span>
      </div>
    </div>
  );
}

export default App;
