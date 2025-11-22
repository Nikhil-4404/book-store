import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NewBookPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', author: '', price: '', category: '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSaving(true); setError('');
    try {
      await axios.post('/api/books', { ...form, price: Number(form.price) });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating book');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1>New Book</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: '0.5rem', maxWidth: 400 }}>
        <input required name="title" placeholder="Title" value={form.title} onChange={onChange} />
        <input required name="author" placeholder="Author" value={form.author} onChange={onChange} />
        <input required name="price" type="number" step="0.01" placeholder="Price" value={form.price} onChange={onChange} />
        <input name="category" placeholder="Category" value={form.category} onChange={onChange} />
        <button disabled={saving}>{saving ? 'Saving...' : 'Create'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
