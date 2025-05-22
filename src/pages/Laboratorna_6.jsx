import React, {useState} from 'react'
import { assets } from "../assets/assets.js";

const tasks = [
    { id: 1, title: "Тема, мета ЛР №6, Місце розташування сайту, звіту" },
    { id: 2, title: "Backend частина" },
    { id: 3, title: "Frontend частина" },
    { id: 4, title: "Висновки" },
];

const Laboratorna6 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // Функція для відображення контенту на основі activeTask
        const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №6, Місце розташування сайту, звіту</p>
                        </div>
    
                        <p>
                            Тема: АСИНХРОННІСТЬ. ПРОМІСИ.
                            HTTP-ЗАПИТИ. REST API. AJAX. КРОС-ДОМЕННІ ЗАПИТИ. ПАГІНАЦІЯ. CRUD 
                        </p>
    
                        <p>
                            Мета: Придбати практичні навички
                            роботи створення промісу. Методи then(), catch(), finally().Ланцюжки промісів. Методи класу
                            Promise. Протокол HTTP. Протокол HTTPS.. REST API Формат запиту. HTTP-методи.
                            HTTP-заголовки. AJAX. Fetch API. Робота з публічним REST API
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
                    <h2 className="font-semibold text-xl">Асинхронні Функції</h2>
                    <p>Асинхронні функції (async functions) дозволяють виконувати операції, які можуть займати
                        певний час (наприклад, зчитування з бази даних або запити до сервера), без блокування
                        основного потоку виконання коду. Вони створюються з використанням ключового слова async, а
                        всередині такої функції можна використовувати оператор await, щоб «дочекатися» результату
                        виконання асинхронної операції.
                    </p>
                    <h2 className="font-semibold text-xl">Проміси</h2>
                    <p>Проміс (Promise) — це об'єкт, який представляє майбутній результат асинхронної операції.
                            Проміси мають три стани:
                        <ul>
                            <li>pending (очікування)</li>
                            <li>fulfilled (виконано успішно)</li>
                            <li>rejected (помилка)</li>
                        </ul>
                    </p>
                    <h2 className="font-semibold text-xl">API</h2>
                    <p>
                        API — це інтерфейс, який дозволяє різним програмам взаємодіяти між собою. У бекенд-розробці
                        зазвичай йдеться про REST API — набір HTTP-ендпоінтів, за допомогою яких фронтенд може
                        взаємодіяти з базою даних або логікою сервера.
                    </p>
                    <img src={assets.lab6_back1} alt=""/>
                    <img src={assets.lab6_back2} alt=""/>
                    <img src={assets.lab6_back3} alt=""/>
                </div>
            case 3:
                return <div>
                        <h2 className="font-semibold text-xl">fetch() у фронтенді</h2>
                        <p>fetch() — це вбудована функція в JavaScript, яка дозволяє відправляти HTTP-запити з браузера.
                            Вона повертає проміс, тому її можна використовувати з .then() або всередині async/await.
                            Приклад використання:</p>
                        <img src={assets.lab6_front} alt=""/>
                        <p>Таким чином, fetch є містком між фронтендом і бекендом: він надсилає дані з форми або кошика
                            на сервер, а також отримує відповіді — наприклад, підтвердження замовлення або список
                            товарів.</p>
                    </div>
            case 4:
                return <div>
                            <h1>Висновок</h1>
                
                            <p>У ході виконання роботи було розглянуто та закріплено ключові поняття та
                        технології, пов’язані з обробкою асинхронних операцій у веброзробці. Було опановано створення та
                        використання промісів, а також методів then(), catch(), finally() і побудову ланцюжків промісів.
                        Це дозволило зрозуміти, як ефективно обробляти асинхронні події, уникати вкладених колбеків і
                        писати читабельний код.

                        Особливу увагу приділено протоколам HTTP та HTTPS, що є основою для передачі даних між клієнтом
                        і сервером. Розглянуто структуру HTTP-запитів: методи (GET, POST, PUT, DELETE), формати запитів,
                        заголовки, а також типові сценарії використання REST API для взаємодії з сервером.

                        Завдяки вивченню AJAX і Fetch API, було набуте практичне розуміння механізмів обміну даними між
                        фронтендом і бекендом без перезавантаження сторінки. Крім того, опрацьовано роботу з публічними
                        REST API, що є поширеним способом інтеграції зовнішніх сервісів у вебдодатки.

                        Також було розглянуто поняття крос-доменних запитів і методи їх обробки, а також реалізацію
                        пагінації як способу оптимізації роботи з великими обсягами даних. У контексті CRUD-операцій
                        (Create, Read, Update, Delete) отримано навички побудови повноцінного функціоналу
                        клієнт-серверної взаємодії.

                        У результаті досягнута мета роботи — здобуто практичні навички роботи з асинхронним
                        програмуванням, промісами, HTTP-запитами та REST API у сучасних вебзастосунках.</p>
                    </div>
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 6</h1>
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
export default Laboratorna6
