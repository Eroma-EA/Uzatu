import './App.css';
import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import music from './sensulu.mp3';
import orn2 from './images/orn2.png';

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

  // Music
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const title = "Орда - Сен сұлу..... "; // название песни

  return (
    <div className="app">
      <div className="page bg" data-aos="fade">
        <div className="container">
          <div
            className={`circle-button ${isPlaying ? "spin" : ""}`}
            onClick={togglePlay}
          >
            <div className="circular-text">
              {[...title].map((char, i) => (
                <span
                  key={i}
                  style={{
                    transform: `rotate(${i * (360 / title.length)}deg)`, // Это распределит каждый символ по кругу
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
     <div className="play-icon">
  {isPlaying ? "❚❚" : "▶"}

</div>

          </div>
          <audio ref={audioRef} src={music} />
        </div>
        <h1 className="title" data-aos="zoom-in">Қыз ұзату</h1>
        <section className="hero" data-aos="zoom-in-up">
          <h1>{groom}</h1>
        </section>
        <span className="line"></span>
        <span className="page-down"></span>
      </div>

      <div className="page" data-aos="fade-up">
        <span className="orn orn1 lazy-fade"></span>
        <span className="orn-heart">
          <img src={orn2} alt="" />
        </span>
        <section className="about" id="about" data-aos="fade-up">
          <h1>
            Құрметті ағайын-туыс, бауырлар,<br />
            нағашы-жиен, құда-жекжат,<br />
            дос-жарандар мен әріптестер!
          </h1>

          <p className="invite-text">Сіздерді аяулы</p>

          <div className="name" data-aos="zoom-in">{groom}</div>

          <p className="invite-text" data-aos="fade-up">
            қызымыздың ұзату тойына<br />
            арналған салтанатты<br />
            ақ дастарханымыздың<br />
            қадірлі қонағы<br />
            болуға шақырамыз!
          </p>
        </section>
        <span className="bg-opacity lazy-fade"></span>
        <span className="ornament lazy-zoom"></span>
      </div>

      <div className="page" data-aos="fade">
        <span className="orn-heart">
          <img src={orn2} alt="" />
        </span>
        <span className="orn orn2 lazy-fade"></span>
        <h1 data-aos="fade-up">Той иелері</h1>
        <h1 className="name" data-aos="zoom-in">Айдын - Самал</h1>

        <span className="orn-heart">
          <img src={orn2} alt="" />
        </span>

        <h1 data-aos="fade-up">Той салтанаты</h1>
        <section id="calendar" data-aos="fade-up">
          <span className="orn orn3 lazy-fade"></span>
          <h2 className="calendar-title">28 Маусым 2025</h2>
          <div className="calendar-grid">
            {['Дс','Сс','Ср','Бс','Жм','Сн','Жс'].map((day, i) => (
              <div key={i} className="day-name">{day}</div>
            ))}
          {Array(new Date(2025, 5, 1).getDay() === 0 ? 6 : new Date(2025, 5, 1).getDay() - 1)
  .fill()
  .map((_, i) => <div key={`empty-${i}`} className="day empty"></div>)}

            {Array.from({ length: 31 }, (_, i) => (
              <div key={i} className={`day ${i + 1 === 28 ? 'day28' : ''}`}>{i + 1}</div>
            ))}
          </div>

          <h1 className="time">Басталу уақыты</h1>
          <h1 className="time">18:00</h1>

          <span className="orn-heart">
            <img src={orn2} alt="" />
          </span>

          <section className="timer" data-aos="fade-up">
            <h2 className="time">Тойға дейін қалды:</h2>
            <div className="countdown">
              <div><span>{timeLeft.days}</span><small> күн</small></div>
              <div><span>{timeLeft.hours}</span><small> сағ</small></div>
              <div><span>{timeLeft.mins}</span><small> мин</small></div>
              <div><span>{timeLeft.secs}</span><small> сек</small></div>
            </div>
          </section>
        </section>
      </div>

      <div className="page" data-aos="fade-up">
        <section className="location">
          <h2>Мекенжай</h2>
          <p>Жаркент, Валиханова көшесі, 2/9 <br /> Ресторан "Мереке"</p>
          <span className="orn orn4 lazy-fade"></span>
          <a className="gis" href="https://go.2gis.com/FAaWj">2GIS</a>
        </section>
      </div>

      <div className="page final" data-aos="zoom-in">
        <span className="orn-heart">
          <img src={orn2} alt="" />
        </span>
        <h1 className="final-text">Тойға келуіңізді сұраймыз!</h1>
        <input
          type="text"
          placeholder="Аты-жөніңіз"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          data-aos="fade-up"
        />
        <section className="rsvp" data-aos="fade-up">
          <button onClick={handleWhatsapp}>Қатысамын</button>
        </section>
        <span className="orn-heart">
          <img src={orn2} alt="" />
        </span>
      </div>
    </div>
  );
}

export default App;
