<template>
  <div>

    <button
      @click="toggleChat"
      class="hover:animate-pulse fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-gray-300 p-4 rounded-full shadow-lg transition-colors duration-300"
    >

      <font-awesome-icon :icon="isOpen ? 'fa-minus' : 'fa-comment'" class="text-2xl" />
    </button>
    <div v-if="isOpen" class="fixed bottom-16 right-4 p-4 bg-gray-800 rounded-lg shadow-lg w-80">
      <h2 class="text-xl font-bold mb-4 text-white">Ask About me</h2>
      <div
        class="chat-window p-4 bg-white rounded-lg shadow-lg mb-4 max-h-64 overflow-y-auto space-y-4"
      >
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="flex items-start gap-2"
          :class="{
            'justify-end flex-row-reverse': message.sender === 'You',
          }"
        >
          <!-- Icon for ChatBot -->
          <font-awesome-icon
            v-if="message.sender === 'ChatBot'"
            :icon="['fas', 'robot']"
            class="text-gray-500 text-lg"
          />
          <!-- Chat bubble -->
          <div
            :class="{
              'bg-gray-200 text-gray-800 rounded-tl-lg rounded-tr-lg rounded-bl-lg p-2 ml-auto':
                message.sender === 'You',
              'bg-blue-100 text-blue-800 rounded-tl-lg rounded-tr-lg rounded-br-lg p-2 mr-auto':
                message.sender === 'ChatBot',
            }"
            class="max-w-[75%]"
          >
            <strong>{{ message.sender }}:</strong>
            <p>{{ message.text }}</p>
          </div>
        </div>
        <div v-if="isLoading" class="flex items-center justify-center">
          <div class="loader"></div>
        </div>
      </div>
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="Type your message here..."
        class="w-full p-2 border border-gray-300 rounded-lg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Message {
  sender: string
  text: string
}

export default defineComponent({
  name: 'ChatBot',
  setup() {
    const messages = ref<Message[]>([])
    const userInput = ref('')
    const isOpen = ref(false)
    const isLoading = ref(false)

    const responses: { [key: string]: string } = {
      hello: 'Hi there! How can I help you?',
      'who are you': 'I am a chatbot created to provide information about the developer.',
      'what do you do': 'The developer specializes in creating mobile and web applications.',
      bye: 'Goodbye! Have a great day!',
    }

    const keywords: { [key: string]: string } = {
      developer: 'The developer specializes in creating mobile and web applications.',
      skills: 'The developer has skills in both front-end and back-end development.',
      experience: 'The developer has experience in delivering high-quality solutions.',
    }

    const sendMessage = () => {
      if (userInput.value.trim()) {
        messages.value.push({ sender: 'You', text: userInput.value })
        isLoading.value = true

        setTimeout(() => {
          const response =
            getResponse(userInput.value.toLowerCase()) || 'I am not sure how to respond to that.'
          messages.value.push({ sender: 'ChatBot', text: response })
          isLoading.value = false

          // Clear the input field after sending the message
          userInput.value = ''
        }, 3000) // 3-second delay
      }
    }

    const getResponse = (input: string): string | null => {
      console.log('Checking responses for:', input)
      const lowerCaseInput = input.toLowerCase() // Convert the input to lowercase

      // First, check predefined responses
      for (const key in responses) {
        if (lowerCaseInput.includes(key)) {
          console.log('Response found:', responses[key])
          return responses[key]
        }
      }

      // Then, check for keywords
      for (const key in keywords) {
        if (lowerCaseInput.includes(key.toLowerCase())) {
          // Ensure keywords are also lowercased
          console.log('Keyword found:', keywords[key])
          return keywords[key]
        }
      }

      console.log('No match found')
      return null
    }

    const toggleChat = () => {
      isOpen.value = !isOpen.value
    }

    return {
      messages,
      userInput,
      isOpen,
      isLoading,
      sendMessage,
      toggleChat,
    }
  },
})
</script>

<style scoped>
/* Add any component-specific styles here */
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
