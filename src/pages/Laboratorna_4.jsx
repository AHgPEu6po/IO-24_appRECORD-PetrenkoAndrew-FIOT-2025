import React, { useState } from 'react';
import { assets } from "../assets/assets.js";
import './Laboratorna_3.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const tasks = [
    { id: 1, title: "Тема, мета ЛР №4, Місце розташування сайту, звіту" },
    { id: 2, title: "Завдання" },
    { id: 3, title: "Десктопна версія" },
    { id: 4, title: "Планшетна версія" },
    { id: 5, title: "Мобільна версія" },
    { id: 6, title: "Висновки" },
];

const Laboratorna4 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Функція для відображення контенту на основі activeTask
    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №4, Місце розташування сайту, звіту</p>
                        </div>

                        <p>
                            Тема: АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT.
                            СТРАТЕГІЯ MOBILE FIRST. 

                        </p>

                        <p>
                            Мета: Адаптивна верстка. Медіа-запити. Медіа-типи.
                            Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.
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
                        <p>1. У звітному HTML-документі розмістити тему та постановку задачі лабораторної роботи №4.</p>
            
                        <p>2. Використовуючи медіа-запити та CSS-правила, для вибраних вами брейкпоінтів, виконати адаптивну верстку для:</p>
                        <ul>
                            <li>Десктопної версії</li>
                            <li>Планшетної версії</li>
                            <li>Мобільної версії</li>
                        </ul>
            
                        <p>3. У звітному HTML-документі привести пояснення створення десктопної, планшетної та мобільної версії.</p>
            
                        <p>4. В процесі розробки адаптивної верстки, застосувати логічні оператори.</p>
            
                        <p>5. Оформлення звітного HTML-документа лабораторної роботи №5 виконати на свій розсуд.</p>
                    </div>
            case 3:
                return <div>
                        <p>Декстопна</p>
                        <img src={assets.dekstop} alt="Dekstop"/>
                        <p>Основна навігація представлена у вигляді категорій страв з відповідними іконками.</p>
                        <p>Блок із найсмачнішими стравами займає всю ширину та містить горизонтальний список карток з їжею.</p>
                        <p>Картки страв мають кнопки для додавання страви до кошика та можливість додати до улюблених.</p>
                    </div>
            case 4:
                return <div>
                        <p>Планшетна</p>
                        <img src={assets.tablet} alt="Tablet"/>
                        <p>Зображення страв адаптуються (w-full h-full sm:max-w-72) і можуть розташовуватися у сітці.</p>
                        <p>Текстовий блок (sm:mx-0 mt-4 sm:mt-0) вирівняний для збереження відступів і гарного відображення контенту.</p>
                        <p>Категорії страв представлені у вигляді горизонтального списку з іконками.</p>
                        <p>Блок із найсмачнішими стравами займає всю доступну ширину, картки розташовані у двох колонках.</p>
                        <p>Картки страв мають кнопки для додавання страви до кошика та можливість додати до улюблених.</p>
                    </div>
            case 5:
                return <div>
                        <p>Телефонна</p>
                        <img src={assets.smartphone} alt="Smartphone"/>
                        <img src={assets.smartphone_1} alt="Smartphone"/>
                        <p>Фото страв (w-full) і текстовий блок (flex-col) розташовані у вертикальному порядку.</p>
                        <p>Відступи між картками зменшені (gap-3 mx-2), щоб вони компактно розміщувалися на сторінці.</p>
                        <p>Список категорій страв представлений горизонтально і підтримує прокручування (overflow-x-scroll), 
                            а його елементи (min-w-16) мають мінімальну ширину.</p>
                        <p>Картки страв розташовані в одному стовпці, адаптуючись до доступного простору.</p>
                        <p>Кнопка додавання до кошика залишається зручною для натискання, особливо на сенсорних екранах.</p>
                    </div>
            case 6:
                return <div>
                            <h1>Висновок</h1>
            
                            <p>У ході виконання лабораторної роботи №4 було розглянуто та застосовано основні принципи адаптивної
                                верстки, зокрема: використання медіа-запитів, метатега viewport та стратегії Mobile First.</p>
            
                            <p>Було створено три версії веб-сторінки:</p>
                            <ul>
                                <li><strong>Десктопну</strong>, яка оптимізована для екранів великої ширини.</li>
                                <li><strong>Планшетну</strong>, що адаптується до середніх розмірів екранів.</li>
                                <li><strong>Мобільну</strong>, яка має спрощене відображення для зручності користувачів смартфонів.
                                </li>
                            </ul>
            
                            <p>Також були використані логічні оператори в медіа-запитах для більш гнучкого керування стилями.</p>
            
                            <p>В результаті виконання роботи було здобуто практичні навички створення адаптивних інтерфейсів, що
                                дозволяють веб-сторінці коректно відображатися на різних пристроях, покращуючи досвід
                                користувачів.</p>
                    </div>
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 4</h1>
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
}; 
export default Laboratorna4;