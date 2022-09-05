
<template>
    <main>
    <MainHeader />
    
        <p>IF YOU ALREADY HAVE AN ACCOUNT WITH US, YOU WILL NEED TO RESET YOUR PASSWORD BY CLICKING ON THE "FORGOT PASSWORD" LINK, FOLLOWING THE MIGRATION TO THE NEW SITE.
            <br/>SI VOUS AVEZ DÉJÀ UN COMPTE CHEZ NOUS, VOUS DEVEZ RÉINITIALISEZ VOTRE MOT DE PASSE EN CLIQUANT SUR LE LIEN "MOT DE PASSE OUBLIÉ", SUITE À LA MIGRATION SUR LE NOUVEAU SITE.</p>
    <section>
        <div class="login">
            <h3>Login</h3>
            <form class="login-form" @submit.prevent="handlesubmit">
                <label for= "username">
                <br/>
                Username or e-mail adress <span style="color:red">*</span>
                <br/>
                <input id="username" type="text" placeholder="">
                </label>
                <label for= "password">
                <br/>
                Password <span style="color:red">*</span>
                <br/>
                <input class="password" id="password" type="text" placeholder="" >
                </label>
                <br/>
                <input class="checkbox" type="checkbox" id="one" value="One" v-model="picked" />
                <span>Remember me</span>
                <br/>
                <button>Log in</button>
                <br/>
                <span>Lost your password?</span>
            </form>  
        </div>    
        <div class="register">   
            <h3>Register</h3>
            <form class="register-form" @submit.prevent="handlesubmit">
                <label for= "e-mail">
                <br/>
                E-mail adress <span Style="color:red">*</span>
                <br/>
                <input id="e-mail" type="text" placeholder="">
                </label>
                <br/>
                <span>A password will be sent to your email address.</span>
                <br/>
                <span>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</span>
                <br/>
                <button>Register</button>
            </form>           
        </div>
    </section>
    </main>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
export default {
name: "MyAccount",
methods: {handlesubmit() {}},
components: {MainHeader
}}
</script>

<style scoped lang="scss">
    p { padding-left: 120px;
        padding-right: 120px;
        font-family: Alata;
        text-transform: uppercase;
        font-size: 22px;
        text-align: center 
        
    }
    section {
        font-family: Playfair Display, serif;
        display: flex;
        justify-content: space-between;
        padding-left: 100px;
        padding-right: 100px;
     }
    .register, .login { 
        width: 500px;
        height: 1100px;

        h3 {
            text-align: left;
        }
    
    .login-form, .register-form{
        padding: 15px 20px;
        border: 1px solid #d3ced2;
        border-radius: 5px;
        margin: 0 auto;
        text-align: left;
        label {
            display: block;
            padding-bottom: 10px;
        }
        input {
            display: block;
            width: 430px;
            height: 35px;
            border: 1px solid #d3ced2;
        }
        .checkbox{
            width: 12px;
            height: 12px;
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
        }      
    }


</style>