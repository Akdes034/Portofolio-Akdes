<template>
  <div>
    <button
      @click="toggleChat"
      class="hover:animate-pulse fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-gray-300 p-4 rounded-full shadow-lg transition-colors duration-300"
      aria-label="Toggle Chat"
    >
      <font-awesome-icon :icon="isOpen ? 'fa-minus' : 'fa-comment'" class="text-2xl" />
    </button>

    <div v-if="isOpen" class="fixed bottom-16 right-4 p-4 bg-gray-800 rounded-lg shadow-lg w-80">
      <h2 class="text-xl font-bold mb-2 text-white">Tanya Tentang Saya</h2>
      <p class="text-xs text-gray-300 mb-4">Akdes Simon Simamora • Full-Stack / Mobile / AI</p>

      <div
        class="chat-window p-4 bg-white rounded-lg shadow-lg mb-4 max-h-64 overflow-y-auto space-y-4"
        role="log"
        aria-live="polite"
      >
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="flex items-start gap-2"
          :class="{ 'justify-end flex-row-reverse': message.sender === 'You' }"
        >
          <font-awesome-icon
            v-if="message.sender === 'ChatBot'"
            :icon="['fas', 'robot']"
            class="text-gray-500 text-lg"
          />
          <div
            :class="{
              'bg-gray-200 text-gray-800 rounded-tl-lg rounded-tr-lg rounded-bl-lg p-2 ml-auto':
                message.sender === 'You',
              'bg-blue-100 text-blue-800 rounded-tl-lg rounded-tr-lg rounded-br-lg p-2 mr-auto':
                message.sender === 'ChatBot',
            }"
            class="max-w-[75%]"
          >
            <strong class="block mb-0.5">{{ message.sender }}:</strong>
            <p class="whitespace-pre-line">{{ message.text }}</p>
          </div>
        </div>
        <div v-if="isLoading" class="flex items-center justify-center">
          <div class="loader" aria-label="Loading"></div>
        </div>
      </div>

      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        placeholder="Ketik: skill / pengalaman / pendidikan / kontak / proyek ..."
        class="w-full p-2 border border-gray-300 rounded-lg"
        aria-label="Input pesan"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

interface Message {
  sender: 'You' | 'ChatBot'
  text: string
}

interface Experience {
  company: string
  role: string
  period: string
  details: string[]
  location?: string
}

interface Education {
  institution: string
  degree: string
  gpa?: string
  period: string
  activities?: string
}

interface ResumeData {
  name: string
  contact: {
    phone: string
    email: string
    linkedin: string
    github: string
    address: string
  }
  summary: string
  skills: {
    soft: string[]
    hard: string[]
  }
  experiences: Experience[]
  education: Education
  organization: {
    org: string
    role: string
    period: string
    details: string[]
  }[]
  achievements: string[]
  keywords: string[]
}

