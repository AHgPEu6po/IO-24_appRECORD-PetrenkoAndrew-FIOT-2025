import { useState, useEffect } from 'react';
import './Laboratorna_5_2.css'

const Task2 = () => {
    const STORAGE_KEY = 'feedback-form-state';
    const [formData, setFormData] = useState({ email: '', message: '' });

    // Завантаження з localStorage
    useEffect(() => {
        const savedData = localStorage.getItem(STORAGE_KEY);
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    // Зберігання у localStorage при зміні
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email.trim() || !formData.message.trim()) {
            alert('Fill please all fields');
            return;
        }

        console.log('Form submitted:', formData);
        setFormData({ email: '', message: '' });
        localStorage.removeItem(STORAGE_KEY);
    };

    return (
        <form className="feedback-form space-y-4" onSubmit={handleSubmit}>
            <label className="block">
                Email
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Type email"
                    className="w-full p-2 border rounded"
                />
            </label>
            <label className="block">
                Message
                <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type area"
                    className="w-full p-2 border rounded"
                />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
            </button>
        </form>
    );
};

export default Task2