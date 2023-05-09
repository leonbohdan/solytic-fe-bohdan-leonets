<script lang="ts" setup>
defineProps<{
  modelValue?: boolean;
  title?: string;
  bodyText?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const closeDialog = () => {
  emit("update:modelValue", false);
};
</script>

<template>
  <div
    v-if="modelValue"
    class="min-w-screen relative flex min-h-screen flex-col items-center justify-center bg-white pt-4"
  >
    <div class="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"></div>

    <div class="fixed overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="p-4 sm:p-10 text-center overflow-y-auto">
            <h3 class="mb-2 text-2xl font-bold text-gray-800">{{ title }}</h3>

            <p class="text-gray-500">{{ bodyText }}</p>

            <div class="mt-6 flex justify-center gap-x-4">
              <button
                @click="closeDialog"
                data-cy="close-dialog-button"
                type="button"
                class="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
