import React, { useState } from 'react';
import { assets } from "../assets/assets.js";
import './Laboratorna_3.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const tasks = [
    { id: 1, title: "Тема, мета ЛР №3, Місце розташування сайту, звіту" },
    { id: 2, title: "Завдання №1 Зовнішній вигляд макету. Код макету" },
    { id: 3, title: "Завдання №2" },
    { id: 4, title: "Фіксована таблична верстка" },
    { id: 5, title: "Гумова таблична верстка" },
    { id: 6, title: "Фіксована блокова верстка" },
    { id: 7, title: "Гумова блокова верстка" },
    { id: 8, title: "Завдання №3 FLEXBOX" },
    { id: 9, title: "Зовнішній вигляд сторінки" },
    { id: 10, title: "HTML код" },
    { id: 11, title: "CSS-код сторінки" },
    { id: 12, title: "Висновки" },
];

const Laboratorna3 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Функція для відображення контенту на основі activeTask
    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">Тема, мета ЛР №3, Місце розташування сайту, звіту</p>
                        </div>

                        <p>
                            Тема: ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА. ВЕРСТКА ЗАСОБАМИ
                            CSS та FLEXBOX.

                        </p>

                        <p>
                            Мета: придбати практичні навички роботи верстки сторінок
                            засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів
                            веб-сторінок
                            придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
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
                    <div><p> код</p>
                        <img src={assets.main_1} alt="Фото макета" />
                        <img src={assets.main_2} alt="Фото макета" />
                        <img src={assets.main_3} alt="Фото макета" />
                        <img src={assets.main_4} alt="Фото макета" />
                    </div>
                </div>;
            case 3:
                return <div>
                    <p>Засобами HTML та CSS виконати Завдання №2 у звітному HTML-документі , в саме:</p>
                    <p>Розмітку за допомогою таблиці (номер варіанта – остання цифра у списку групи)</p>
                    <p>Фіксована таблична верстка</p>
                    <p>Гумова таблична верстка</p>
                    <p>Розмітку за допомогою блоків (плаваючих елементів) (номер варіанта – остання цифра у списку групи +
                        1)</p>
                    <p>Фіксована блокова верстка</p>
                    <p>Гумова блокова верстка</p>
                </div>;
            case 4:
                return <div>
                    <p>Варіант 2</p>
                    <img src={assets.variant_lab3} alt="Варіант" />
                    <table className='border-2'>
                        <thead className='border-2'>
                            <tr>
                                <th colSpan="3" className="border-2 bg-yellow-300">
                                    <div className="flex items-center justify-between p-2">
                                        <div className="w-36 h-8 border-2 bg-white border-black"></div>
                                        <p className="mr-12 font-bold text-2xl">1</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='border-2'>
                            <tr>
                                <td rowSpan="3" className='w-24 border-2 bg-blue-500'>
                                    <p className="ml-10 mb-40 font-bold text-2xl">2</p>
                                </td>
                                <td colSpan="2">
                                    <div className="w-64 h-12 bg-red-500 border-2 ml-4 mr-4 mt-4 border-black text-center"></div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="2">
                                    <div className="w-32 h-64 border-2 ml-4 mt-4 mb-4 border-gray-500 text-center">
                                        <p className='mt-14 font-bold text-2xl'>3</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="2">
                                    <div className="w-24 h-64 bg-blue-500 border-2 mt-4 mb-4 border-black text-center">
                                        <p className='mt-14 font-bold text-2xl'>4</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot className='border-2'>
                            <tr>
                                <td colSpan="3" className='border-2 bg-yellow-300 h-12'>
                                    <p className='ml-10 font-bold text-xl'>5</p>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>;
            case 5:
                return <div>
                    <p className="text-lg font-semibold mb-2">Варіант 2</p>
                    <img src={assets.variant_lab3} alt="Варіант" />

                    <table className="w-full border-2 border-black">
                        <thead className="border-2">
                            <tr>
                                <th colSpan="3" className="border-2 bg-yellow-300 p-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="w-1/4 h-8 border-2 bg-white border-black"></div>
                                        <p className="font-bold text-2xl">1</p>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="border-2">
                            <tr>
                                <td rowSpan="3" className="w-1/5 border-2 bg-blue-500">
                                    <p className="text-center font-bold text-2xl py-10">2</p>
                                </td>
                                <td colSpan="2" className="p-2">
                                    <div className="w-full h-12 bg-red-500 border-2 border-black"></div>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="2" className="p-2">
                                    <div className="h-64 border-2 border-gray-500 flex items-center justify-center">
                                        <p className="font-bold text-2xl">3</p>
                                    </div>
                                </td>
                                <td rowSpan="2" className="p-2">
                                    <div className="h-64 bg-blue-500 border-2 border-black flex items-center justify-center">
                                        <p className="font-bold text-2xl">4</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                        <tfoot className="border-2">
                            <tr>
                                <td colSpan="3" className="border-2 bg-yellow-300 h-12 text-left px-4">
                                    <p className="font-bold text-xl">5</p>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>;
            case 6:
                return <div className="flex flex-col items-center p-4">
                    <p className="text-xl font-bold">Варіант 2</p>
                    <img src={assets.variant_2_lab3} alt="Варіант" className="mb-4" />
                    <div className='border-2 border-black'>
                        <div className="w-96 bg-yellow-300 flex justify-between items-center p-2 border-b-2 border-black">
                            <div className="w-36 h-8 border-2 bg-white border-black"></div>
                            <p className="font-bold text-2xl">1</p>
                        </div>

                        <div className="flex w-96">
                            <div className="w-24 bg-blue-500 border-r-2 border-black flex justify-center items-center">
                                <p className="font-bold text-2xl">2</p>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div
                                    className="w-60 h-12 bg-red-500 border-2 border-black my-4 mx-4 flex justify-center items-center"></div>
                                <div className="flex">
                                    <div className="w-32 h-64 border-t-2 border-r-2 border-l-2 border-gray-500 flex flex-col items-center mx-4 my-4">
                                        <p className="font-bold text-2xl">3</p>
                                        <div className="w-32 h-12 border-2 border-black bg-red-500 mt-auto"></div>
                                    </div>
                                    <div
                                        className="w-24 h-64 bg-blue-500 border-2 border-black flex justify-center items-center my-4">
                                        <p className="font-bold text-2xl">4</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-96 h-12 bg-yellow-300 border-t-2 border-black flex items-center">
                            <p className="ml-10 font-bold text-xl">5</p>
                        </div>
                    </div>
                </div>;
            case 7:
                return <div className="flex flex-col items-center p-4">
                    <p className="text-xl font-bold">Варіант 2</p>
                    <img src={assets.variant_2_lab3} alt="Варіант" className="mb-4 max-w-full h-auto" />
                    <div className='border-2 border-black w-full max-w-3xl'>
                        <div className="w-full bg-yellow-300 flex justify-between items-center p-2 border-b-2 border-black">
                            <div className="w-1/3 h-8 border-2 bg-white border-black"></div>
                            <p className="font-bold text-2xl">1</p>
                        </div>

                        <div className="flex w-full">
                            <div className="w-1/4 bg-blue-500 border-r-2 border-black flex justify-center items-center">
                                <p className="font-bold text-2xl">2</p>
                            </div>
                            <div className="flex-1 flex flex-col">
                                <div className="w-0.8 h-12 bg-red-500 border-2 border-black my-4 mx-4 flex justify-center items-center"></div>
                                <div className="flex flex-wrap">
                                    <div
                                        className="w-1/2 min-w-[80px] flex-1 flex flex-col h-64 items-center mx-4 my-4 border border-gray-500">
                                        <p className="font-bold text-2xl">3</p>
                                        <div className="w-full h-12 border-2 border-black bg-red-500 mt-auto"></div>
                                    </div>

                                    <div
                                        className="flex-1 min-w-[80px] sm: ml-4 h-64 bg-blue-500 border-2 border-black flex justify-center items-center my-4 mr-4">
                                        <p className="font-bold text-2xl">4</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-12 bg-yellow-300 border-t-2 border-black flex items-center">
                            <p className="ml-10 font-bold text-xl">5</p>
                        </div>
                    </div>
                </div>;
            case 8:
                return <div>
                    <p>
                        Кожному студенту виконати свій номер варіанта Завдання №3, за технологією FLEXBOX та засобами CSS.
                        Номер варіанта відповідає останній цифрі студента у списку групи. Наприклад, Студент 18 за списком –
                        буде виконувати 8 варіант.

                        У звітному HTML-документі розмістити скріншот сторінки, яка була виконана технологією FLEXBOX.
                        У звітному HTML-документі розмістити HTML- код та CSS-код сторінки, яка була виконана технологією
                        FLEXBOX.
                        Вміти пояснити викладачу особливості вашого макету.

                    </p>
                </div>
            case 9:
                return <div>
                    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                        <div className="heading">
                            <h1>Професія Python-розробник</h1>
                        </div>
                        <div className="navbar">
                            <a href="#">Портфоліо для старту кар&#39;єри</a>
                            <a href="#">Навчання на реальних кейсах</a>
                            <a href="#">Заробіток після 6 місяців навчання</a>
                            <a href="#">Можна працювати віддалено</a>
                        </div>
                        <div className="second_heading">
                            <h1>Як проходить навчання</h1>
                        </div>
                        <div className="row">
                            <div className="card">
                                <div className="card-body">
                                    <a href="#" className="btn">1</a>
                                    <p>Дивіться відеолекції</p>
                                    <p className='text-sm'>Якісні відео з зрозумілим поясненням теорії</p>
                                </div>
                                <div className="card-header flex justify-center items-center">
                                    <img alt='mistake' className="w-64 h-auto rounded" />
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <a href="#" className="btn">2</a>
                                    <p>Робите завдання і відправляєте на перевірку</p>
                                    <p className='text-sm'>Поспішати не треба, обирайте зручний режим навчання</p>
                                </div>
                                <div className="card-header flex justify-center items-center">
                                    <img alt='mistake' className="w-64 h-auto rounded" />
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <a href="#" className="btn">3</a>
                                    <p>Чи отримуєте розбір Вашої роботи</p>
                                    <p className='text-sm'>Ваш куратор розповість про помилки і про те, як їх виправити</p>
                                </div>
                                <div className="card-header flex justify-center items-center">
                                    <img alt='mistake' className="w-64 h-auto rounded" />
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <a href="#" className="btn">4</a>
                                    <p>Чи працюєте над помилками</p>
                                    <p className='text-sm'>Проходьте перевірку ще раз, щоб переконатися, що в цей раз все
                                        правильно</p>
                                </div>
                                <div className="card-header flex justify-center items-center">
                                    <img alt='mistake' className="w-64 h-auto rounded" />
                                </div>
                            </div>
                        </div>
                        <div className="second_heading">
                            <h1>Рівні навчання</h1>
                        </div>
                        <Carousel>
                            <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                                <img className="w-auto max-w-xs rounded" />
                                <div className="flex flex-col space-y-2 sm:ml-4">
                                    <p className="text-lg text-left">Перший рівень: чітка і зрозуміла теорія</p>
                                    <p className="text-sm text-gray-600 text-left">За 4 місяці вам необхідно буде пройти 16 тем.
                                        Ви самостійно
                                        вивчите базові навички, з якими зможете створювати справжні проєкти. Ви створите
                                        дипломний
                                        проєкт – двигок блогу в веб-інтерфейсі. Захист проєкту проходить у відкритому режимі –
                                        на
                                        нашому майданчику або по відеозв’язку.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                                <img className="w-auto max-w-xs rounded" />
                                <div className="flex flex-col space-y-2 sm:ml-4">
                                    <p className="text-lg text-left">Другий рівень: інтенсивна практика</p>
                                    <p className="text-sm text-gray-600 text-left">Під керівництвом наставника ви в складі
                                        команди створите
                                        власну соціальну мережу. Фактично ця частина програми прирівнюється до стажування. Вам
                                        видадуть ТЗ і дизайн проєкту. Ви працюєте, через які 8 місяців, у максимально наближеній
                                        до
                                        бойових умов досвіді. Саме так створюється комерційне програмне забезпечення в
                                        фірмах-роботодавцях.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:space-x-4">
                                <img className="w-auto max-w-xs rounded" />
                                <div className="flex flex-col space-y-2 sm:ml-4">
                                    <p className="text-lg text-left">Третій рівень: інтенсивна практика</p>
                                    <p className="text-sm text-gray-600 text-left">Additional information about Mistake</p>
                                </div>
                            </div>
                        </Carousel>
                        <footer className="footer">
                            <div className="container">
                                <div className="row">
                                    <div className="footer-col">
                                        <h4>company</h4>
                                        <ul>
                                            <li><a href="#">about us</a></li>
                                            <li><a href="#">our services</a></li>
                                            <li><a href="#">privacy policy</a></li>
                                            <li><a href="#">affiliate program</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-col">
                                        <h4>get help</h4>
                                        <ul>
                                            <li><a href="#">FAQ</a></li>
                                        </ul>
                                    </div>
                                    <div className="footer-col">
                                        <h4>Social medias</h4>
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            case 10:
                return <div>
                    <div>
                        <div><p>HTML код</p>
                            <img src={assets.html_1} alt="HTML" />
                            <img src={assets.html_2} alt="HTML" />
                            <img src={assets.html_3} alt="HTML" />
                            <img src={assets.html_4} alt="HTML" />
                        </div>
                    </div>
                </div>
            case 11:
                return <div>
                    <div>
                        <div><p>CSS код</p>
                            <img src={assets.css_1} alt="CSS" />
                            <img src={assets.css_2} alt="CSS" />
                            <img src={assets.css_3} alt="CSS" />
                        </div>
                    </div>
                </div>;
            case 12:
                return <div>
                    <h1>Висновки</h1>
                    <p>У ході виконання лабораторної роботи ми розглянули різні методи верстки веб-сторінок, включаючи табличну
                        верстку, блокову верстку з плаваючими елементами, а також сучасний підхід з використанням CSS
                        Flexbox.</p>

                    <h2>1. Таблична верстка</h2>
                    <ul>
                        <li><strong>Переваги:</strong> проста у використанні для створення структурованих макетів, добре
                            підтримується всіма браузерами.
                        </li>
                        <li><strong>Недоліки:</strong> обмежена гнучкість, складність адаптації під мобільні пристрої, зайвий
                            HTML-код, що ускладнює підтримку.
                        </li>
                    </ul>

                    <h2>2. Блокова верстка з плаваючими елементами</h2>
                    <ul>
                        <li><strong>Переваги:</strong> гнучкість у розташуванні елементів, можливість створювати складні макети.
                        </li>
                        <li><strong>Недоліки:</strong> складність у вирівнюванні, проблеми з висотою батьківських контейнерів,
                            необхідність використання clearfix.
                        </li>
                    </ul>

                    <h2>3. Flexbox-верстка</h2>
                    <ul>
                        <li><strong>Переваги:</strong> простота та зручність у створенні адаптивних макетів, ефективне
                            управління розташуванням елементів, рівномірний розподіл простору.
                        </li>
                        <li><strong>Недоліки:</strong> складність у розумінні для новачків, можливі проблеми з підтримкою старих
                            браузерів.
                        </li>
                    </ul>

                    <p>Зіставивши ці підходи, можна зробити висновок, що таблична верстка є застарілою і не підходить для
                        сучасної розробки. Блокова верстка на основі плаваючих елементів надає більше можливостей, але має свої
                        недоліки. Найкращим вибором для створення сучасних адаптивних веб-сторінок є Flexbox, який забезпечує
                        зручну та ефективну організацію контенту.</p>

                    <p><strong>Таким чином, використання Flexbox є оптимальним для сучасної веб-розробки, оскільки воно дозволяє
                        легко керувати макетом, робити його адаптивним і зменшувати складність коду.</strong></p>
                </div>
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 3</h1>
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
}; 3
export default Laboratorna3;