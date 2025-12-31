<template>
  <div class="book-card">
    <img :src="book.fileUrl" class="book-img" />
    <div class="text-center q-mt-sm">{{ book.name }}</div>
    <div class="text-center q-mt-sm">{{ book.author.name }}</div>
    <div class="text-center q-mt-sm">{{ book.inventory }}</div>
    <CusBtn
      class="Borrow-Book"
      color="blue"
      label="Borrow Book"
      :disabled="book.inventory <= 0"
      @click="
        () => {
          if (isAuthenticated) {
            showBorrow = true
          } else {
            showLogin = true
          }
        }
      "
    />
  </div>
  <q-dialog v-model="showLogin">
    <q-card v-if="showLogin">
      <q-card-section class="row items-center">
        <div class="text-h6">Please log in to borrow books.</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
        <q-btn flat label="Login" color="primary" @click="LoginPage" />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <q-dialog v-model="showBorrow">
    <q-card v-if="showBorrow">
      <q-card-section class="row items-center">
        <div class="text-h6">Are you sure you want to borrow this book?</div>
      </q-card-section>
      <q-card-actions align="right">
        <div class="all-date">
          <div>
            <p class="start-end">Start Time:</p>
            <div class="q-pa-md" style="max-width: 200px">
              <q-input filled v-model="startTime" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date
                        v-model="startTime"
                        minimal
                        :locale="dateLocale"
                        :calendar="localeCalendar"
                        :first-day-of-week="firstDayOfWeek"
                        class="tw-text-base-content tw-bg-base-100"
                      >
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Ok" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
          <div>
            <p class="start-end">End Time:</p>
            <div class="q-pa-md" style="max-width: 200px">
              <q-input filled v-model="endTime" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date
                        v-model="endTime"
                        minimal
                        :locale="dateLocale"
                        :calendar="localeCalendar"
                        :first-day-of-week="firstDayOfWeek"
                        class="tw-text-base-content tw-bg-base-100"
                      >
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Ok" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
        </div>
        <div class="btn-dig">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Confirm" color="primary" @click="confirmBorrow" />
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import CusBtn from 'src/components/molecules/CustomButton.vue'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/auth'
import moment from 'jalali-moment'
import { useBook } from 'src/composables/useBook.js'

const locale = ref('en')

const dateLocale = computed(() => {
  const enLocale = {
    days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    daysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    months:
      'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_',
      ),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
  }

  const faLocale = {
    days: 'یکشنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنجشنبه_جمعه_شنبه'.split('_'),
    daysShort: 'ی_د_س_چ_پ_ج_ش'.split('_'),
    months: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_'),
    monthsShort: 'فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند'.split('_'),
  }

  return locale.value === 'en' ? enLocale : faLocale
})

const localeCalendar = computed(() => (locale.value !== 'fa' ? 'gregorian' : 'persian'))

const firstDayOfWeek = computed(() => (locale.value === 'en' ? 0 : 6))

const { isAuthenticated } = storeToRefs(useUserStore())
const startTime = ref(moment().locale('en').format('YYYY/MM/DD'))
const endTime = ref(moment().locale('en').format('YYYY/MM/DD'))
const showLogin = ref(false)
const showBorrow = ref(false)

const LoginPage = () => {
  window.location.href = '/login'
}

const { book } = defineProps({
  book: {
    type: Object,
    required: true,
  },
})
const { confirmBorrow } = useBook(book)
</script>

<style scoped>
.Borrow-Book {
  width: 100%;
  margin-top: auto;
}
.book-img {
  height: 180px;
  width: 140px;
  border-radius: 10px;
}
.book-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;
  border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 250px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.all-date {
  display: flex;
  flex: 1;
  margin: 0;
  margin-left: 15px;
  padding: 10px;
}
.btn-dig {
  display: flex;
  justify-content: center;
  margin-top: auto;
  text-align: center;
}
.start-end {
  margin: 0;
  padding: 0;
}
</style>
