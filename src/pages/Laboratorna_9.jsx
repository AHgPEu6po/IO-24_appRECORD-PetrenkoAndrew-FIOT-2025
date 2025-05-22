import React, {useState} from 'react'
import { assets } from "../assets/assets.js";

const tasks = [
    { id: 1, title: "Тема, мета ЛР №9, Місце розташування сайту, звіту" },
    { id: 2, title: "Теоретична частина" },
    { id: 3, title: "Backend частина" },
    { id: 4, title: "Frontend частина" },
    { id: 5, title: "База даних" },
    { id: 6, title: "Висновки" },
];

const Laboratorna9 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // Функція для відображення контенту на основі activeTask
        const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №9, Місце розташування сайту, звіту</p>
                        </div>
    
                        <p>
                            Тема: Аутентифікація. Тести.
                            Модульне тестування. Пошта. Docker. Вебсокети. 
                        </p>
    
                        <p>
                            Мета: Реєстрація, хешування пароля
                            через бібліотеку bcrypt або crypto ( Node.js) Створення JWT-токену під час аутентифікації
                            через бібліотеку jsonwebtoken. Аутентифікація користувача через самописну middleware.
                            Піраміда тестування. Юніт-тести. Пошта. Docker. Верифікація пошти. Основи Docker . Вебсокети
                        </p>
    
                        <ul>
                            <li>
                                <a href="https://github.com/AHgPEu6po/IO-24_appWEB-PetrenkoAndrew-FIOT-2025">Посилання на репозиторій власного WEB-застосунку</a>
                            </li>
                            <li>
                                <a href="https://ahgpeu6po.github.io/IO-24_appWEB-PetrenkoAndrew-FIOT-2025/">Посилання на репозиторій на живу сторінку власного WEB-застосунку</a>
                            </li>
                            <li>
                                <a href="https://github.com/AHgPEu6po/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025">Посилання на репозиторій звітного HTML-документа</a>
                            </li>
                            <li>
                                <a href="https://ahgpeu6po.github.io/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/">Посилання на репозиторій на живу сторінку звітного HTML-документу</a>
                            </li>
                            <li>
                                Посилання на репозиторій з самостійними роботами:<a></a>
                            </li>
                            <li>
                                Посилання на репозиторій живу сторінку з самостійними роботами:<a></a>
                            </li>
                        </ul>
    
                    </div>
                </div>;

            case 2:
                return <div>
                    <h2 className="font-semibold text-xl">Реєстрація та хешування пароля</h2>
                        <p>Під час створення облікового запису користувача небезпечно зберігати пароль у відкритому
                            вигляді. Замість цього пароль хешується — тобто перетворюється у зашифрований рядок, який
                            неможливо зворотно розшифрувати.</p>
                        <h2 className="font-semibold text-xl">Бібліотека bcrypt (Node.js)</h2>
                        <p>bcrypt — популярна бібліотека для хешування паролів. Вона використовує salt — випадковий
                            рядок, який додається до пароля перед хешуванням для підвищення безпеки.
                            Основні методи:
                            <br/>
                            const bcrypt = require('bcrypt');
                            <br/>
                            // Хешування
                            const hash = await bcrypt.hash(password, 10);
                            <br/>
                            // Перевірка
                            const match = await bcrypt.compare(inputPassword, hash);
                        </p>
                        <h2 className="font-semibold text-xl">Створення JWT-токена (аутентифікація)</h2>
                        <p>JWT (JSON Web Token) — це відкритий стандарт для передачі зашифрованих даних між клієнтом і
                            сервером.
                            <br/>
                            const jwt = require('jsonwebtoken');
                            <br/>
                            const token = jwt.sign( userId: user._id , 'SECRET_KEY',  expiresIn: '1h' );
                            <br/>
                            // Перевірка токена
                            const decoded = jwt.verify(token, 'SECRET_KEY');
                            JWT зазвичай передається у заголовку Authorization: Bearer і використовується для перевірки
                            особи на захищених маршрутах.
                        </p>
                </div>
                        
            case 3:
                return <div>
                        <img src={assets.lab9_back1} alt=""/>
                        <img src={assets.lab9_back2} alt=""/>
                    </div>
                
            case 4:
                return <div>
                        <img src={assets.lab9_front1} alt=""/>
                        <img src={assets.lab9_front2} alt=""/>
                        <img src={assets.lab9_front3} alt=""/>
                    </div>
            
            case 5:
                return <div>
                        <img src={assets.lab9_db} alt=""/>
                    </div>

            case 6:
                return <div>
                            <h1>Висновок</h1>
                
                            <p>У результаті вивчення теми було здобуто цілісне уявлення про ключові складові
                        сучасної веброзробки на стороні серверу. Ми розглянули механізми реєстрації та аутентифікації
                        користувачів із використанням хешування паролів через бібліотеку bcrypt, а також реалізацію
                        безпечної авторизації за допомогою JWT-токенів. Особливу увагу приділено створенню
                        middleware-функцій, які забезпечують перевірку доступу до захищених маршрутів.

                        Окремий акцент зроблено на тестуванні — зокрема, юніт-тестах, що формують основу надійної
                        архітектури коду. Також вивчено механізм надсилання email-повідомлень і реалізацію верифікації
                        пошти, яка підвищує довіру та безпеку користувача.

                        У рамках теми було ознайомлено з базовими поняттями та практикою використання Docker, що
                        дозволяє запускати застосунки у контейнерах незалежно від середовища. Нарешті, вивчено вебсокети
                        як засіб двосторонньої комунікації в реальному часі, що є основою для реалізації онлайн-чатів,
                        сповіщень та інших інтерактивних функцій.

                        Таким чином, було досягнуто мети: отримано практичні навички з побудови безпечного,
                        масштабованого та інтерактивного серверного застосунку з використанням сучасних інструментів і
                        підходів.</p>
                    </div>
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 9</h1>
            <div className="flex flex-col lg:flex-row items-start gap-5 mt-5 px-4">
                {/* Sidebar */}
                <div
                    className={`flex flex-col gap-2 w-64 lg:w-48 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
                    {tasks.map(task => (
                        <p
                            key={task.id}
                            className={`pl-3 py-2 border rounded transition-all cursor-pointer mt-4`}
                            onClick={() => setActiveTask(task.id)}
                        >
                            {task.title}
                        </p>
                    ))}
                </div>

                <button
                    className="lg:hidden p-2 border border-gray-300 rounded bg-white mb-4"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? 'Закрити меню' : 'Відкрити меню'}
                </button>

                <div className="w-full grid grid-cols-1 gap-4 gap-y-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
export default Laboratorna9