export default defineComponent({
  name: 'ChatBot',
  setup() {
    const messages = ref<Message[]>([])
    const userInput = ref('')
    const isOpen = ref(false)
    const isLoading = ref(false)

    // ===== Resume Data (dari CV kamu) =====
    const resumeData: ResumeData = {
      name: 'Akdes Simon Simamora',
      contact: {
        phone: '081260149558',
        email: 'akdes3112s@gmail.com',
        linkedin: 'https://www.linkedin.com/in/akdes-simamora-661664259/',
        github: 'https://github.com/Akdes034',
        address: 'Ompu Raja Hutapea, Kec. Laguboti, Toba, Sumatera Utara 22381',
      },
      summary:
        'Proficient in PHP, JavaScript, C#, Python, SQL, Java, dan Kotlin. Berpengalaman membangun web & mobile apps (Laravel, Flutter), solusi MSME, serta implementasi AI (YOLOv5 + GAN). Mengembangkan ISO 27001 Website Management System (Laravel) dengan modul materi & kuis.',
      skills: {
        soft: ['Leadership', 'Fleksibel & adaptif', 'Manajemen waktu'],
        hard: [
          'Laravel',
          '.NET Core / ASP.NET',
          'Spring Boot (Java)',
          'Flutter (Android)',
          'Kotlin',
          'PHP',
          'Python',
          'Java',
          'C#',
          'JavaScript',
          'SQL',
          'YOLOv5',
          'GAN',
          'GitHub Collaboration',
          'Figma',
          'Blade + Bootstrap',
        ],
      },
      experiences: [
        {
          company: 'Institut Teknologi Del',
          role: 'Programmer',
          period: 'Feb 2023 – Jun 2023',
          details: [
            'Website Covid-19 Tracking dengan .NET Core Web Service.',
            'Database modeling dengan Entity Framework.',
            'ASP.NET Core Web API untuk retrieval & processing data.',
            'ASP.NET Core MVC controller untuk integrasi ke frontend.',
          ],
          location: 'Laguboti, Toba Samosir',
        },
        {
          company: 'Institut Teknologi Del',
          role: 'Project Manager & Programmer',
          period: 'Feb 2023 – Jun 2023',
          details: [
            'Sistem Toko Bahagia (web: Laravel, mobile: Flutter).',
            'REST API Laravel dengan token-based authentication.',
            'Arsitektur MVC (scalable & reusable).',
            'Flutter BLoC state management.',
          ],
          location: 'Laguboti, Toba Samosir',
        },
        {
          company: 'Institut Teknologi Del',
          role: 'Programmer',
          period: 'Nov 2023 – Jan 2024',
          details: [
            'Layanan BAAK dengan Spring Boot (Java) REST API.',
            'Autentikasi per fitur (requirement-based).',
            'Frontend responsif menggunakan Laravel.',
          ],
          location: 'Laguboti, Toba Samosir',
        },
        {
          company: 'Institut Teknologi Del',
          role: 'Project Manager & Programmer',
          period: 'Aug 2023 – Jul 2024',
          details: [
            'Implementasi YOLOv5 & GAN untuk klasifikasi Caladium.',
            'Pipeline training, evaluasi, dan testing untuk GAN & YOLOv5.',
            'Aplikasi mobile Kotlin yang integrasi model YOLOv5.',
            'Augmentasi dataset dengan GAN untuk tingkatkan akurasi.',
          ],
          location: 'Laguboti, Toba Samosir',
        },
        {
          company: 'PT. Sembrani Siber Solusindo',
          role: 'Full Stack Developer',
          period: 'Jul 2024 – Aug 2024',
          details: [
            'ISO 27001 Management System (Laravel).',
            'Desain use case & ERD, mockup UI (Figma).',
            'Blade + Bootstrap, modul materi & layout topik-gambar-deskripsi.',
            'Sistem kuis dinamis dengan feedback & reinforcement.',
            'Secure authentication & proteksi data.',
          ],
          location: 'Setiabudi, Jakarta Selatan',
        },
      ],
      education: {
        institution: 'Institut Teknologi Del',
        degree: 'Diploma in Information Technology',
        gpa: '3.50/4.00',
        period: 'Aug 2021 – Sep 2024',
        activities: 'Aktif di 5+ event kampus (webinar, kompetisi, workshop).',
      },
      organization: [
        {
          org: 'Student Leadership Program (Dorm IT Del)',
          role: 'Foster Brother',
          period: 'Aug 2022 – Jul 2023',
          details: [
            'Membantu adaptasi maba di lingkungan kampus/dorm.',
            'Mendampingi perkuliahan & pembinaan sikap.',
          ],
        },
      ],
      achievements: ['Peserta Himatif Coding Day (kompetisi kampus)'],

      // kata kunci bantu untuk pencarian sederhana
      keywords: [
        'skill',
        'keahlian',
        'kemampuan',
        'stack',
        'tech',
        'pengalaman',
        'experience',
        'pendidikan',
        'edukasi',
        'kontak',
        'contact',
        'email',
        'telepon',
        'nomor',
        'alamat',
        'linkedin',
        'github',
        'proyek',
        'project',
        'portfolio',
        'portofolio',
        'bahagia',
        'caladium',
        'iso 27001',
        'yolov5',
        'gan',
        'flutter',
        'laravel',
        '.net',
        'spring boot',
      ],
    }

    // ===== Respon template =====
    const canned: Record<string, string> = {
      halo: `Halo! Saya ChatBot profil ${resumeData.name}. Tanyakan apa saja tentang skill, pengalaman, pendidikan, proyek, atau kontak.`,
      'siapa kamu': `Saya chatbot yang menjawab berdasarkan CV ${resumeData.name}. Ringkasannya: ${resumeData.summary}`,
      bye: 'Sampai jumpa! Semoga harimu menyenangkan!',
    }

    // ===== Helpers =====
    const bullets = (items: string[]) => items.map((i) => `• ${i}`).join('\n')
    const formatExperience = (exp: Experience) =>
      `\n${exp.role} — ${exp.company} (${exp.period})${exp.location ? ' • ' + exp.location : ''}\n${bullets(exp.details)}`

    const answerers: Array<(q: string) => string | null> = [
      // 1) Kontak
      (q) => {
        if (/(kontak|contact|email|telepon|nomor|alamat|linkedin|github)/i.test(q)) {
          const c = resumeData.contact
          return [
            'Kontak saya:',
            `• Email: ${c.email}`,
            `• Telepon: ${c.phone}`,
            `• LinkedIn: ${c.linkedin}`,
            `• GitHub: ${c.github}`,
            `• Alamat: ${c.address}`,
          ].join('\n')
        }
        return null
      },
      // 2) Skill / Tech stack
      (q) => {
        if (/(skill|keahlian|kemampuan|stack|tech|teknologi)/i.test(q)) {
          return [
            'Keahlian:',
            `• Hard: ${resumeData.skills.hard.join(', ')}`,
            `• Soft: ${resumeData.skills.soft.join(', ')}`,
          ].join('\n')
        }
        return null
      },
      // 3) Pengalaman kerja
      (q) => {
        if (/(pengalaman|experience|kerja|riwayat kerja)/i.test(q)) {
          return 'Pengalaman kerja utama:' + resumeData.experiences.map(formatExperience).join('\n')
        }
        return null
      },
      // 4) Pendidikan
      (q) => {
        if (/(pendidikan|edukasi|kuliah|kampus|gpa|ipk)/i.test(q)) {
          const e = resumeData.education
          return [
            'Pendidikan:',
            `• Institusi: ${e.institution}`,
            `• Gelar: ${e.degree}`,
            e.gpa ? `• GPA/IPK: ${e.gpa}` : '',
            `• Periode: ${e.period}`,
            e.activities ? `• Aktivitas: ${e.activities}` : '',
          ]
            .filter(Boolean)
            .join('\n')
        }
        return null
      },
      // 5) Proyek / Portfolio
      (q) => {
        if (/(proyek|project|portfolio|portofolio|bahagia|caladium)/i.test(q)) {
          const lines = [
            'Proyek & tautan:',
            '• Toko Bahagia (Laravel + Flutter) — REST API dengan auth token; BLoC untuk state management.',
            '• Caladium (YOLOv5 + GAN, Kotlin) — deteksi tanaman hias; augmentasi dataset dengan GAN.',
            '• Covid-19 Tracking (.NET Core, ASP.NET) — Web Service + MVC.',
            '• Layanan BAAK (Spring Boot + Laravel FE).',
            '• ISO 27001 Management System (Laravel, Blade, Bootstrap) — materi & kuis dinamis.',
          ]
          return lines.join('\n')
        }
        return null
      },
      // 6) ISO 27001 spesifik
      (q) => {
        if (/iso\s*27001/i.test(q)) {
          return [
            'ISO 27001 Management System (Laravel):',
            '• Desain use case & ERD, mockup (Figma).',
            '• Modul materi: layout topik–gambar–deskripsi.',
            '• Kuis dinamis dgn feedback & reinforcement.',
            '• Autentikasi & proteksi data.',
          ].join('\n')
        }
        return null
      },
      // 7) YOLOv5 / GAN spesifik
      (q) => {
        if (/(yolov5|gan|computer\s*vision|deteksi|object detection)/i.test(q)) {
          return [
            'AI/Computer Vision (YOLOv5 + GAN):',
            '• Pipeline training/evaluasi YOLOv5 untuk Caladium.',
            '• GAN utk augmentasi dataset → tingkatkan akurasi.',
            '• Integrasi model ke app Kotlin (on-device).',
          ].join('\n')
        }
        return null
      },
      // 8) Ringkasan / Perkenalan cepat
      (q) => {
        if (/(ringkas|summary|perkenalan|siapa)/i.test(q)) {
          return `Perkenalan singkat:\n${resumeData.summary}`
        }
        return null
      },
      // 9) Prestasi / Organisasi
      (q) => {
        if (/(prestasi|achievement|organisasi|organization)/i.test(q)) {
          return [
            'Prestasi & Organisasi:',
            `• ${resumeData.achievements.join(', ')}`,
            '• ' +
              resumeData.organization.map((o) => `${o.role} — ${o.org} (${o.period})`).join('; '),
          ].join('\n')
        }
        return null
      },
      // 10) Tanyakan link LinkedIn/GitHub cepat
      (q) => {
        if (/linkedin/i.test(q)) return `LinkedIn: ${resumeData.contact.linkedin}`
        if (/github/i.test(q)) return `GitHub: ${resumeData.contact.github}`
        return null
      },
    ]

    // ===== Engine pencocokan sederhana =====
    const getResponse = (input: string): string | null => {
      const q = input.toLowerCase().trim()

      // canned first
      for (const key in canned) {
        if (q.includes(key)) return canned[key]
      }

      // answerers
      for (const fn of answerers) {
        const ans = fn(q)
        if (ans) return ans
      }

      // fallback jika menyebut nama/keyword terkait
      if (resumeData.keywords.some((k) => q.includes(k))) {
        return 'Bisa kamu perjelas? Kamu ingin info tentang skill, pengalaman, proyek, pendidikan, atau kontak?'
      }

      return null
    }

    // ===== Actions =====
    const sendMessage = () => {
      const txt = userInput.value.trim()
      if (!txt) return
      messages.value.push({ sender: 'You', text: txt })
      isLoading.value = true

      setTimeout(() => {
        const response =
          getResponse(txt) ||
          'Maaf, aku belum paham. Coba kata kunci seperti: "skill", "pengalaman", "pendidikan", "proyek", atau "kontak".'
        messages.value.push({ sender: 'ChatBot', text: response })
        isLoading.value = false
        userInput.value = ''
      }, 600)
    }

    const toggleChat = () => {
      isOpen.value = !isOpen.value
    }

    onMounted(() => {
      // Sapaan awal
      messages.value.push({
        sender: 'ChatBot',
        text:
          `Hai! Aku asisten profil ${resumeData.name}. ` +
          `Tanyakan: skill, pengalaman, pendidikan, proyek, atau langsung ketik "kontak".`,
      })
    })

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
.chat-window {
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;
}
.chat-window::-webkit-scrollbar {
  width: 6px;
}
.chat-window::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.chat-window::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 10px;
}
</style>
