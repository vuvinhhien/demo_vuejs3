<template>
  <h1>Form Veelidate</h1>
  <form @submit="submitHandler">
    <div>
      <label for="email">Mail</label>
      <input type="text" id="email" v-model.trim="formInput.email.value" />
      <InputErrorMessageVee :error-message="formInput.errors.value.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model.trim="formInput.password.value"
      />
      <InputErrorMessageVee :error-message="formInput.errors.value.password" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.trim.number="formInput.age.value" />
      <InputErrorMessageVee :error-message="formInput.errors.value.age" />
    </div>
    <div>
      <label for="message">Message</label><br />
      <textarea
        id="message"
        rows="5"
        v-model.trim="formInput.message.value"
      ></textarea>
      <InputErrorMessageVee :error-message="formInput.errors.value.message" />
    </div>
    <div>
      <div>
        <label for="sendmail">
          <input
            type="checkbox"
            id="sendmail"
            name="sendMailOptions"
            value="sendMail"
            v-model="formInput.sendMail.value"
          />
          Send Mail
        </label>
        <label for="sendInfomail">
          <input
            type="checkbox"
            id="sendInfomail"
            name="sendMailOptions"
            value="sendInfoMail"
            v-model="formInput.sendInfoMail.value"
          />
          Send Infomail
        </label>
      </div>
    </div>
    <div>
      <label for="male">
        <input
          type="radio"
          id="male"
          value="Male"
          v-model="formInput.gender.value"
        />
        Male
      </label>
      <label for="female">
        <input
          type="radio"
          id="female"
          value="Female"
          v-model="formInput.gender.value"
        />
        Female
      </label>
      <InputErrorMessageVee :error-message="formInput.errors.value.gender" />
    </div>
    <div>
      <label for="priority">Priority</label>
      <select id="priority" v-model="formInput.selectedPriority.value">
        <option v-for="option in priorities">{{ option }}</option>
      </select>
      <InputErrorMessageVee
        :error-message="formInput.errors.value.selectedPriority"
      />
    </div>
    <button :disabled="isSubmitting" type="submit">Submit</button>
  </form>
  <hr />
  <div class="row">
    <div>
      <div>
        <div>
          <h4>Your Data</h4>
        </div>
        <div>
          <p>Mail: {{ formInput.email.value }}</p>
          <p>Password: {{ formInput.password.value }}</p>
          <p>Age: {{ formInput.age.value }}</p>
          <p>Message: {{ formInput.message.value }}</p>
          <p><strong>Send Mail?</strong></p>
          <!-- <ul>
            <li v-if="formInput.sendMail.value">SendMail</li>
            <li v-if="formInput.sendInfoMail.value">SendInfoMail</li>
          </ul> -->

          <p>Gender: {{ formInput.gender.value }}</p>
          <p>Priority: {{ formInput.selectedPriority.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InputErrorMessageVee } from "@/components";
import useFormVeelidate from "./useFormVeelidate";

const { state, data, handlers } = useFormVeelidate();

const { formInput, isSubmitting } = state;
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
