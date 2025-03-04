import React, { useState } from 'react';
import {assets} from "../assets/assets.js";

const tasks = [
    { id: 1, title: "Предметне середовище та Бізнес-логіка" },
    { id: 2, title: "Тема, мета, місце розташування" },
    { id: 3, title: "Структура документа" },
    { id: 4, title: "Висновок" },
];

const Laboratorna1 = () => {
    const [activeTask, setActiveTask] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Функція для відображення контенту на основі activeTask
    const renderContent = () => {
        switch (activeTask) {
            case 1:
                return <div>
                    <div className="text-base font-light leading-relaxed mt-5">
                        <div className="mb-4">
                            <p className="font-semibold text-xl">ПРЕДМЕТНЕ СЕРЕДОВИЩЕ</p>
                        </div>
                        <p>WEB-застосунок для доставки їжі — це сучасна інформаційна система, створена для
                            автоматизації та оптимізації процесу замовлення та доставки продуктів харчування. Основною
                            метою
                            застосунку є забезпечення зручного, швидкого та безпечного способу оформлення замовлень,
                            управління
                            товарами та відстеження поставок. Цей сервіс дозволяє значно спростити процес вибору
                            товарів,
                            оформлення доставки та контролю над замовленнями.

                            Користувачі можуть реєструватися в системі та створювати персональні кабінети, де
                            зберігається
                            історія покупок, улюблені товари та налаштування оплати. Вони мають змогу переглядати
                            каталог
                            продуктів, сортувати їх за категоріями, ціною або терміном придатності, а також додавати
                            обрані
                            товари в кошик. Оформлення замовлення здійснюється в кілька кліків, із можливістю вибору
                            способу
                            оплати (онлайн або при отриманні). Користувачі можуть отримувати сповіщення про статус
                            замовлення,
                            змінювати адресу доставки та залишати відгуки після отримання товарів.

                            Адміністративна панель забезпечує управління всіма аспектами роботи сервісу. Адміністратори
                            можуть
                            контролювати наявність товарів у каталозі, оновлювати ціни, додавати акційні пропозиції та
                            відстежувати виконання замовлень. Також система дозволяє керувати користувачами, аналізувати
                            їх
                            активність та відстежувати статистику продажів. Вбудований модуль аналітики допомагає
                            оцінювати
                            динаміку попиту, прогнозувати завантаженість сервісу та оптимізувати процес доставки.

                            Особливу увагу приділено безпеці даних. Усі персональні дані користувачів та адміністрації
                            зберігаються у захищеній базі даних із використанням сучасних алгоритмів шифрування. Доступ
                            до
                            системи можливий лише після автентифікації та авторизації, що забезпечує конфіденційність
                            інформації.

                            Система підтримує можливість масштабування та оновлення функціоналу, що дозволяє додавати
                            нові
                            модулі, такі як програма лояльності, автоматичне формування списків покупок, розумні
                            рекомендації на
                            основі попередніх замовлень та інтеграція з іншими сервісами. Завдяки використанню сучасних
                            технологій WEB-застосунок підвищує ефективність процесу замовлення, скорочує час на
                            оформлення
                            покупок і покращує загальний користувацький досвід.
                        </p>
                        <div className="mb-4 mt-4">
                            <p className="font-semibold text-xl">БІЗНЕС-ЛОГІКА</p>
                        </div>
                        <h2 className="text-lg mt-2">Функціональні вимоги</h2>
                        <ol>
                            <li>Система реєстрації та авторизації користувачів.</li>
                            <li>Персональний кабінет користувача з історією замовлень.</li>
                            <li>Реалізація кошика для замовлень.</li>
                            <li>Інтерактивний пошук товарів.</li>
                            <li>Система обробки платежів (онлайн-оплата та готівка при отриманні).</li>
                            <li>Модуль керування товарами для адміністратора.</li>
                            <li>Система автоматичних сповіщень про статус замовлення.</li>
                        </ol>

                        <h2 className="text-lg mt-2">Нефункціональні вимоги</h2>
                        <ol>
                            <li>Забезпечення високого рівня безпеки персональних даних.</li>
                            <li>Масштабованість для збільшення кількості користувачів.</li>
                            <li>Оптимізація продуктивності для швидкої обробки запитів.</li>
                            <li>Підтримка адаптивного дизайну для мобільних пристроїв.</li>
                            <li>Система резервного копіювання даних.</li>
                            <li>Зручний та інтуїтивно зрозумілий інтерфейс.</li>
                            <li>Можливість інтеграції з іншими сервісами (аналітика, повідомлення).</li>
                        </ol>
                    </div>
                </div>;
            case 2:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">Тема, мета, місце розташування WEB-застосунка та місце
                            звітного HTML-документу</p>
                    </div>

                    <p>
                        Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. GitHub. РОБОТА З РЕПОЗИТОРІЯМИ. ОСНОВНІ
                        ТЕГИ ТА
                        АТРИБУТИ в HTML-ДОКУМЕНТІ.
                    </p>

                    <p>
                        Мета: Придбати практичні навички роботи з GitHub, репозиторіями, HTML-документом, таблицями,
                        зображеннями,
                        посиланнями, списками, формами. Створити шаблон звітного HTML-документом для відображення
                        результатів роботи всіх лабораторних робіт.
                    </p>


                    <ul>
                        <li>
                            Посилання на репозиторій власного WEB-застосунку:<a></a>
                        </li>
                        <li>
                            Посилання на репозиторій на живу сторінку власного WEB-застосунку:<a></a>
                        </li>
                        <li>
                            Посилання на репозиторій звітного HTML-документа:<a></a>
                        </li>
                        <li>
                            Посилання на репозиторій на живу сторінку звітного HTML-документу:<a></a>
                        </li>
                        <li>
                            Посилання на репозиторій з самостійними роботами:<a></a>
                        </li>
                        <li>
                            Посилання на репозиторій живу сторінку з самостійними роботами:<a></a>
                        </li>
                    </ul>
                </div>;
            case 3:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">СТРУКТУРА ДОКУМЕНТА</p>
                    </div>

                    <p>
                        Код для списку:
                    </p>
                    <img src={assets.list_code} alt="1"/>
                    <p>
                        Фото:
                    </p>
                    <img src={assets.list_photo} alt="1"/>
                    <p>
                        Інформація:
                    </p>
                    <p>
                        Тег <code>&lt;ul&gt;</code> (невпорядкований список) використовується для створення списку
                        елементів, де
                        порядок елементів не важливий. Кожен елемент списку визначається за допомогою
                        тегу <code>&lt;li&gt;</code>. Цей тег часто застосовується, коли ви хочете створити список без
                        нумерації.
                        <br/>
                        Тег <code>&lt;ol&gt;</code> (упорядкований список) створює список елементів з чіткою нумерацією
                        або
                        іншими маркерами (наприклад, літерами або римськими цифрами). Як і в <code>&lt;ul&gt;</code>,
                        елементи
                        списку визначаються тегом <code>&lt;li&gt;</code>.
                        <br/>
                        Приклад:
                        <pre><code>&lt;ul&gt;
                            &lt;li&gt;Пункт 1&lt;/li&gt;
                            &lt;li&gt;Пункт 2&lt;/li&gt;
                            &lt;/ul&gt;</code></pre>
                    </p>

                    <p>
                        Код для зображення:
                    </p>
                    <img src={assets.image_code} alt="1"/>
                    <p>
                        Фото:
                    </p>
                    <img src={assets.image_photo} alt="1"/>
                    <p>
                        Інформація:
                    </p>
                    <p>
                        Тег <code>&lt;img&gt;</code> використовується для вставлення зображень на веб-сторінку.
                        Атрибут <code>src</code> визначає джерело зображення (посилання на файл або URL), а
                        атрибут <code>alt</code> надає альтернативний текст, що відображається, якщо зображення не може
                        бути
                        завантажене. Тег <code>&lt;img&gt;</code> є самозакриваючим і не потребує парного тегу.
                        <br/>
                        Для кращої доступності та SEO важливо додавати атрибут <code>alt</code>, що описує вміст
                        зображення.
                        <br/>
                        Приклад:
                        <pre><code>&lt;img src="image.jpg" alt="Опис зображення"&gt;</code></pre>
                    </p>

                    <p>
                        Код для таблиці:
                    </p>
                    <img src={assets.table_code} alt="1"/>
                    <p>
                        Фото:
                    </p>
                    <img src={assets.table_photo} alt="1"/>
                    <p>
                        Інформація:
                    </p>
                    <p>
                        Тег <code>&lt;table&gt;</code> використовується для створення таблиць. Таблиця складається з
                        декількох
                        елементів:
                        <ul>
                            <li><code>&lt;tr&gt;</code> — тег для рядка таблиці.</li>
                            <li><code>&lt;td&gt;</code> — тег для клітинки таблиці.</li>
                            <li><code>&lt;th&gt;</code> — тег для заголовка клітинки таблиці, зазвичай використовується
                                для
                                визначення заголовків стовпців або рядків.
                            </li>
                        </ul>
                        Таблиці є дуже корисними для представлення структурованих даних у вигляді рядків та стовпців.
                        <br/>
                        Приклад:
                        <pre><code>&lt;table&gt;
                            &lt;tr&gt;
                            &lt;th&gt;Заголовок 1&lt;/th&gt;
                            &lt;th&gt;Заголовок 2&lt;/th&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                            &lt;td&gt;Дані 1&lt;/td&gt;
                            &lt;td&gt;Дані 2&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;/table&gt;</code></pre>
                    </p>
                </div>;
            case 4:
                return <div>
                    <div className="mb-4 mt-4">
                        <p className="font-semibold text-xl">ВИСНОВОК</p>
                    </div>
                    <p>У ході виконання лабораторної роботи я набув практичних
                        навичок роботи з HTML, GitHub та Figma. Було детально розглянуто структуру HTML-документа,
                        основні теги
                        та
                        їхні атрибути, а також принципи побудови веб-сторінок. </p> <p>На початковому етапі я визначив
                    предметну
                    галузь майбутнього веб-застосунку, розробив його опис, сформував бізнес-логіку та визначив основні
                    функціональні та нефункціональні вимоги. Це дало змогу зрозуміти, як правильно підходити до
                    проєктування
                    веб-застосунку, розподіляти його функціонал та визначати ключові компоненти.</p> <p>Далі я
                    зареєструвався у
                    Figma та виконав серію навчальних уроків для ознайомлення з інструментом. Після цього я створив
                    макет
                    головної сторінки майбутнього веб-застосунку, що дозволило мені детально продумати візуальну частину
                    інтерфейсу. Це стало важливим етапом у формуванні структури майбутньої веб-сторінки.</p>
                    <p>Наступним кроком
                        була робота з GitHub: я встановив Git, зареєстрував обліковий запис на GitHub, налаштував GitHub
                        Desktop та
                        створив репозиторій для зберігання файлів проєкту. Було виконано початкове налаштування
                        репозиторію,
                        створено живе посилання на веб-застосунок та виконано клонування репозиторію на локальний
                        комп’ютер для
                        подальшої роботи.</p> <p>Після налаштування середовища я приступив до розробки HTML-коду
                    головної сторінки
                    веб-застосунку, орієнтуючись на макет, створений у Figma. Головна сторінка містить:</p>
                    <ul>
                        <li>заголовки різних рівнів для логічної структуризації інформації;</li>
                        <li>зображення для візуального оформлення сторінки;</li>
                        <li>таблиці для організації даних;</li>
                        <li>списки (нумеровані та марковані) для структурованого відображення інформації;</li>
                        <li>форми для отримання інформації від користувачів;</li>
                        <li>посилання на сторінку з описом предметної галузі та бізнес-логіки.</li>
                    </ul>
                    <p>Крім того, я створив окремий HTML-файл, у якому розмістив опис предметної галузі та бізнес-логіки
                        веб-застосунку.</p> <p>Заключним етапом було виконання комітів у GitHub, налаштування живого
                    посилання
                    на хостинг проєкту та перевірка його працездатності. Також я створив репозиторії для самостійних
                    робіт і
                    звітного HTML-документа, у якому представив структуру головної сторінки, HTML-код таблиці, списків
                    та
                    зображень, теоретичну інформацію про їхні теги та атрибути, а також висновки.</p> <p>Виконання цієї
                    лабораторної роботи дозволило мені засвоїти основи верстки веб-сторінок, навчитися працювати з
                    GitHub,
                    розібратися з процесом макетування у Figma, а також здобути навички організації коду та роботи з
                    репозиторіями. Отримані знання та практичні навички стануть важливим фундаментом для подальшого
                    вивчення
                    веб-розробки та реалізації складніших проєктів.</p></div>;
            default:
                return <div>Виберіть розділ</div>;
        }
    };

    return (
        <div className="min-h-screen">
            <h1 className="text-4xl font-bold text-center mt-8 mb-8">Лабораторна робота 1</h1>
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

                {/* Toggle Sidebar Button */}
                <button
                    className="lg:hidden p-2 border border-gray-300 rounded bg-white mb-4"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    {sidebarOpen ? 'Закрити меню' : 'Відкрити меню'}
                </button>

                {/* Content */}
                <div className="w-full grid grid-cols-1 gap-4 gap-y-6">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Laboratorna1;