import React, {useState} from 'react'
import { assets } from "../assets/assets.js";

const tasks = [
    { id: 1, title: "Тема, мета ЛР №8, Місце розташування сайту, звіту" },
    { id: 2, title: "Теоретична частина" },
    { id: 3, title: "Backend частина" },
    { id: 4, title: "Frontend частина" },
    { id: 5, title: "База даних" },
    { id: 6, title: "Висновки" },
];

const Laboratorna8 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // Функція для відображення контенту на основі activeTask
        const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №8, Місце розташування сайту, звіту</p>
                        </div>
    
                        <p>
                            Тема: MongoDB та Mongoose. Схеми та
                            методи Mongoose. Деплой на Heroku. 
                        </p>
    
                        <p>
                            Мета: MongoDB. Створюємо
                            Mongo-аккаунт, проект Mongo Atlas, кластер. MongoDB Compass. Робота з базою даних MongoDB
                            через Mongoose. Принципи роботи Mongoose: схема – модель – колекція. Mongoose: створення
                            схеми (required, enum, default, unique, match). З'єднання Joi та вбудованої в Mongoose
                            валідації. Методи моделей. Деплой на Heroku.
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
                        <h2 className="font-semibold text-xl">MongoDB Compass</h2>
                        <p>MongoDB Compass — це графічний інтерфейс для перегляду та керування MongoDB. Підключення до
                            бази відбувається через той самий URI. У Compass можна переглядати документи, колекції,
                            писати запити, імпортувати/експортувати дані.</p>
                        <h2 className="font-semibold text-xl">Mongoose — бібліотека для Node.js</h2>
                        <p>Mongoose — це ODM (Object Data Modeling) бібліотека, яка дозволяє працювати з MongoDB у стилі
                            об’єктно-орієнтованого програмування.
                            Принцип роботи Mongoose:
                        <ul>
                            <li>Схема (Schema): опис структури документа (типи даних, валідація)</li>
                            <li>Модель (Model): об'єкт, який надає доступ до бази (створення, пошук, оновлення)</li>
                            <li>Колекція (Collection): зберігає документи певного типу</li>
                        </ul>
                        </p>
                        <h2 className="font-semibold text-xl">Frontend and DataBase</h2>
                        <p>У фронтенді не працюють напряму з MongoDB або Mongoose — це небезпечно. Замість цього:
                        <ul>
                            <li>Фронтенд звертається до бекенд-сервера через HTTP-запити (наприклад, fetch(), axios)
                            </li>
                            <li>Бекенд обробляє ці запити і працює з MongoDB через Mongoose</li>
                        </ul>
                        </p>
                        <p>Фронтенд не знає нічого про базу даних — він просто надсилає дані на сервер, а сервер
                            вирішує, як їх обробити.</p>
                    </div>

            case 3:
                return <div>
                        <img src={assets.lab8_back1} alt=""/>
                        <img src={assets.lab8_back2} alt=""/>
                    </div>
                
            case 4:
                return <div>
                        <img src={assets.lab8_front1} alt=""/>
                        <img src={assets.lab8_front2} alt=""/>
                        <img src={assets.lab8_front3} alt=""/>
                    </div>
            
            case 5:
                return <div>
                        <img src={assets.lab8_db} alt=""/>
                    </div>

            case 6:
                return <div>
                            <h1>Висновок</h1>
                
                            <p>У ході вивчення теми було отримано практичні знання та навички з роботи з базою
                        даних MongoDB у хмарному середовищі MongoDB Atlas, включаючи створення акаунта, проєкту,
                        кластера та налаштування доступу. Також було ознайомлено з інструментом MongoDB Compass, який
                        дозволяє візуально переглядати та редагувати базу даних.

                        Особлива увага приділялася роботі з бібліотекою Mongoose, яка є зручною обгорткою для MongoDB у
                        середовищі Node.js. Було розглянуто ключові принципи: створення схем, моделей та колекцій, що
                        дозволяє структуровано працювати з даними та забезпечити валідацію на рівні коду.

                        Зокрема, було освоєно основні можливості створення схем у Mongoose, з використанням параметрів:

                        required — обов’язковість поля,

                        enum — перелік допустимих значень,

                        default — значення за замовчуванням,

                        unique — унікальність значення,

                        match — валідація регулярними виразами.

                        У результаті мету роботи досягнуто: набуті практичні навички підключення до MongoDB, створення
                        структурованих моделей за допомогою Mongoose, та реалізація збереження й обробки даних
                        відповідно до сучасних стандартів веброзробки.</p>
                    </div>
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 8</h1>
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
export default Laboratorna8
