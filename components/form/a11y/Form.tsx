import React from 'react';
import css from './form.module.css';

export const A11yForm = () => {
  return (
    <form className={css.form}>
      <fieldset>
        <legend>Personal Information</legend>
        <label className={css.label}>
          <span>Name</span>
          <input type="text" placeholder="name" autoComplete="name" />
        </label>
        <label className={css.label}>
          <span>Address</span>
          <input type="text" placeholder="Address" autoComplete="address" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Food preferences</legend>
        <label className={css.label}>
          <span>Pizza</span>
          <input type="radio" name="food" value="pizza" />
        </label>
        <label className={css.label}>
          <span>Salad</span>
          <input type="radio" name="food" value="salad" />
        </label>
        <label className={css.label}>
          <span>Pasta</span>
          <input type="radio" name="food" value="pasta" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Toppings</legend>
        <label className={css.label}>
          <span>Cheese</span>
          <input type="checkbox" name="food" value="cheese" />
        </label>
        <label className={css.label}>
          <span>Sausage</span>
          <input type="checkbox" name="food" value="sausage" />
        </label>
      </fieldset>
      <button type='submit'>Submit</button>
    </form>
  );
};
