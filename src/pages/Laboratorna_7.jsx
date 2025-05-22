import React, {useState} from 'react'
import { assets } from "../assets/assets.js";

const tasks = [
    { id: 1, title: "Тема, мета ЛР №7, Місце розташування сайту, звіту" },
    { id: 2, title: "Теоретична частина" },
    { id: 3, title: "Реалізація" },
    { id: 4, title: "Висновки" },
];

const Laboratorna7 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // Функція для відображення контенту на основі activeTask
        const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №7, Місце розташування сайту, звіту</p>
                        </div>
    
                        <p>
                            Тема: СТВОРЕННЯ ІНТЕРФЕЙСІВ WEB-ЗАСТОСУВАНЬ З ВИКОРИСТАННЯМ REACT
                        </p>
    
                        <p>
                            Мета: Придбати практичні навички
                            Бібліотека React. Browser DOM і Virtual DOM.Інструменти. JSX. Компоненти. Маршрутизація
                            Структура URL-рядка. Компонент . Компоненти та . URL-параметри. Вкладені маршрути
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
                    <h2 className="font-semibold text-xl">Що таке React?</h2>
                    <p>
                        React — це JavaScript-бібліотека для створення інтерфейсів користувача. Вона дозволяє будувати
                        компоненти — незалежні блоки інтерфейсу, які можна повторно використовувати та комбінувати.
                    </p>

                    <h2 className="font-semibold text-xl">Компоненти</h2>
                    <p>
                        У React інтерфейс складається з компонентів. Кожен компонент — це функція або клас, який повертає JSX —
                        спеціальний синтаксис, схожий на HTML. Компоненти можуть приймати <i>пропси</i> (вхідні параметри) і
                        зберігати власний <i>стан</i>.
                    </p>

                    <h2 className="font-semibold text-xl">Стан і події</h2>
                    <p>
                        Стан (state) визначає внутрішні дані компонента. Зміна стану викликає повторне рендерення. Події, як-от
                        кліки або введення з клавіатури, можуть викликати зміну стану.
                    </p>

                    <h2 className="font-semibold text-xl">React і API</h2>
                    <p>
                        React часто використовується для створення SPA (Single Page Applications), які отримують дані з бекенду
                        через API (наприклад, REST або GraphQL), і динамічно оновлюють інтерфейс без перезавантаження сторінки.
                    </p>
                </div>
            case 3:
                return <div>
                        <img src={assets.lab7_1} alt=""/>
                        <img src={assets.lab7_2} alt=""/>
                    </div>
            case 4:
                return <div>
                            <h1>Висновок</h1>
                
                            <p>У результаті вивчення теми "React - Повний курс по React, Redux і Redux
                        Toolkit" було досягнуто головної мети — здобуття практичних навичок роботи з бібліотекою React.
                        Розглянуто основні концепції, зокрема Browser DOM і Virtual DOM, що дозволило глибше зрозуміти
                        ефективність рендерингу в React.

                        Опановано використання JSX — розширення синтаксису JavaScript, що дозволяє створювати елементи
                        UI у зручному форматі. Значну увагу приділено побудові компонентної архітектури, що є основою
                        для масштабованих і підтримуваних інтерфейсів.

                        Окремо вивчено маршрутизацію, структуру URL-рядків, роботу з URL-параметрами та вкладеними
                        маршрутами, що є критично важливими для побудови SPA (односторінкових додатків).

                        Також розглянуто роботу з Redux і Redux Toolkit — сучасними інструментами для управління станом
                        додатків, що значно спрощують логіку передачі даних між компонентами.

                        Таким чином, курс дав цілісне уявлення про розробку додатків на React та забезпечив ґрунтовну
                        базу для подальшого вдосконалення навичок у фронтенд-розробці.</p>
                    </div>
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 7</h1>
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
export default Laboratorna7
