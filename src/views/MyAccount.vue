
<template>  
    <section>
        <p> MY ACCOUNT </p>     
        <div class="login">
            <h3>Login</h3>
            <form class="login-form" @submit.prevent="handlesubmit($event)"> 
            <label for= "e-mail">
            E-mail adress <span style="color:red">*</span><br/>
            <input 
                type="text" 
                v-model="user.email"
                placeholder="e-mail">
            </label>
            <br/>
            <label for= "password">
            Password <span style="color:red">*</span><br/>
            <input
                type="password" 
                v-model="user.password"
                placeholder="password" >
            </label>
            <br/>
            <div class="check-remember">
                <input 
                    class="check-box"
                    type="checkbox"  
                    value="One" 
                /><span>Remember me</span>
            </div>
            <button>Log in</button><br/>
            <router-link class="lost-password" :to="`/Myaccount/${LostPassword}`">Lost your password?</router-link><br/>
            </form> 
        </div>

        <div class="register">
            <h3>Register</h3>
            <form class="register-form" @submit.prevent="handleregister($event)"> 
            <label for= "e-mail">
            E-mail adress <span style="color:red">*</span><br/>
            <input 
                type="text" 
                v-model="user.email"
                placeholder="e-mail"> 
            <p>A password will be sent to your email address.
            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
            </label>
            <button>Register</button><br/>
            </form> 
        </div>    
    </section>
</template>

<script>
export default {
    name: 'MyAccount',
    data () {
        return {
            user: {
                email: '',
                password:'',
    }}},
    methods: {
        handlesubmit(ev) {
        ev.preventDefault()
        this.$store.dispatch('login', this.user)},

        handleregister(ev) {
        ev.preventDefault()
        this.$store.dispatch('register', this.user)
}}}
</script>

<style scoped lang="scss">
p {
    font-family: Playfair Display, serif;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 6px;
    padding-top: 60px;
    padding-bottom: 25px;
}
section {
    font-family: Playfair Display, serif;
    display: flex;
    justify-content: center;
    padding-bottom: 70px;
    padding-right: 45px;
    padding-left: 45px;
    .login, .register { 
        width: 470px;
        height: 460px;
        h3 {
            text-align: left;
            font-size:22px
            }
        .login-form, .register-form {
            padding: 15px 20px;
            border: 1px solid #d3ced2;
            border-radius: 5px;
            text-align: left;
            width: 350px;
            label {
                display: block;
                padding-bottom: 10px;
            }
            input {
                width: 270px;
                height: 35px;
                border: 1px solid #d3ced2;
            }
            .check-remember {
                display: flex;
                justify-content: left;
                align-items: center;
                .check-box {
                    width: 15px;
                    height: 15px;
                    margin-right:10px;
            }}
            p { 
                font-family: Playfair Display, serif;
                font-size: 16px;
                font-weight: 400;
                letter-spacing: normal;
                text-align: left;
                padding-top: 25px;
                margin: 0;
            }
            button {
                margin-top: 10px;
                border: none;
                border-radius: 8%;
                padding: 12px 24px;
                cursor: pointer;
                display: inline-block;
                vertical-align: middle;
                transform: perspective(1px) translateZ(0);
                box-shadow: 0 0 1px rgba(0, 0, 0, 0);
                position: relative;
                transition-property: color;
                transition-duration: 0.5s;}
                    button:before {
                    content: "";
                        position: absolute;
                        z-index: -1;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: black;
                        transform: scaleX(0);
                        transform-origin: 0 50%;
                        transition-property: transform;
                        transition-duration: 0.5s;
                        transition-timing-function: ease-out;
                    }
                    button:hover, button:focus, button:active {
                        color: white;
                    }
                    button:hover:before, button:focus:before, button:active:before {
                        transform: scaleX(1);
                        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
                    }
                    .lost-password {
                        color: black;
                        text-decoration: none;
                        padding-top: 25px;  
                        font-family: Playfair Display, serif;    
}}}}
</style>