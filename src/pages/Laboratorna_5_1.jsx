import React, { useState, useEffect } from 'react';
import { assets } from "../assets/assets.js";
import './Laboratorna_5_1.css'
import { swapValues, resizeSquare, doubleValues } from './lab5.js';

const tasks = [
    { id: 1, title: "Тема, мета ЛР №5.1, Місце розташування сайту, звіту" },
    { id: 2, title: "Завдання" },
    { id: 3, title: "Реалізація" },
    { id: 4, title: "Висновки" },
];

const Laboratorna5_1 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        // Task 7: Категорії
        console.log("Task 7")
        const categoriesList = document.querySelectorAll('#categories .item');

        console.log('Number of categories:', categoriesList.length);

        categoriesList.forEach(item => {
            const categoryName = item.querySelector('h2').textContent;
            const elementsCount = item.querySelectorAll('ul li').length;

            console.log('Category:', categoryName);
            console.log('Elements:', elementsCount);
        });
    }, []);

    // Функція для відображення контенту на основі activeTask
    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №5.1, Місце розташування сайту, звіту</p>
                        </div>

                        <p>
                            Тема: КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. THROTTLE. 
                        </p>

                        <p>
                            Мета: Придбати практичні навички роботи з об'єктами. Методи об'єкта.. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT
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
                        <h2 className="font-semibold text-xl">Завдання</h2>
                        <img src={assets.task5_2} alt=""/>
                        <img src={assets.task5_4} alt=""/>
                        <img src={assets.task5_6} alt=""/>
                        <img src={assets.task5_7} alt=""/>
                        <img src={assets.task5_8} alt=""/>
                        <img src={assets.task5_9} alt=""/>
                        <img src={assets.task5_10_1} alt=""/>
                        <img src={assets.task5_10_2} alt=""/>
                    </div>
            case 3:
                return <div class="real main_text hiddenable">
                        <div class="task2">
                            <h2>Завдання 2</h2>
                            <button onClick={swapValues}>SWAP</button>
                            <input type="text" id="input1" placeholder="Перше поле"/>
                            <input type="text" id="input2" placeholder="Друге поле"/>
                        </div>
                        <div class="task4">
                            <h2>Завдання 4</h2>
                            <div id="square"></div>
                            <button onClick={() => resizeSquare(-15)}>Зменшити</button>
                            <button onClick={() => resizeSquare(15)}>Збільшити</button>
                        </div>
                        <div class="task6">
                            <h2>Завдання 6</h2>
                            <ul id="numberList">
                                <li>1</li>
                                <li>4</li>
                                <li>8</li>
                                <li>16</li>
                                <li>20</li>
                                <li>30</li>
                            </ul>
                            <button onClick={doubleValues}>Подвоїти</button>
                        </div>
                        <div class="task7">
                            <h2>Завдання 7</h2>
                            <ul id="categories">
                                <li class="item">
                                    <h2>Animals</h2>
                                    <ul>
                                        <li>Cat</li>
                                        <li>Hamster</li>
                                        <li>Horse</li>
                                        <li>Parrot</li>
                                    </ul>
                                </li>
                                <li class="item">
                                    <h2>Products</h2>
                                    <ul>
                                        <li>Bread</li>
                                        <li>Prasley</li>
                                        <li>Cheese</li>
                                    </ul>
                                </li>
                                <li class="item">
                                    <h2>Technologies</h2>
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Node.js</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="task8">
                            <h2>Завдання 8</h2>
                            <form class="login-form">
                                <label>
                                    Email
                                    <input type="email" name="email" />
                                </label>
                                <label>
                                    Password
                                    <input type="password" name="password" />
                                </label>
                                <button type="submit">Log in</button>
                            </form>
                        </div>
                        <div class="task9">
                            <h2>Завдання 9</h2>
                            <div class="widget">
                                <p>Background color: <span class="color">-</span></p>
                                <button type="button" class="change-color">Change color</button>
                            </div>
                        </div>
                        <div class="task10">
                            <h2>Завдання 10</h2>
                            <div id="controls">
                                <input type="number" min="1" max="100" step="1" />
                                <button type="button" data-create>Create</button>
                                <button type="button" data-destroy>Destroy</button>
                            </div>
                            <div id="boxes"></div>

                        </div>
                    </div>
            case 4:
                return <div>
                            <h1>Висновок</h1>
            
                            <p>У ході виконання практичних завдань було реалізовано кілька прикладів роботи з
                            DOM, подіями та створенням елементів за допомогою JavaScript, що дозволило краще засвоїти основи
                            теми «Класи. Об'єктна модель документа (DOM). Події. Об'єкт події. Делегування подій. Throttle».
                            Ми працювали з подіями типу submit та click, здійснювали перевірку введених даних у формах,
                            динамічно створювали елементи, змінювали стилі та працювали з властивістю event. Також
                            реалізовано очищення і повторне рендерення елементів за допомогою DOM-методів, таких як
                            querySelector, createElement, append, innerHTML. Об’єкт події використовувався для обробки
                            натискань кнопок та отримання даних з інпутів. Було розглянуто концепцію делегування подій як
                            ефективний спосіб керування великою кількістю елементів, при якому обробник подій призначається
                            на спільний контейнер. Також коротко вивчено принцип дії техніки throttle, яка дозволяє обмежити
                            частоту виклику функції, що особливо корисно при обробці подій, які відбуваються дуже часто
                            (наприклад, scroll або resize). Отже, тема має важливе практичне значення для створення
                            інтерактивних інтерфейсів користувача, а вивчені методи є базовими для розробки сучасних
                            динамічних веб-застосунків.</p>
                    </div>
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 5.1</h1>
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
export default Laboratorna5_1
