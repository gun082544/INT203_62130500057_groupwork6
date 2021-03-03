const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    }
}

const app = {
    data() {
        return {
            name: 'Punnapop Chalor',
            account: '@pnnpp__',
            countPost: 40,
            followers: 723,
            following: 1791,
            image: './images/profile.jpg',
            firstname: null,
            lastname: null,
            gender: null,
            age: null,
            email: null,
            phone: null,
            errors: null,
            msg:""
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                firstname: this.firstname,
                lastname: this.lastname,
                age: this.age,
                gender: this.gender,
                email: this.email,
                phone: this.phone,
            }, constraints)

            console.log(this.errors)

            for (let error in this.errors) {
                this.msg += this.errors[error]+"\n"
            }
            alert(this.msg);

            if (!this.errors) {
                alert("Registered Successfully!")
            }
        }
    }
}

mountedApp = Vue.createApp(app).mount('#app')