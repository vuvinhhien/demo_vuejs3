<template>
  <h1>Form Vuelidate</h1>
  <form @submit.prevent="submitHandler">
    <div>
      <label for="email">Mail</label>
      <input type="text" id="email" v-model.trim="v$.email.$model" />
      <InputErrorMessage :errors="v$.email.$errors" />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model.trim="formInput.password"
        @blur="v$.password.$touch"
      />
      <InputErrorMessage :errors="v$.password.$errors" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.trim.number="v$.age.$model" />
      <InputErrorMessage :errors="v$.age.$errors" />
    </div>
    <div>
      <label for="message">Message</label><br />
      <textarea
        id="message"
        rows="5"
        v-model.trim="v$.message.$model"
      ></textarea>
      <InputErrorMessage :errors="v$.message.$errors" />
    </div>
    <div>
      <div>
        <label for="sendmail">
          <input
            type="checkbox"
            id="sendmail"
            value="SendMail"
            v-model="v$.sendMailOptions.$model"
          />
          Send Mail
          <InputErrorMessage :errors="v$.sendMailOptions.$errors" />
        </label>
        <label for="sendInfomail">
          <input
            type="checkbox"
            id="sendInfomail"
            value="SendInfoMail"
            v-model="v$.sendMailOptions.$model"
          />
          Send Infomail
          <InputErrorMessage :errors="v$.sendMailOptions.$errors" />
        </label>
      </div>
    </div>
    <div>
      <label for="male">
        <input type="radio" id="male" value="Male" v-model="v$.gender.$model" />
        Male
      </label>
      <InputErrorMessage :errors="v$.gender.$errors" />
      <label for="female">
        <input
          type="radio"
          id="female"
          value="Female"
          v-model="v$.gender.$model"
        />
        Female
      </label>
      <InputErrorMessage :errors="v$.gender.$errors" />
    </div>
    <div>
      <label for="priority">Priority</label>
      <select id="priority" v-model="formInput.selectedPriority">
        <option v-for="option in priorities">{{ option }}</option>
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>
  <hr />
  <div class="row">
    <div>
      <div>
        <div>
          <h4>Your Data</h4>
        </div>
        <div>
          <p>Mail: {{ formInput.email }}</p>
          <p>Password: {{ formInput.password }}</p>
          <p>Age: {{ formInput.age }}</p>
          <p>Message: {{ formInput.message }}</p>
          <p><strong>Send Mail?</strong></p>
          <ul>
            <li v-for="option in formInput.sendMailOptions" :key="option">
              {{ option }}
            </li>
          </ul>
          <p>Gender: {{ formInput.gender }}</p>
          <p>Priority: {{ formInput.selectedPriority }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InputErrorMessage } from "@/components";
import useFormVuelidate from "./useFormVuelidate";

const { state, data, handlers } = useFormVuelidate();

const { formInput, v$ } = state;
const { priorities } = data;
const { submitHandler } = handlers;
</script>

<style lang="scss" scoped>
label {
  display: block;
  margin: 0.5rem 0;
  font-weight: bold;
}
input {
  padding: 0.5rem 1rem;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  font: inherit;
}
</style>
