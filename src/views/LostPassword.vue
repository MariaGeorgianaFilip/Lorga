<template>
    <div>
        <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
        <form class="lost-password" @submit.prevent="handlereset($event)"> 
            <label for= "e-mail">
            E-mail adress <span style="color:red">*</span><br/>
            <input 
            type="text" 
            v-model="user.email"
            placeholder="e-mail"> 
            </label>
            <button class="reset-password">Reset Password</button><br/>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LostPassword',
    methods: {
        handlereset(ev) {
        ev.preventDefault()
        this.$store.dispatch('password', this.user)
}}}
</script>

<style scoped lang="scss">
div {
    p {
        font-family: Fairplay Display, sans-serif;   
    }
    .lost-password {
        margin: 0 auto;
        width: 470px;
        height: 460px;
        padding: 15px 20px;
        border: 1px solid #d3ced2;
        border-radius: 5px;
        text-align: left;
        label {
            display: block;
            padding-bottom: 10px;
        }
        input {
            display: block;
            width: 410px;
            height: 35px;
            border: 1px solid #d3ced2;
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
}}}
</style>