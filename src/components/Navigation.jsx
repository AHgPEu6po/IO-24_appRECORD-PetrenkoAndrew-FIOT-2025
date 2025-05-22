import React, {useState } from 'react';
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";


const Navigation = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <ul className='hidden sm:flex gap-5 text-sm'>
                <NavLink to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l1' className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №1</p>
                </NavLink>
                <NavLink to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l2' className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №2</p>
                </NavLink>
                <NavLink to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l3' className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №3</p>
                </NavLink>
                <NavLink to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l4' className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №4</p>
                </NavLink>
                <NavLink to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l5_1' className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №5_1</p>
                </NavLink>
                <NavLink to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l5_2' className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №5_2</p>
                </NavLink>
                <NavLink to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l6' className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №6</p>
                </NavLink>
                <NavLink to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l7' className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №7</p>
                </NavLink>
                <NavLink to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l8' className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №8</p>
                </NavLink>
                <NavLink to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l9' className='flex flex-col items-center gap-1 border-1 rounded-lg p-2'>
                    <p>Лабораторна робота №9</p>
                </NavLink>
            </ul>

            <div className='flex items-center gap-7'>

                <img onClick={() => setVisible(true)} src={assets.menu} className='w-7 cursor-pointer  sm:hidden'
                     alt='Menu'/>
            </div>
            <div
                className={`fixed inset-0 z-50 bg-white transition-transform transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col'>
                    <div onClick={() => setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown} className='h-7 cursor-rotate-180 ' alt="Dropdown"/>
                        <p>Повернутися</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l1'>Лабораторна робота
                        №1</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l2'>Лабораторна робота
                        №2</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l3'>Лабораторна робота
                        №3</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l4'>Лабораторна робота
                        №4</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l5'>Лабораторна робота
                        №5</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l6'>Лабораторна робота
                        №6</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l7'>Лабораторна робота
                        №7</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l8'>Лабораторна робота
                        №8</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/IO-24_appRECORD-PetrenkoAndrew-FIOT-2025/l9'>Лабораторна робота
                        №9</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;