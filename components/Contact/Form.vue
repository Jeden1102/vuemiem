<template>
  <div class="flex flex-col gap-8 md:flex-row">
    <div class="flex-1">
      <Icon
        name="material-symbols:stacked-email-outline"
        size="48"
        class="text-primary"
        data-aos="fade-up"
      />
      <p
        class="my-4 mt-7 font-kumbh text-2xl font-normal lg:text-3xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Get in touch
      </p>
      <p data-aos="fade-up" data-aos-delay="150">opis</p>
    </div>
    <form @submit="onSubmit" class="flex flex-1 flex-col gap-4">
      <UiInput
        name="email"
        type="email"
        label="E-mail"
        placeholder="jan-kowalski@gmail.com"
        required
        :disabled="isLoading"
      />
      <UiInput
        name="content"
        type="textarea"
        label="Wiadomość"
        placeholder="Hej, piszę z zapytaniem..."
        required
        :disabled="isLoading"
      />

      <UiButton :disabled="isLoading">
        <span v-if="isLoading">Wysyłanie...</span>
        <span v-else>Wyślij</span>
      </UiButton>
      <p v-if="successMessage" class="mt-2 text-green-500">
        {{ successMessage }}
      </p>
      <p v-if="errorMessage" class="mt-2 text-red-500">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";

const mail = useMail();

const messages = {
  required: "Pole wymagane",
  email: "Pole musi zawierać poprawny adres e-mail",
};

const { handleSubmit, resetForm } = useForm({
  validationSchema: yup.object({
    content: yup
      .string()
      .required(messages.required)
      .max(1024, "Maksymalnie 1024 znaki"),
    email: yup.string().required(messages.required).email(messages.email),
  }),
});

const isLoading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  try {
    await mail.send({
      from: values.email,
      subject: `Nowa wiadomość z vuemiem od ${values.email}`,
      text: values.content,
    });
    successMessage.value = "Wiadomość została wysłana pomyślnie!";
    resetForm();
  } catch (error) {
    errorMessage.value =
      "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.";
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});
</script>
