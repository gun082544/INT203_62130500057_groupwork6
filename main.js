    const app = {
        data() {
            return {
                msg: 'Hello, Vue3',
                shown: true,
                url: 'http://www.sit.kmutt.ac.th'
            }
        }

    }
mountApp = Vue.createApp(app).mount('#app')