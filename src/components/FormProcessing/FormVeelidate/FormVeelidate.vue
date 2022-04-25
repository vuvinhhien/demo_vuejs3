<!-- <template>
  <h1>Form Veelidate</h1>
  <form @submit.prevent="submitHandler">
    <div>
      <label for="email">Mail</label>
      <input type="text" id="email" v-model.trim="formInput.email" />
      
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model.trim="formInput.password" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.trim.number="formInput.age" />
    </div>
    <div>
      <label for="message">Message</label><br />
      <textarea
        id="message"
        rows="5"
        v-model.trim="formInput.message"
      ></textarea>
    </div>
    <div>
      <div>
        <label for="sendmail">
          <input
            type="checkbox"
            id="sendmail"
            value="SendMail"
            v-model="formInput.sendMailOptions"
          />
          Send Mail
        </label>
        <label for="sendInfomail">
          <input
            type="checkbox"
            id="sendInfomail"
            value="SendInfoMail"
            v-model="formInput.sendMailOptions"
          />
          Send Infomail
        </label>
      </div>
    </div>
    <div>
      <label for="male">
        <input type="radio" id="male" value="Male" v-model="formInput.gender" />
        Male
      </label>
      <label for="female">
        <input
          type="radio"
          id="female"
          value="Female"
          v-model="formInput.gender"
        />
        Female
      </label>
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
</template> -->

<!-- <script setup lang="ts">
import { InputErrorMessage } from "@/components";
import useFormVeelidate from "./useFormVeelidate";

const { state, data, handlers } = useFormVeelidate();

const { formInput } = state;
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
</style> -->
